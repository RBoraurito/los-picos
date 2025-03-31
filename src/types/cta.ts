import type { ButtonProps } from "../components/button";

export interface CTA {
  text: string;
  url: string;
  variant: ButtonProps["variant"];
  external?: boolean;
}
