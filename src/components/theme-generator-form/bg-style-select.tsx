import { SelectTrigger } from "@radix-ui/react-select";
import { IconBackground } from "@tabler/icons-react";
import { useTheme } from "next-themes";

import { useColorStore } from "@/store/color-store";
import { useMounted } from "@/hooks/use-mounted";
import { Select, SelectContent, SelectItem } from "@/components/ui/select";

export default function BgStyleSelect() {
  const { resolvedTheme } = useTheme();
  const mounted = useMounted();
  const backgroundLight = useColorStore((state) => state.light.backgroundStyle);
  const backgroundDark = useColorStore((state) => state.dark.backgroundStyle);
  const setFieldStore = useColorStore((state) => state.setField);
  const value = !mounted
    ? "grayish"
    : resolvedTheme === "light"
      ? backgroundLight
      : backgroundDark;

  function onValueChange(newValue: string) {
    setFieldStore(
      resolvedTheme === "light"
        ? "light.backgroundStyle"
        : "dark.backgroundStyle",
      newValue,
    );
  }
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="flex h-9 cursor-pointer items-center gap-2 text-sm md:h-12">
        <IconBackground />
      </SelectTrigger>
      <SelectContent>
        {!mounted ? null : resolvedTheme === "light" ? (
          <SelectItem value="white">White</SelectItem>
        ) : (
          <>
            <SelectItem value="black">Black</SelectItem>
            <SelectItem value="gray">Gray</SelectItem>
          </>
        )}
        <SelectItem value="grayish">Grayish</SelectItem>
        <SelectItem value="slightly-saturated">Slightly Saturated</SelectItem>
      </SelectContent>
    </Select>
  );
}
