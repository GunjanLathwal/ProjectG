import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Heart,
  Sparkles,
  Quote,
  Rabbit,
  Star,
  Eye,
  Coffee,
} from "lucide-react";

const icons = [
  Sparkles,
  Eye,
  Heart,
  Quote,
  Rabbit,
  Star,
  Coffee,
  ArrowUpRight,
];

const rotations = [
  "-1.2deg",
  "1.4deg",
  "-0.8deg",
  "1.1deg",
  "-1.5deg",
  "0.8deg",
  "-1deg",
  "1.3deg",
];

const paperTypes = [
  "cream",
  "blue",
  "cream",
  "warm",
  "cream",
  "blue",
  "warm",
  "cream",
];

export default function MotuuuThings({ data }) {
  const [openCard, setOpenCard] = useState(null);

  const observations =
    data.observations ||
    data.things ||
    data.motuuuThings ||
    [];

  return (
    <section className="motuuu-things-section">
      <div className="things-shell">

        {/* HEADER */}
        <div className="things-heading">

          <div className="things-heading-main">
            <p className="things-eyebrow">
              chapter 04 · tiny observations
            </p>

            <h2>
              THINGS THAT ARE
              <br />
              <span>SO VERY MOTUUU.</span>
            </h2>

            <p className="things-subtitle">
              The little things I notice because apparently
              someone has to document this khargosh properly.
            </p>
          </div>

          <div className="things-side-note">
            <span>FIELD NOTES</span>

            <strong>
              08
            </strong>

            <small>
              extremely specific
              <br />
              observations
            </small>
          </div>

        </div>


        {/* SCRAPBOOK AREA */}
        <div className="things-board">

          {observations.map((item, index) => {
            const Icon = icons[index % icons.length];

            const isOpen = openCard === index;

            return (
              <motion.article
                key={item.title || index}
                className={`
                  thing-paper
                  thing-paper-${index + 1}
                  ${paperTypes[index % paperTypes.length]}
                  ${isOpen ? "thing-paper-open" : ""}
                `}
                style={{
                  "--paper-rotation": rotations[index % rotations.length],
                }}
                initial={{
                  opacity: 0,
                  y: 35,
                  rotate: 0,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotate: rotations[index % rotations.length],
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.04,
                }}
              >

                {/* TAPE */}
                {(index === 1 || index === 4 || index === 6) && (
                  <span className="paper-tape" />
                )}

                {/* LITTLE ICON */}
                <div className="thing-icon">
                  <Icon size={18} strokeWidth={1.6} />
                </div>


                {/* NUMBER */}
                <span className="thing-number">
                  #{String(index + 1).padStart(2, "0")}
                </span>


                {/* TITLE */}
                <h3>
                  {item.title}
                </h3>


                {/* DESCRIPTION */}
                <p className="thing-description">
                  {item.text || item.description}
                </p>


                {/* OPTIONAL REVEAL */}
                {item.reveal && (
                  <>
                    <button
                      type="button"
                      className="thing-reveal-button"
                      onClick={() =>
                        setOpenCard(isOpen ? null : index)
                      }
                      aria-expanded={isOpen}
                    >
                      <span>
                        {isOpen
                          ? "okay, you found the evidence"
                          : "there's more →"}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          className="thing-hidden-note"
                          initial={{
                            opacity: 0,
                            height: 0,
                            y: -5,
                          }}
                          animate={{
                            opacity: 1,
                            height: "auto",
                            y: 0,
                          }}
                          exit={{
                            opacity: 0,
                            height: 0,
                            y: -5,
                          }}
                          transition={{
                            duration: 0.3,
                          }}
                        >
                          <span>pssst...</span>

                          <p>
                            {item.reveal}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}

              </motion.article>
            );
          })}


          {/* LITTLE CENTER DOODLE */}
          {/* <motion.div
            className="things-center-doodle"
            initial={{
              opacity: 0,
              scale: 0.8,
              rotate: -8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              rotate: -4,
            }}
            viewport={{
              once: true,
            }}
          >
            <Rabbit size={30} strokeWidth={1.4} />

            <span>
              yes,
              <br />
              I notice
              <br />
              everything.
            </span>
          </motion.div> */}

        </div>


        {/* BOTTOM HANDWRITTEN NOTE */}
        <motion.div
          className="things-bottom-note"
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <span>♡</span>

          <p>
            And somehow, these tiny things are the
            ones that make you unmistakably you.
          </p>
        </motion.div>

      </div>
    </section>
  );
}