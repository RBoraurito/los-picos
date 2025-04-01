import React from "react";
import type { ButtonProps } from "./types";

const variantClasses = {
  primary: "bg-primary-500 text-white hover:bg-primary-600",
  secondary: "bg-secondary-500 text-white hover:bg-secondary-600",
  outline: "border border-neutral-500 text-da-700 hover:bg-neutral-100",
  neutral: "bg-white text-dark-700 hover:bg-neutral-100",
};

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(({ variant = "primary", as = "button", className, ...props }, ref) => {
  const Component = as;
  const classes = `px-4 py-2 rounded-xl transition-colors ${variantClasses[variant]} ${className}`;

  return as === "button" ? (
    <button {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)} className={classes} ref={ref as React.Ref<HTMLButtonElement>} />
  ) : (
    <a {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)} className={classes} ref={ref as React.Ref<HTMLAnchorElement>} />
  );
});

Button.displayName = "Button";
