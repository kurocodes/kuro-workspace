import { useState } from "react";
import { wallpaper } from "../assets/assets";
import Desktop from "../components/layout/Desktop";
import Footer from "../components/layout/footer/Footer";
import Navbar from "../components/layout/Navbar";
import type { PageProps } from "../utils/types";

export default function App() {

  const [isInteractive, setIsInteractive] = useState(true);

  const toggleInteractive = () => setIsInteractive((v) => !v);

  const sharedPageProps: PageProps = {
    backgroundImage: 
  }

  return (
    <div className="w-screen h-screen overflow-hidden bg-surface font-ui p-2">
      <div className="w-full h-full flex flex-col items-center gap-2">
        <Navbar toggleInteractive={() => setIsInteractive((v) => !v)} />
        <div className="w-full flex-1 flex flex-col items-center window-frame border-outline">
          <Desktop backgroundImage={wallpaper} isInteractive={isInteractive}
          toggleInteractive={() => setIsInteractive((v) => !v)} />
          <Footer />
        </div>
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