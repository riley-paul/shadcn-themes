"use client";

import React from "react";
import { useTheme } from "next-themes";

import { generateTheme } from "@/lib/theme-generator";
import { useColorStore } from "@/lib/color-store";
import { useIsMounted } from "usehooks-ts";

export function ThemeSync() {
  const { resolvedTheme } = useTheme();
  const lightOptions = useColorStore((state) => state.light);
  const darkOptions = useColorStore((state) => state.dark);
  const isMounted = useIsMounted();

  React.useEffect(() => {
    if (!isMounted()) return;
    const root = document.querySelector(":root") as HTMLElement;
    if (!root) return;

    const { light, dark } = generateTheme({ lightOptions, darkOptions });
    const theme = resolvedTheme === "dark" ? dark : light;

    for (const [key, value] of Object.entries(theme)) {
      root.style.setProperty(key, value);
    }
  }, [isMounted, resolvedTheme, lightOptions, darkOptions]);

  return null;
}
