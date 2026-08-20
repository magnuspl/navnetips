import { createFileRoute } from "@tanstack/react-router";
import { CategoryPageView, categoryHead } from "@/components/category-page-view";
import { categoryEditorial } from "@/data/content";
import { categoryPageBySlug } from "@/data/names";

const page = categoryPageBySlug("jentenavn")!;

export const Route = createFileRoute("/jentenavn/")({
  head: () => categoryHead(page),
  component: () => <CategoryPageView page={page} editorial={categoryEditorial[page.category]} />,
});
