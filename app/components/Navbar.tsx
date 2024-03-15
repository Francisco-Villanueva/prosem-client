"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export function Navbar() {
  const items = ["Home", "Features", "WhyUs", "Pricing"];
  const [activeSection, setActiveSection] = useState<unknown>(null);
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    // Agrega el listener al evento de scroll
    window.addEventListener("scroll", handleScroll);

    // Limpia el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      // Obtén el desplazamiento actual de la página
      const scrollY = window.scrollY;

      // Recorre las secciones y determina cuál está actualmente visible

      const sectionOffsets = items.map((item) => {
        const section = document.getElementById(item);
        if (!section) return;
        return {
          id: item,
          offsetTop: section.offsetTop,
          offsetBottom: section.offsetTop + section.offsetHeight,
        };
      });

      // Encuentra la sección activa
      // @ts-nocheck
      const newActiveSection = sectionOffsets.find((section) => {
        if (!section) return;
        return scrollY >= section.offsetTop && scrollY < section.offsetBottom;
      });

      // Actualiza el estado solo si la sección activa cambia
      if (newActiveSection && newActiveSection.id !== activeSection) {
        setActiveSection(newActiveSection.id);
      } else if (!newActiveSection && activeSection) {
        setActiveSection(null);
      }
    };

    // Agrega el event listener al montar el componente
    window.addEventListener("scroll", handleScroll);

    // Limpia el event listener al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return (
    <nav
      className={`fixed top-0 w-full h-[10vh] z-50 transition-all duration-300 ${
        scrolling ? "bg-green" : ""
      }`}
    >
      <div className="flex w-[80%] m-auto h-full items-center justify-between">
        <div className="relative w-52 h-52">
          <Image
            src={"/svg/Logo-white.svg"}
            fill
            objectFit="contain"
            alt="Prosem Logo Enterprise"
          />
        </div>
        <div className="flex gap-4 text-white  z-10 items-center">
          {items.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={
                activeSection === item ? "font-semibold" : " font-extralight"
              }
            >
              {item}
            </a>
          ))}
          <a
            href="https://prosem-backoffice-chi.vercel.app/login"
            className="bg-white p-2 rounded-md text-green hover:bg-black transition-all duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
