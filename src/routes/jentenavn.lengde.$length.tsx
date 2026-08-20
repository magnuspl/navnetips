import { createFileRoute } from "@tanstack/react-router";
import { LengthPage, lengthHead, loadLength } from "@/components/category-subpages";

export const Route = createFileRoute("/jentenavn/lengde/$length")({
  loader: ({ params }) => loadLength("jentenavn", params.length),
  head: ({ params }) => lengthHead("jentenavn", params.length),
  component: Component,
});

function Component() {
  const { length } = Route.useLoaderData();
  return <LengthPage slug="jentenavn" length={length} />;
}
