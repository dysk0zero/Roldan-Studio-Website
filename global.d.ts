import type { JSX } from "astro/types";

declare module "*.svg?component" {
  const Component: (props: JSX.SVGAttributes) => JSX.Element;
  export default Component;
}
