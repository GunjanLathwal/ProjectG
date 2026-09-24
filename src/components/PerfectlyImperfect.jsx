import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const cards = ["sweet", "caring", "hardworking", "overthinking", "procrastination", "khargosh"];

export default function PerfectlyImperfect({ data }) {
  const [open, setOpen] = useState(null);

  return (
    <section className="chapter bg-blue/10 px-5 py-24">
      <div className="section-shell">
        <p className="eyebrow">chapter 03 · the evidence</p>
        <h2 className="section-title max-w-xl">PERFECTLY<br />IMPERFECT.</h2>
        <p className="section-kicker max-w-md">Because honestly, being perfect would be boring.</p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((key, i) => {
            const item = data.personality[key];
            const isOpen = open === key;
            return (
              <motion.button
                key={key}
                layout
                onClick={() => setOpen(isOpen ? null : key)}
                className={`personality-card text-left ${i % 3 === 1 ? "rotate-[1deg]" : "rotate-[-1deg]"} ${isOpen ? "ring-2 ring-red/30" : ""}`}
                whileTap={{ scale: 0.985 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-3xl leading-none">{item.title}</h3>
                  <ArrowUpRight size={18} className="shrink-0 opacity-50" />
                </div>
                <p className="mt-5 text-[15px] leading-7 text-ink/75">{item.text}</p>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-5 border-t border-ink/10 pt-4 font-hand text-xl text-red">
                        {item.reveal}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <p className="mt-6 font-hand text-base text-brown/70">{isOpen ? "okay, exposed." : "tap to investigate →"}</p>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}


