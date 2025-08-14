import { NextRequest, NextResponse } from "next/server";
import { saveMeal } from "@/lib/meal";

function isInvalidText(text: any) {
  return !text || text.trim() === "";
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const meal = {
      title: formData.get("title") as string,
      summary: formData.get("summary") as string,
      instructions: formData.get("instructions") as string,
      image: formData.get("image") as File,
      creator: formData.get("name") as string,
      creator_email: formData.get("email") as string,
    };

    if (
      isInvalidText(meal.title) ||
      isInvalidText(meal.summary) ||
      isInvalidText(meal.instructions) ||
      isInvalidText(meal.creator) ||
      isInvalidText(meal.creator_email) ||
      !meal.creator_email.includes("@") ||
      !meal.image ||
      meal.image.size === 0
    ) {
      return NextResponse.json({ message: "Invalid input." }, { status: 400 });
    }

    await saveMeal(meal);
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ message: "Internal error" }, { status: 500 });
  }
}