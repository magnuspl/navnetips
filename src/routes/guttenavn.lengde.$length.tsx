import { createFileRoute } from "@tanstack/react-router";
import { LengthPage, lengthHead, loadLength } from "@/components/category-subpages";

export const Route = createFileRoute("/guttenavn/lengde/$length")({
  loader: ({ params }) => loadLength("guttenavn", params.length),
  head: ({ params }) => lengthHead("guttenavn", params.length),
  component: Component,
});

function Component() {
  const { length } = Route.useLoaderData();
  return <LengthPage slug="guttenavn" length={length} />;
}
