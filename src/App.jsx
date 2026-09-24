import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Rabbit, Brain, Coffee, Heart } from "lucide-react";
import { birthdayData as data } from "./data/birthdayData";
import Intro from "./components/Intro";
import MotuuuFile from "./components/MotuuuFile";
import PerfectlyImperfect from "./components/PerfectlyImperfect";
import MotuuuThings from "./components/MotuuuThings";
import MemoryWall from "./components/MemoryWall";
import BirthdayLetter from "./components/BirthdayLetter";
import FinalScreen from "./components/FinalScreen";
import MusicToggle from "./components/MusicToggle";

export default function App() {
  const [started, setStarted] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setToast("");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const easterEgg = (message) => {
    setToast(message);
    window.clearTimeout(window.__motuuuToast);
    window.__motuuuToast = window.setTimeout(() => setToast(""), 2200);
  };

  const restart = () => {
    setStarted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-paper text-ink">
      <MusicToggle />

      {!started ? (
        <Intro data={data} onEnter={() => setStarted(true)} />
      ) : (
        <AnimatePresence mode="wait">
          <motion.div key="book" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.55 }}>
            <nav className="sticky top-0 z-40 border-b border-ink/10 bg-paper/85 px-4 py-3 backdrop-blur">
              <div className="mx-auto flex max-w-5xl items-center justify-between">
                <button onClick={restart} className="font-hand text-xl text-red" aria-label="Back to beginning">Oyeeee Motuuu 🐰</button>
                <div className="flex gap-2">
                  <button onClick={() => easterEgg("KHARGOSH DETECTED 🐰")} className="icon-button" aria-label="Rabbit easter egg"><Rabbit size={16} /></button>
                  <button onClick={() => easterEgg("Please stop overthinking. 🧠")} className="icon-button" aria-label="Brain easter egg"><Brain size={16} /></button>
                  <button onClick={() => easterEgg("Of course you found this. ☕")} className="icon-button" aria-label="Coffee easter egg"><Coffee size={16} /></button>
                </div>
              </div>
            </nav>

            <div onDoubleClick={() => easterEgg("Yes, this was made specifically for you. 🤍")}>
              <MotuuuFile data={data} />
              <PerfectlyImperfect data={data} />
              <MotuuuThings data={data} />
              <MemoryWall data={data} />
              <BirthdayLetter data={data} onOpen={() => window.setTimeout(() => document.getElementById("final")?.scrollIntoView({ behavior: "smooth" }), 500)} />
              <div id="final"><FinalScreen data={data} onRestart={restart} /></div>
            </div>

            <footer className="border-t border-ink/10 px-5 py-10 text-center font-hand text-xl text-brown">
              made with an unreasonable amount of love, research & khargosh evidence.
            </footer>
          </motion.div>
        </AnimatePresence>
      )}

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15 }}
            className="fixed bottom-5 left-1/2 z-[100] -translate-x-1/2 rounded-full bg-ink px-5 py-3 text-sm text-paper shadow-soft"
            role="status"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}