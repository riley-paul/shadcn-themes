import { ThemeProvider } from "next-themes";
import React from "react";
import Appheader from "./components/app-header";
import { ThemeSync } from "./components/theme-sync";
import { Toaster } from "./components/ui/sonner";
import ThemeGeneratorForm from "./components/theme-generator-form/theme-generator-form";
import { TooltipProvider } from "./components/ui/tooltip";
import { RootComponents } from "./components/examples/root-components";

const App: React.FC = () => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider>
        <Appheader />
        <div className="container pt-12 pb-32">
          <div className="mt-4 mb-8 flex flex-col items-center md:mt-12 md:mb-16">
            <div className="mx-auto text-left sm:text-center">
              <h1 className="mx-auto mb-4 max-w-2xl text-3xl font-bold md:text-4xl lg:text-5xl">
                Create Custom Themes for Shadcn/UI Components
              </h1>
              <p className="text-muted-foreground mx-auto mt-2 max-w-xl">
                Create beautiful, customized themes for your shadcn/ui
                components instantly. Select your brand colors and get
                ready-to-use CSS variables for a consistent, professional design
                system that matches your brand identity.
              </p>
            </div>
          </div>

          <RootComponents />

          <div className="fixed bottom-12 container">
            <ThemeGeneratorForm />
          </div>
        </div>
        <ThemeSync />
        <Toaster />
      </TooltipProvider>
    </ThemeProvider>
  );
};

export default App;
