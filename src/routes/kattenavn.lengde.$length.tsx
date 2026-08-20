import { createFileRoute } from "@tanstack/react-router";
import { LengthPage, lengthHead, loadLength } from "@/components/category-subpages";

export const Route = createFileRoute("/kattenavn/lengde/$length")({
  loader: ({ params }) => loadLength("kattenavn", params.length),
  head: ({ params }) => lengthHead("kattenavn", params.length),
  component: Component,
});

function Component() {
  const { length } = Route.useLoaderData();
  return <LengthPage slug="kattenavn" length={length} />;
}
