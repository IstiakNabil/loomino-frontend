import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

import AnnouncementBar from "./AnnouncementBar";
import Navbar from "./Navbar";
import Footer from "./Footer/Footer";
import WelcomeModal from "@/features/welcome/WelcomeModal";
import { useScrollToHash } from "@/app/hooks/useScrollToHash";

function RootLayout() {
  useScrollToHash();

  return (
    <div className="min-h-screen">
      <WelcomeModal />

      {/* Scaled separately so it still renders above the
          (unscaled) Navbar in the stacking order. */}
      <div className="mobile-scale-130">
        <AnnouncementBar />
      </div>

      <Navbar />

      {/* Everything below the navbar scales up 30% on mobile —
          see .mobile-scale-130 in index.css. */}
      <div className="mobile-scale-130">
        <main>
          <Outlet />
        </main>

        <Footer />
      </div>

      <Toaster position="top-right" richColors closeButton />
    </div>
  );
}

export default RootLayout;
