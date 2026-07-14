import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Home } from "@/pages/Home";
import { ProjectDetail } from "@/pages/ProjectDetail";
import { NotFound } from "@/pages/NotFound";
import { CustomCursor } from "@/components/system/CustomCursor";
import { WelcomeIntro } from "@/components/system/WelcomeIntro";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <WelcomeIntro />
      <ScrollToTop />
      <CustomCursor />
      <Navigation />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
