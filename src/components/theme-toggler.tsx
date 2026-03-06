"use client";

import React from "react";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";

import { useIsMounted } from "usehooks-ts";

import { Button } from "./ui/button";

export function ThemeToggler() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useIsMounted();

  function toggleTheme() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  return (
    <Button size="icon" variant="ghost" onClick={toggleTheme}>
      {!mounted() ? null : resolvedTheme === "dark" ? (
        <IconMoon />
      ) : (
        <IconSun />
      )}
    </Button>
  );
}
