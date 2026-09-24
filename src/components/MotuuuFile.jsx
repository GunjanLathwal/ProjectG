import { motion } from "framer-motion";
import { BadgeCheck, Brain, Flame, Heart, Rabbit } from "lucide-react";

const Stat = ({ label, value, icon: Icon }) => (
  <div className="rounded-2xl border border-ink/10 bg-paper/65 p-4">
    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brown">
      <Icon size={15} /> {label}
    </div>
    <div className="mt-2 font-display text-2xl">{value}</div>
  </div>
);

export default function MotuuuFile({ data }) {
  return (
    <section className="chapter px-5 py-24">
      <div className="section-shell">
        <div className="mb-10">
          <p className="eyebrow">chapter 02 · classified</p>
          <h2 className="section-title">THE MOTUUU FILE</h2>
          <p className="section-kicker">An extremely serious investigation.</p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="profile-card"
        >
          <div className="grid gap-8 md:grid-cols-[280px_1fr]">
            <div className="relative">
              <div className="rotate-[-2deg] bg-white p-3 shadow-paper">
                <div className="aspect-[4/5] overflow-hidden bg-blue/20">
                  <img src={data.photos.profile} alt={`${data.name} portrait`} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <p className="pt-2 font-hand text-xl">EXHIBIT A</p>
              </div>
              <span className="stamp left-[-10px] top-4 rotate-[-9deg]">VERIFIED<br />CUTIE</span>
            </div>

            <div>
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-ink/10 pb-5">
                <div>
                  <p className="font-hand text-xl text-brown">case no. BDAY-001</p>
                  <h3 className="font-display text-5xl">{data.name}</h3>
                  <p className="mt-1 text-sm text-ink/60">{data.nicknames.join(" · ")}</p>
                </div>
                <div className="rounded-full border border-ink/10 px-3 py-1 text-xs font-bold uppercase tracking-widest">
                  Birthday Boy
                </div>
              </div>

              <div className="grid gap-3 py-6 sm:grid-cols-2">
                <div><span className="label">Species</span><p>Rare Khargosh 🐰</p></div>
                <div><span className="label">Known for</span><p>Being ridiculously caring</p></div>
                <div><span className="label">Special ability</span><p>Overthinking absolutely everything</p></div>
                <div><span className="label">Second ability</span><p>Procrastinating professionally</p></div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <Stat label="Heart" value="100 / 100" icon={Heart} />
                <Stat label="Work mode" value="🔥🔥🔥" icon={Flame} />
                <Stat label="Brain at 2AM" value="??????" icon={Brain} />
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="tag"><BadgeCheck size={14} /> approved by birthday department</span>
                <span className="tag"><Rabbit size={14} /> khargosh detected</span>
                <span className="tag">professional overthinker</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}