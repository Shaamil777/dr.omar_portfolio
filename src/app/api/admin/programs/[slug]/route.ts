import { NextResponse } from "next/server";
import { getProgramBySlug, saveProgram, deleteProgram } from "@/lib/storage";
import { getAdminSession } from "@/lib/auth";
import { CompanyData } from "@/constants/companies";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const program = await getProgramBySlug(slug);

    if (!program) {
      return NextResponse.json({ error: "Program not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: program });
  } catch (error) {
    console.error("Error retrieving program:", error);
    return NextResponse.json(
      { error: "Failed to retrieve program" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const isAuth = await getAdminSession();
    if (!isAuth) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { slug } = await params;
    const body = (await request.json()) as CompanyData;

    const existing = await getProgramBySlug(slug);
    if (!existing) {
      return NextResponse.json({ error: "Program not found" }, { status: 404 });
    }

    const updated: CompanyData = {
      ...existing,
      ...body,
      slug: existing.slug, // preserve primary slug
    };

    const saved = await saveProgram(updated);
    return NextResponse.json({ success: true, data: saved });
  } catch (error) {
    console.error("Error updating program:", error);
    return NextResponse.json(
      { error: "Failed to update program" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const isAuth = await getAdminSession();
    if (!isAuth) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { slug } = await params;

    // Safety check: protect BCC baseline template if desired, or allow delete with caution
    if (slug.toLowerCase() === "bcc") {
      return NextResponse.json(
        { error: "The default BCC template cannot be deleted" },
        { status: 400 }
      );
    }

    const deleted = await deleteProgram(slug);
    if (!deleted) {
      return NextResponse.json({ error: "Program not found" }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: `Program ${slug} deleted successfully`,
    });
  } catch (error) {
    console.error("Error deleting program:", error);
    return NextResponse.json(
      { error: "Failed to delete program" },
      { status: 500 }
    );
  }
}
