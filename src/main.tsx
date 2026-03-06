import { ThemeProvider } from "next-themes";
import React from "react";
import Appheader from "./components/app-header";
import { ThemeSync } from "./components/theme-sync";
import { Toaster } from "./components/ui/sonner";
import { CardsCreateAccount } from "./components/examples/create-account";
import { CardsActivityGoal } from "./components/examples/activity-goal";
import { CardsTeamMembers } from "./components/examples/team-members";
import { CardsChat } from "./components/examples/chat-demo";
import ThemeGeneratorForm from "./components/theme-generator-form/theme-generator-form";
import { TooltipProvider } from "./components/ui/tooltip";

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
        <div className="relative container pt-16 pb-32">
          <div className="relative mt-4 mb-8 flex flex-col items-center md:mt-12 md:mb-16">
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

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <CardsCreateAccount />
            <CardsActivityGoal />
            <CardsTeamMembers />
            <CardsChat />
          </div>
          <div className="sticky bottom-12 mt-12">
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
