import React, { ReactNode } from "react";
interface PageLayoutProps {
  children: ReactNode;
  id: string;
}
export default function PageLayout({ children, id }: PageLayoutProps) {
  return (
    <section
      id={id}
      className="h-full min-h-full w-full max-w-full overflow-hidden flex  py-[12vh] bg-white  "
    >
      {children}
    </section>
  );
}
