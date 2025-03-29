import React from "react";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

const button = cva("px-5 py-2 rounded-sm transition-all", {
  variants: {
    variant: {
      primary: "bg-gruvbox-blue-dark text-gruvbox-fg0 hover:bg-gruvbox-blue-light",
      secondary: "bg-gruvbox-gray-dark text-gruvbox-fg0 hover:bg-gruvbox-gray-light",
      danger: "bg-gruvbox-red-dark text-gruvbox-fg0 hover:bg-gruvbox-red-light",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button>;

export const Button: React.FC<ButtonProps> = ({
  variant,
  className,
  children,
  ...props
}) => {
  return (
    <button className={button({ variant, className })} {...props}>
      {children}
    </button>
  );
};
