import { createFileRoute } from "@tanstack/react-router";
import { StylePage, loadStyle, styleHead } from "@/components/category-subpages";

export const Route = createFileRoute("/jentenavn/kategori/$style")({
  loader: ({ params }) => loadStyle("jentenavn", params.style),
  head: ({ params }) => styleHead("jentenavn", params.style),
  component: Component,
});

function Component() {
  const { style } = Route.useLoaderData();
  return <StylePage slug="jentenavn" style={style} />;
}
