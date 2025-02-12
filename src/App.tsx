import React from "react";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Hero from "@/components/Hero";
import WorkEducation from "@/components/Work";
import SocialLinks from "@/components/SocialLinks";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs";
import Education from "./components/Education";

const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-backgroundLight dark:bg-backgroundDark">
        <Hero />
        <SocialLinks />
        <Tabs defaultValue="experience" className="w-full container mt-10">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Projects & Education</TabsTrigger>
          </TabsList>
          <TabsContent value="experience">
            <WorkEducation />
          </TabsContent>
          <TabsContent value="education">
            <Education />
          </TabsContent>
        </Tabs>
      </div>
    </ThemeProvider>
  );
};

export default App;
