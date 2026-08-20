import { createFileRoute } from "@tanstack/react-router";
import { LengthPage, lengthHead, loadLength } from "@/components/category-subpages";

export const Route = createFileRoute("/hundenavn/lengde/$length")({
  loader: ({ params }) => loadLength("hundenavn", params.length),
  head: ({ params }) => lengthHead("hundenavn", params.length),
  component: Component,
});

function Component() {
  const { length } = Route.useLoaderData();
  return <LengthPage slug="hundenavn" length={length} />;
}
