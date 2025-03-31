type BaseButtonProps = {
  variant?: "primary" | "secondary" | "outline" | "neutral";
  as?: "button" | "a";
};

export type ButtonProps = BaseButtonProps & (React.ButtonHTMLAttributes<HTMLButtonElement> | React.AnchorHTMLAttributes<HTMLAnchorElement>);
