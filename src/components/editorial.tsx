import type { Editorial } from "@/data/content";

export function EditorialBlock({ content }: { content: Editorial }) {
  return (
    <div className="space-y-10">
      {content.sections.map((section) => (
        <section key={section.heading}>
          <h2 className="text-2xl">{section.heading}</h2>
          {section.body && <p className="mt-3 text-muted-foreground">{section.body}</p>}
          {section.bullets && (
            <ul className="mt-4 space-y-2.5">
              {section.bullets.map((b) => (
                <li key={b.text} className="flex gap-3 text-muted-foreground">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  />
                  <span>
                    {b.lead && <strong className="font-medium text-foreground">{b.lead}: </strong>}
                    {b.text}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}
