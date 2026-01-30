import { BsGithub, BsTwitterX } from "react-icons/bs";

import { ThemeToggler } from "./theme-toggler";
import { Button } from "./ui/button";

export default function Appheader() {
  return (
    <div className="bg-background/80 fixed inset-x-0 top-0 z-50 border-b backdrop-blur-sm">
      <div className="container flex items-center justify-between py-2">
        <a href="/" className="font-bold">
          Shadcn UI Themes
        </a>

        <div className="-mr-2 flex items-center gap-0.5">
          <Button asChild variant="ghost" size="icon">
            <a
              href="https://github.com/mfrkankaya/shadcn-themes"
              target="_blank"
            >
              <BsGithub size={16} />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <a href="https://twitter.com/mfrkankaya" target="_blank">
              <BsTwitterX size={16} />
            </a>
          </Button>
          <ThemeToggler />
        </div>
      </div>
    </div>
  );
}
