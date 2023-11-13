import { promises as fs } from "fs";

export async function getProjects() {
  try {
    const projectsJSONFile = await fs.readFile(
      process.cwd() + "/app/lib/projects/projects.json",
      "utf8"
    );
    const projects = JSON.parse(projectsJSONFile);

    return projects;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest invoices.");
  }
}
