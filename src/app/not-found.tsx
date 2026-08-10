import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#090d16] bg-grid-pattern px-4">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-sky-600/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="text-center space-y-8 relative z-10">
        <div className="text-[8rem] sm:text-[12rem] font-extrabold text-slate-800 leading-none font-mono select-none">404</div>
        <div className="-mt-8 space-y-4">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Page Not Found</h1>
          <p className="text-slate-400 max-w-md mx-auto text-sm sm:text-base">
            The page you are looking for does not exist or has been moved. Please check the URL or navigate back to the TAKNISER ONE GLOBE platform.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-xl bg-gradient-to-r from-sky-600 to-sky-500 text-white hover:scale-105 transition-all shadow-lg shadow-sky-600/20 group"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl glass-panel glass-panel-hover text-slate-200 border border-white/10"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Contact TAKNISER</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
