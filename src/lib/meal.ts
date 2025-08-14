import sql from "better-sqlite3";
import fs from "fs";
import path from "path";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals(): Promise<any[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("Failed to fetch meals");
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug: any) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal: any) {
  meal.slug = slugify(meal.title, { lower: true });
	meal.instructions = xss(meal.instructions);

	const imagesDir = path.join(process.cwd(), "public", "images");
	if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });

	const extension = meal.image.name.split(".").pop();
	const fileName = `${meal.slug}.${extension}`;
	const filePath = path.join(imagesDir, fileName);

	const stream = fs.createWriteStream(filePath);
	const bufferedImage = await meal.image.arrayBuffer();
	stream.write(Buffer.from(bufferedImage), (error) => {
		if (error) throw new Error("Saving image failed!");
	});

	meal.image = `/images/${fileName}`;

  db.prepare(
    `
      INSERT INTO meals
        (title, summary, instructions, creator, creator_email, image, slug)
      VALUES (
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @image,
        @slug
      )
    `
  ).run(meal);
}