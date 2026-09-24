import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export default function MemoryWall({ data }) {
  const [selected, setSelected] = useState(null);

  return (
    <section className="chapter bg-blush/10 px-5 py-24">
      <div className="section-shell">
        <p className="eyebrow">chapter 05 · archive</p>
        <h2 className="section-title max-w-2xl">A FEW PIECES OF<br />MY FAVOURITE HUMAN</h2>
        <p className="section-kicker">Not an ordinary gallery. More like a tiny box of moments.</p>

        <div className="memory-grid mt-12">
          {data.memories.map((memory, i) => (
            <motion.button
              key={memory.image + i}
              onClick={() => setSelected(memory)}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              whileHover={{ y: -5, rotate: i % 2 ? 1 : -1 }}
              className={`polaroid text-left ${i % 3 === 0 ? "md:translate-y-5" : ""}`}
            >
              <div className="aspect-[4/5] overflow-hidden bg-blue/20">
                <img src={memory.image} alt={memory.caption} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <p className="pt-3 font-hand text-xl leading-tight">{memory.caption}</p>
              <p className="pt-1 text-[11px] uppercase tracking-widest text-ink/45">{memory.date}</p>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/65 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              role="dialog" aria-modal="true" aria-label="Memory preview"
              className="relative w-full max-w-lg bg-paper p-4 shadow-paper"
              initial={{ y: 25, scale: 0.96 }} animate={{ y: 0, scale: 1 }} exit={{ y: 25, scale: 0.96 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelected(null)} className="absolute right-3 top-3 z-10 rounded-full bg-paper/90 p-2 focus:outline-none focus:ring-2 focus:ring-red" aria-label="Close memory">
                <X size={18} />
              </button>
              <div className="aspect-[4/5] overflow-hidden bg-blue/20">
                <img src={selected.image} alt={selected.caption} className="h-full w-full object-cover" />
              </div>
              <p className="pt-4 font-hand text-3xl">{selected.caption}</p>
              <p className="pt-1 text-xs uppercase tracking-widest text-ink/45">{selected.date}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}