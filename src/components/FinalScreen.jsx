import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";

export default function FinalScreen({ data, onRestart }) {
  return (
    <section className="chapter final-paper relative flex min-h-[85svh] items-center justify-center overflow-hidden px-5 py-24 text-center">
      <div className="absolute left-[12%] top-[18%] font-hand text-4xl text-red/50">✦</div>
      <div className="absolute right-[12%] bottom-[20%] font-hand text-4xl text-brown/40">♡</div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl"
      >
        <p className="font-hand text-2xl text-red">to my perfectly imperfect person...</p>
        <h2 className="mt-3 font-display text-5xl font-semibold leading-[0.9] sm:text-7xl">
          HAPPY BIRTHDAY,<br /><span className="text-red">MOTUUU</span> 🐰
        </h2>
        <p className="mx-auto mt-8 max-w-2xl font-display text-2xl leading-relaxed text-ink/80">
          {data.finalMessage}
        </p>
        <p className="mt-7 font-hand text-3xl text-brown">{data.finalNote}</p>
        <p className="mt-10 text-xs uppercase tracking-[0.25em] text-ink/40">THE MOTUUU STORY CONTINUES...</p>

        <button onClick={onRestart} className="btn-secondary mt-8">
          START AGAIN <RotateCcw size={15} />
        </button>
      </motion.div>
    </section>
  );
}