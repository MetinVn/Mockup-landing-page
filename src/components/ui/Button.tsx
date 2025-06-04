import React from "react";

export type ButtonVariant = "primary" | "secondary" | "tertiary";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  padding?: string;
  children: React.ReactNode;
}

const baseStyles =
  "cursor-pointer h-auto text-sm lg:text-lg font-semibold rounded-xl transition-all duration-500 max-h-fit";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-green)] hover:bg-[var(--color-white)] hover:text-[var(--color-green)] text-[var(--color-black)]",
  secondary:
    "border border-[var(--color-green)] bg-[var(--color-gray)] hover:bg-[var(--color-green)] hover:text-[var(--color-dark)] text-[var(--color-white)]",
  tertiary:
    "border border-[var(--color-gray)] bg-[var(--color-green)] hover:bg-[var(--color-dark)] hover:text-[var(--color-green)] text-[var(--color-gray)]",
};

export const Button: React.FC<ButtonProps> = ({ variant = "primary", padding, children, className = "", ...props }) => {
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${padding ? padding : "py-2 px-10"} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
