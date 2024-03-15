import React, { MouseEvent, ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "dark";
  className?: string;
  disabled?: boolean;
  onClick?: (event: MouseEvent) => void;
  children?: ReactNode;
}

export default function Button({
  children,
  variant,
  className,
  disabled,
  onClick,
}: ButtonProps) {
  const ACTIVE_STYLE = {
    primary: "text-white bg-green ",
    secondary: "text-green bg-white border border-green",
    dark: "text-green bg-black",
  };

  const DISABLE_STYLE = {
    primary: "",
    secondary: "",
    dark: "",
  };

  const buttonStyle = disabled
    ? DISABLE_STYLE[variant || "primary"]
    : ACTIVE_STYLE[variant || "primary"];

  return (
    <button
      className={`font-bold content-center rounded-md p-2 w-full ${className} ${buttonStyle}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
