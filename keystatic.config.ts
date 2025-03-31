import { config } from "@keystatic/core";
import { home, layout } from "~/cms/singleton";

export default config({
  storage: {
    kind: "local",
  },
  singletons: {
    layout,
    home,
  },
});
