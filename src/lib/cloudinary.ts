import { v2 as cloudinary, UploadApiResponse } from "cloudinary";
import path from "path";

// Configure Cloudinary from environment variables
if (
  process.env.CLOUDINARY_CLOUD_NAME &&
  process.env.CLOUDINARY_API_KEY &&
  process.env.CLOUDINARY_API_SECRET
) {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
    timeout: 60000,
  });
}

/**
 * Returns true if Cloudinary environment variables are configured.
 */
export function isCloudinaryConfigured(): boolean {
  return Boolean(
    process.env.CLOUDINARY_CLOUD_NAME &&
    process.env.CLOUDINARY_API_KEY &&
    process.env.CLOUDINARY_API_SECRET
  );
}

/**
 * Uploads an image buffer directly to Cloudinary.
 */
export async function uploadToCloudinary(
  buffer: Buffer,
  originalFilename: string,
  folder: string = "dr_omar_portfolio"
): Promise<{ url: string; publicId: string; format?: string }> {
  const ext = path.extname(originalFilename);
  const baseName = path.basename(originalFilename, ext).replace(/[^\w-]/g, "_");
  const publicId = `${baseName}_${Date.now()}`;

  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder,
        public_id: publicId,
        resource_type: "image",
        overwrite: true,
      },
      (error, result: UploadApiResponse | undefined) => {
        if (error || !result) {
          return reject(error || new Error("Cloudinary upload failed"));
        }
        resolve({
          url: result.secure_url,
          publicId: result.public_id,
          format: result.format,
        });
      }
    );

    uploadStream.end(buffer);
  });
}

export { cloudinary };
