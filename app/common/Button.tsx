import React, { MouseEvent, ReactNode } from 'react'


interface ButtonProps  {
  variant?: 'primary' | 'secondary' | 'dark';
  className?: string;
  disabled?: boolean;
  onClick?: (event: MouseEvent) => void;
  children?: ReactNode;
};


export default function Button({children, variant, className, disabled, onClick}: ButtonProps) {
  const ACTIVE_STYLE = {
    primary: 'text-white bg-green content-center',
    secondary: 'text-green bg-white content-center border border-green',
    dark: 'text-green bg-black content center'
  }

  const DISABLE_STYLE = {
    primary: "",
    secondary: "",
    dark: ""
  }

  const buttonStyle = disabled ? DISABLE_STYLE[variant || 'primary'] : ACTIVE_STYLE[variant || 'primary'];

  return <button  
  className={`font-bold rounded-md p-2 ${className} ${buttonStyle}`}
  disabled={disabled}
  onClick={onClick}>
  {children}  
</button>
}
