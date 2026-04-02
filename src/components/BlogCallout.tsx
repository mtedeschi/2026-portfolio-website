import type { ReactNode } from "react";

type BlogCalloutProps = {
  children: ReactNode;
};

export function BlogCallout({ children }: BlogCalloutProps) {
  return (
    <aside className="my-8 rounded-xl border border-primary/35 bg-primary/10 px-5 pb-4 text-base font-semibold italic leading-relaxed text-foreground">
      {children}
    </aside>
  );
}
