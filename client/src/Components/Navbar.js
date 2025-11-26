import React from "react";

const Navbar = ({ view, setView, setPageAnimation }) => {
return (
<nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0d1525]/80 backdrop-blur-xl shadow-[0_0_30px_rgba(0,255,255,0.08)] transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,255,255,0.15)]">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center max-w-6xl">
    <div className="flex items-center gap-3 cursor-pointer group"
        onClick={() => setView("form")}>
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-xl font-bold text-white shadow-[0_0_15px_rgba(0,255,255,0.5)] group-hover:scale-110 transition-transform animate-softBounce">
        B
        </div>

        <div>
        <h1 className="text-lg font-bold tracking-tight">
            Feedback <span className="text-cyan-400">System</span>
        </h1>
        <p className="text-[10px] text-slate-400 uppercase tracking-widest">
            Internal RnD Division
        </p>
        </div>
    </div>

    <div className="flex bg-white/5 p-1 rounded-xl border border-white/10 backdrop-blur-md shadow-inner">
        {["form", "admin"].map((tab) => (
        <button
            key={tab}
            onClick={() => {
            setPageAnimation(tab === "admin" ? "smoothDrop" : "softFade");
            setView(tab);
            }}
            className={`px-6 py-2 rounded-lg text-sm font-bold capitalize transition-all duration-300
            ${
                view === tab ? "bg-cyan-500/20 text-cyan-400 border border-cyan-400/30 shadow-[0_0_12px_rgba(0,255,255,0.25)]" : "text-slate-400 hover:bg-white/10 hover:text-white"
            }`}>
            {tab === "form" ? "Formulir" : "Admin Panel"}
        </button>
        ))}
    </div>
    </div>
</nav>
);
};

export default Navbar;