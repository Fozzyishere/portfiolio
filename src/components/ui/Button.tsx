import React from "react";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

const button = cva("px-4 py-2 rounded-md transition-all", {
  variants: {
    variant: {
      primary: "bg-blue-600 text-white hover:bg-blue-700",
      secondary: "bg-gray-200 text-black hover:bg-gray-300",
      danger: "bg-red-600 text-white hover:bg-red-700",
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
