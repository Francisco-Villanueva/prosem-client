import React, { ReactNode } from "react";
interface PageLayoutProps {
  children: ReactNode;
  id: string;
}
export default function PageLayout({ children, id }: PageLayoutProps) {
  return (
    <section id={id} className="h-full w-full flex  py-[12vh] bg-white  ">
      {children}
    </section>
  );
}
