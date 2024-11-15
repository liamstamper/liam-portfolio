import React from "react";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Hero from "@/components/Hero";
import WorkEducation from "@/components/WorkEducation";
import SocialLinks from "@/components/SocialLinks";

const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-backgroundLight dark:bg-backgroundDark">
        <Hero />
        <SocialLinks />
        <WorkEducation />
      </div>
    </ThemeProvider>
  );
};

export default App;
