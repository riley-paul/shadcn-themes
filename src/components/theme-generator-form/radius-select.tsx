import { Select as SelectPrimitive } from "radix-ui";
import { IconBorderRadius } from "@tabler/icons-react";
import { useTheme } from "next-themes";

import { useColorStore } from "@/store/color-store";
import { useIsMounted } from "usehooks-ts";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
} from "@/components/ui/select";

export default function RadiusSelect() {
  const { resolvedTheme } = useTheme();
  const mounted = useIsMounted();
  const radiusLight = useColorStore((state) => state.light.radius);
  const radiusDark = useColorStore((state) => state.dark.radius);
  const setFieldStore = useColorStore((state) => state.setField);
  const value = !mounted()
    ? "0.635rem"
    : resolvedTheme === "light"
      ? radiusLight
      : radiusDark;

  function onValueChange(newValue: string) {
    setFieldStore(
      resolvedTheme === "light" ? "light.radius" : "dark.radius",
      newValue,
    );
  }

  return (
    <Select
      value={value ?? "0.625rem"}
      onValueChange={onValueChange}
    >
      <SelectPrimitive.Trigger className="flex h-9 cursor-pointer items-center gap-2 text-sm md:h-12">
        <IconBorderRadius />
      </SelectPrimitive.Trigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Radius</SelectLabel>
          <SelectItem value="0">0</SelectItem>
          <SelectItem value="0.25rem">0.25rem</SelectItem>
          <SelectItem value="0.5rem">0.5rem</SelectItem>
          <SelectItem value="0.625rem">0.625rem</SelectItem>
          <SelectItem value="0.75rem">0.75rem</SelectItem>
          <SelectItem value="1rem">1rem</SelectItem>
          <SelectItem value="1.5rem">1.5rem</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
