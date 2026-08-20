import { createFileRoute } from "@tanstack/react-router";
import { LetterPage, letterHead, loadLetter } from "@/components/category-subpages";

export const Route = createFileRoute("/jentenavn/bokstav/$letter")({
  loader: ({ params }) => loadLetter("jentenavn", params.letter),
  head: ({ params }) => letterHead("jentenavn", params.letter),
  component: Component,
});

function Component() {
  const { letter } = Route.useLoaderData();
  return <LetterPage slug="jentenavn" letter={letter} />;
}
