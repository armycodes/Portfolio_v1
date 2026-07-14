import type { WritingCredit } from "@/types";

export const WRITING_CREDITS: WritingCredit[] = [
  {
    id: "1",
    role: "Content Writer",
    publication: "The Asian Mirror",
    description:
      "Wrote and contributed articles as part of the publication's content team.",
    tag: "Published",
    href: "#",
  },
  {
    id: "2",
    role: "Featured Writer",
    publication: "Cacoethes Scribendi",
    description: "Work featured in the publication's collection of writing.",
    tag: "Featured",
    href: "#",
  },
  {
    id: "3",
    role: "Content Writer & Podcast Researcher",
    publication: "The Dead Poets Society",
    description:
      "Writes content and researches topics for the podcast alongside the writing team.",
    tag: "Ongoing",
    href: "#",
  },
];

export const NOVEL_IN_PROGRESS = {
  label: "Currently working on",
  title: "A novel — in progress, on its way to release.",
  status: "Writing",
};
