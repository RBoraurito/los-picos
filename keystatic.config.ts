import { config } from "@keystatic/core";
import { layout } from "./src/cms/singleton/layout";

export default config({
  storage: {
    kind: "local",
  },
  singletons: {
    layout,
  },
});
