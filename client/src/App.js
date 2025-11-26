import React, { useState } from "react";
import NeonBackground from "./Components/NeonBG";
import Navbar from "./Components/Navbar";
import FeedbackForm from "./Components/FeedbackForm";
import AdminPanel from "./Components/AdminPanel";

function App() {
  const [view, setView] = useState("form");
  const [pageAnimation, setPageAnimation] = useState("softFade");

  return (
    <div className="min-h-screen bg-[#0d1525] text-gray-200 font-sans relative overflow-hidden">
      <NeonBackground />
      <Navbar view={view} setView={setView} setPageAnimation={setPageAnimation} />
      
      <div className={`container mx-auto max-w-6xl p-6 md:p-10 relative z-10 animate-${pageAnimation}`}>
        {view === "form" ? <FeedbackForm /> : <AdminPanel />}
      </div>

      <footer className="text-center text-slate-500 text-sm py-10 border-t border-white/10">
        © 2025 BNCC Research & Development
        <span className="text-cyan-500/50"> | </span>
        Jessen & Annisa
      </footer>
    </div>
  );
}

export default App;