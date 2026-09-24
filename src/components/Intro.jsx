import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Intro({ data, onEnter }) {
  return (
    <section className="chapter intro-paper relative flex min-h-[100svh] items-center justify-center overflow-hidden px-5 py-16">
      <div className="doodle doodle-one">✦</div>
      <div className="doodle doodle-two">♡</div>
      <div className="doodle doodle-three">⌁</div>

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl text-center"
      >
        <p className="mb-3 font-hand text-2xl text-brown">someone has been working on something for you...</p>
        <h1 className="font-display text-4xl font-semibold leading-[0.82] tracking-tight sm:text-8xl">
          <span className="text-red">Hiii Cutiee </span> 
        </h1>

        <div className="mx-auto mt-10 max-w-sm rotate-[-2deg] bg-white p-3 shadow-paper">
          <div className="aspect-[4/5] overflow-hidden bg-blue/30">
            <img src={data.photos.hero} alt={`${data.name} — birthday hero`} className="h-full w-full object-cover" loading="eager" />
          </div>
          <p className="pb-1 pt-3 font-hand text-2xl">birthday boy spotted.</p>
        </div>

        <p className="mx-auto mt-8 max-w-md font-display text-2xl leading-tight sm:text-3xl">
          Your birthday deserves a little more than just <span className="italic">“Happy Birthday”</span> :)
        </p>

        <button onClick={onEnter} className="btn-primary mt-7">
          ENTER <ArrowRight size={17} />
        </button>
      </motion.div>
    </section>
  );
}