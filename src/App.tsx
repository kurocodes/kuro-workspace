import { useState } from "react";
import { wallpaper } from "./assets/assets";
import Footer from "./components/layout/footer/Footer";
import Navbar from "./components/layout/Navbar";
import type { PageProps } from "./utils/types";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Playground from "./pages/Playground";
import Blog from "./pages/Blog";
import WindowRouteReset from "./features/window-system/WindowRouteReset";
import { useLoadingStore } from "./features/loading/loadingStore";
import { AnimatePresence } from "motion/react";
import Loader from "./features/loading/Loader";
import { motion } from "motion/react";

export default function App() {
  const [isInteractive, setIsInteractive] = useState(true);
  const { isLoading } = useLoadingStore();

  const toggleInteractive = () => setIsInteractive((v) => !v);

  const sharedPageProps: PageProps = {
    backgroundImage: wallpaper,
    isInteractive,
    toggleInteractive,
  };

  return (
    <div className="w-screen h-dvh overflow-hidden bg-surface font-ui">
      <div className="w-full h-full p-2">
        <AnimatePresence>{isLoading && <Loader />}</AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full flex flex-col items-center gap-2"
        >
          <Navbar toggleInteractive={() => setIsInteractive((v) => !v)} />
          <div className="w-full flex-1 flex flex-col items-center window-frame border-outline">
            <WindowRouteReset />

            <Routes>
              <Route path="/" element={<Home {...sharedPageProps} />} />
              <Route path="/work" element={<Work {...sharedPageProps} />} />
              <Route
                path="/playground"
                element={<Playground {...sharedPageProps} />}
              />
              <Route path="/blog" element={<Blog {...sharedPageProps} />} />
            </Routes>

            <Footer />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Optimize the animations and canvas effect
// Find out if we can use webgpu or something like that for the canvas effect
// Optimize the images and image loading for both wallpaper and display
// Complete the about and contact window
// add a resume window
// implement routes for the pages and start working on work page
