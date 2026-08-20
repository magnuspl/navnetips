import { createFileRoute } from "@tanstack/react-router";
import { CategoryPageView, categoryHead } from "@/components/category-page-view";
import { categoryEditorial } from "@/data/content";
import { categoryPageBySlug } from "@/data/names";

const page = categoryPageBySlug("guttenavn")!;

export const Route = createFileRoute("/guttenavn/")({
  head: () => categoryHead(page),
  component: () => <CategoryPageView page={page} editorial={categoryEditorial[page.category]} />,
});
