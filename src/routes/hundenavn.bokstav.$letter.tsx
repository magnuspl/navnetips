import { createFileRoute } from "@tanstack/react-router";
import { LetterPage, letterHead, loadLetter } from "@/components/category-subpages";

export const Route = createFileRoute("/hundenavn/bokstav/$letter")({
  loader: ({ params }) => loadLetter("hundenavn", params.letter),
  head: ({ params }) => letterHead("hundenavn", params.letter),
  component: Component,
});

function Component() {
  const { letter } = Route.useLoaderData();
  return <LetterPage slug="hundenavn" letter={letter} />;
}
