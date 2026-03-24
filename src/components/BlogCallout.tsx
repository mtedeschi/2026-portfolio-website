import type { ReactNode } from "react";

type BlogCalloutProps = {
  children: ReactNode;
};

export function BlogCallout({ children }: BlogCalloutProps) {
  return (
    <aside className="my-8 rounded-xl border border-primary/40 bg-primary/15 px-5 pb-4 text-base font-bold italic leading-relaxed backdrop-blur supports-backdrop-filter:bg-primary/10">
      {children}
    </aside>
  );
}
