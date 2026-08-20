import { createFileRoute } from "@tanstack/react-router";
import { LetterPage, letterHead, loadLetter } from "@/components/category-subpages";

export const Route = createFileRoute("/kattenavn/bokstav/$letter")({
  loader: ({ params }) => loadLetter("kattenavn", params.letter),
  head: ({ params }) => letterHead("kattenavn", params.letter),
  component: Component,
});

function Component() {
  const { letter } = Route.useLoaderData();
  return <LetterPage slug="kattenavn" letter={letter} />;
}
