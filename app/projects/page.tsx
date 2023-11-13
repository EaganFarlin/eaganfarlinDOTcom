import { Metadata } from "next";
import { ProjectsSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";
import Projects from "@/app/projects/projects";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <Suspense fallback={<ProjectsSkeleton />}>
      <Projects />
    </Suspense>
  );
}
