// src/utils/pair.ts
import type { IconComponent, IconText } from "../types";

export function pair(
  icons: IconComponent[],
  texts: string[],
  label?: string
): IconText[] {
  if (icons.length !== texts.length) {
    throw new Error(
      `[pair]${label ? ` ${label}` : ""}: icons(${icons.length}) !== texts(${texts.length})`
    );
  }
  return icons.map((icon, i) => ({ icon, text: texts[i] }));
}
