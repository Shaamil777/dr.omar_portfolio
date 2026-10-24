import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { isCloudinaryConfigured, uploadToCloudinary } from "@/lib/cloudinary";
import fs from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  try {
    const isAuth = await getAdminSession();
    if (!isAuth) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Option 1: Cloudinary Upload (If credentials provided in .env)
    if (isCloudinaryConfigured()) {
      try {
        const result = await uploadToCloudinary(buffer, file.name, "dr_omar_portfolio/uploads");
        return NextResponse.json({
          success: true,
          url: result.url,
          fileName: result.publicId,
          provider: "cloudinary",
        });
      } catch (cloudinaryError) {
        console.error("Cloudinary upload failed, falling back to local storage:", cloudinaryError);
        // Fall through to local storage if Cloudinary upload fails
      }
    }

    // Option 2: Local Storage (Fallback or default when no remote keys provided)
    const ext = path.extname(file.name) || ".png";
    const baseName = path.basename(file.name, ext).replace(/[^\w-]/g, "_");
    const uniqueName = `${baseName}_${Date.now()}${ext}`;

    const uploadDir = path.join(process.cwd(), "public", "uploads");
    await fs.mkdir(uploadDir, { recursive: true });

    const filePath = path.join(uploadDir, uniqueName);
    await fs.writeFile(filePath, buffer);

    const publicUrl = `/uploads/${uniqueName}`;

    return NextResponse.json({
      success: true,
      url: publicUrl,
      fileName: uniqueName,
      provider: "local",
      note: "Uploaded to local storage. Provide CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET in .env.local to route directly to Cloudinary.",
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Failed to upload file" },
      { status: 500 }
    );
  }
}
