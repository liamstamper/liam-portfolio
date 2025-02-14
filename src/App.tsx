import React from "react";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Hero from "@/components/Hero";
import WorkEducation from "@/components/Work";
import SocialLinks from "@/components/SocialLinks";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs";
import Education from "./components/Education";
import Projects from "./components/Projects";

const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-backgroundLight dark:bg-backgroundDark pb-20">
        <Hero />
        <SocialLinks />
        <Tabs defaultValue="experience" className="w-full container mt-10">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="experience">Experience & Eduction</TabsTrigger>
            <TabsTrigger value="education">Projects</TabsTrigger>
          </TabsList>
          <TabsContent value="experience">
            <WorkEducation />
            <Education />
          </TabsContent>
          <TabsContent value="education">
            <Projects />
          </TabsContent>
        </Tabs>
      </div>
    </ThemeProvider>
  );
};

export default App;
