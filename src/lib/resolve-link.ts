import type { Link } from "~/types/sanity";

export function resolveLink(link: Link) {
  if (!link) return null;

  switch (link.type) {
    case "external":
      return {
        href: link.url || "#",
        target: "_blank",
        rel: "noopener noreferrer",
      };
    case "download":
      return {
        href: link.url,
        download: true,
      };
    default:
      const { pathname } = new URL(link?.url ?? "");
      return {
        href: pathname,
        target: "_self",
      };
  }
}
