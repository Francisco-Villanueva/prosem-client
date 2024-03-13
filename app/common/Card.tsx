import React, { ReactNode } from "react";

interface CardProps {
  icon?: ReactNode;
  title?: string;
  description?: string;
}

export default function Card({ icon, title, description }: CardProps) {
  return (
    <div className="bg-green w-5/6 text-white rounded-md flex flex-col justify-center items-center   gap-4  aspect-square">
      <div>{icon}</div>
      <h2 className="font-semibold text-2xl">{title}</h2>
      <p className="text-sm text-center w-5/6">{description}</p>
    </div>
  );
}
