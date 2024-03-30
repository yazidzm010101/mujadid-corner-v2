import fs from "fs";
import { join } from "path";

import matter from "gray-matter";

export function getSlugs(path: string): string[] {
  const dir = join(process.cwd(), path);
  return fs.readdirSync(dir);
}

export function parseGraymatter(
  path: string,
  slug: string,
  fields: string[]
): Record<string, any> {
  const fileName: string = slug.replace(/\.md$/, "") + ".md";
  const fileDir: string = join(process.cwd(), path, fileName);
  const fileContent: string = fs.readFileSync(fileDir, "utf-8");
  const { data, content } = matter(fileContent);

  const items: Record<string, any> = {};

  fields.forEach((field: string) => {
    if (field == "slug") items[field] = data[field] || slug;
    else if (field == "content") items[field] = content;
    else if (typeof data[field] !== "undefined") {
      if (field === "date") {
        const date = new Date(data[field]);
        items["year"] = date.getFullYear();
        items["month"] = date.getMonth() + 1;
        items[field] = date.toString();
      } else {
        items[field] = data[field];
      }
    }
  });

  return items;
}

export function getAllMarkdowns(
  path: string,
  fields: string[]
): Record<string, any>[] {
  const slugs = getSlugs(path);
  const contents = slugs
    .map((slug) => parseGraymatter(path, slug, fields))
    .sort((prev, next) =>
      new Date(prev.date).getTime() > new Date(next.date).getTime() ? 1 : -1
    );
  return contents;
}