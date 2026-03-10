import Desktop from "../components/layout/Desktop";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

export default function App() {
  return (
    <div className="w-screen h-screen overflow-hidden bg-surface font-ui p-2">
      <div className="w-full h-full flex flex-col items-center gap-2">
        <Navbar />
        <div className="w-full flex-1 flex flex-col items-center window-frame border-outline">
          <Desktop />
          <Footer />
        </div>
      </div>
    </div>
  );
}
