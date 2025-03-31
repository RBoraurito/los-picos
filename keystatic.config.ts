import { config } from "@keystatic/core";
import { layout } from "./src/cms/singleton/layout/index";

export default config({
  storage: {
    kind: "local",
  },
  singletons: {
    layout,
  },
});
