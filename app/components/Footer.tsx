import Image from "next/image";
import React from "react";

export function Footer() {
  return (
    <footer className="bg-green p-10">
      <section>
        <div className="relative w-24 aspect-video">
          <Image src={"/svg/Logo-white.svg"} fill alt="Prosem Logo" />
        </div>
      </section>
    </footer>
  );
}
