"use client";

import type { ProjectType } from "@/lib/contact";

export const PROJECT_TYPE_EVENT = "devzone:project-type";

// Jumps to the contact form and preselects the matching project type.
// Without JavaScript it still works as a plain anchor link.
export function ServiceLink({ type, children }: { type: ProjectType; children: React.ReactNode }) {
  return (
    <a
      href="#contato"
      className="text-link"
      onClick={() => window.dispatchEvent(new CustomEvent<ProjectType>(PROJECT_TYPE_EVENT, { detail: type }))}
    >
      {children}
    </a>
  );
}
