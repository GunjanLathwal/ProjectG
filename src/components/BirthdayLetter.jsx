import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MailOpen } from "lucide-react";

export default function BirthdayLetter({ data, onOpen }) {
  const [opened, setOpened] = useState(false);

  const open = () => {
    setOpened(true);
    onOpen?.();
  };

  return (
    <section className="chapter px-5 py-24">
      <div className="section-shell text-center">
        <p className="eyebrow">chapter 06 · enough teasing</p>
        <h2 className="section-title">ONE LAST THING...</h2>
        <p className="section-kicker">There's a letter for you.</p>

        <div className="mx-auto mt-12 max-w-2xl">
          <AnimatePresence mode="wait">
            {!opened ? (
              <motion.div key="envelope" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96 }}>
                <div className="envelope mx-auto">
                  <div className="envelope-flap" />
                  <div className="envelope-letter">
                    <span className="font-hand text-3xl">For Motuuu 🐰</span>
                  </div>
                </div>
                <button onClick={open} className="btn-primary mt-10">
                  OPEN MY LETTER <MailOpen size={17} />
                </button>
              </motion.div>
            ) : (
              <motion.article
                key="letter"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="letter-paper text-left"
              >
                <div className="mb-8 flex items-center justify-between border-b border-ink/10 pb-5">
                  <span className="font-hand text-3xl text-red">dear Motuuu,</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-ink/40">private & personal</span>
                </div>
                <div className="whitespace-pre-line font-display text-[1.35rem] leading-[1.65] text-ink/90">
                  {data.letter}
                </div>
                <p className="mt-10 font-hand text-2xl text-brown">— from your favourite person (probably)</p>
              </motion.article>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}