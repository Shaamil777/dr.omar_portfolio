import { NextResponse } from "next/server";
import { getPrograms, saveProgram } from "@/lib/storage";
import { getAdminSession } from "@/lib/auth";
import { CompanyData } from "@/constants/companies";

export async function GET() {
  try {
    const programs = await getPrograms();
    return NextResponse.json({ success: true, data: programs });
  } catch (error) {
    console.error("Error fetching programs:", error);
    return NextResponse.json(
      { error: "Failed to fetch programs" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const isAuth = await getAdminSession();
    if (!isAuth) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = (await request.json()) as CompanyData;

    if (!body.name || !body.slug) {
      return NextResponse.json(
        { error: "Program name and slug are required" },
        { status: 400 }
      );
    }

    // Clean up slug
    body.slug = body.slug
      .toLowerCase()
      .trim()
      .replace(/[^\w-]/g, "")
      .replace(/[\s-]+/g, "_");

    // Ensure default arrays and components while preserving all submitted fields
    const completeProgram: CompanyData = {
      ...body,
      slug: body.slug,
      name: body.name,
      description: body.description || "",
      aboutImage: body.aboutImage || "/images/programmes/bcc-about-bg.webp",
      aboutParagraphs: body.aboutParagraphs || [],
      missionVisionHeading: body.missionVisionHeading || [],
      missionVisionDesc: body.missionVisionDesc || "",
      stats: body.stats || [],
      mission: body.mission || "",
      vision: body.vision || "",
      missionVisionImages: body.missionVisionImages || [],
      faqs: body.faqs || [],
      gallery: body.gallery || [],
      galleryTitle: body.galleryTitle,
      galleryDescription: body.galleryDescription,
      galleryStats: body.galleryStats,
      highlights: body.highlights || [],
      pillars: body.pillars || [],
      features: body.features || [],
      testimonials: body.testimonials || [],
      blogs: body.blogs || [],
      story: body.story,
      closing: body.closing || {
        heading: "Begin Your Transformation",
        description: "Join the elite network of purpose-driven leaders.",
        cta: "Enquire Now",
      },
      components: body.components || ["Hero", "About", "Testimonial", "UpcomingEvents"],
    };

    const saved = await saveProgram(completeProgram);
    return NextResponse.json({ success: true, data: saved }, { status: 201 });
  } catch (error) {
    console.error("Error creating program:", error);
    return NextResponse.json(
      { error: "Failed to create program" },
      { status: 500 }
    );
  }
}
