import { createFileRoute } from "@tanstack/react-router";
import { LetterPage, letterHead, loadLetter } from "@/components/category-subpages";

export const Route = createFileRoute("/guttenavn/bokstav/$letter")({
  loader: ({ params }) => loadLetter("guttenavn", params.letter),
  head: ({ params }) => letterHead("guttenavn", params.letter),
  component: Component,
});

function Component() {
  const { letter } = Route.useLoaderData();
  return <LetterPage slug="guttenavn" letter={letter} />;
}
