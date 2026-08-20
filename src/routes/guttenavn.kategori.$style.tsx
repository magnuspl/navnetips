import { createFileRoute } from "@tanstack/react-router";
import { StylePage, loadStyle, styleHead } from "@/components/category-subpages";

export const Route = createFileRoute("/guttenavn/kategori/$style")({
  loader: ({ params }) => loadStyle("guttenavn", params.style),
  head: ({ params }) => styleHead("guttenavn", params.style),
  component: Component,
});

function Component() {
  const { style } = Route.useLoaderData();
  return <StylePage slug="guttenavn" style={style} />;
}
