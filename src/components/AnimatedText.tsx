
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { useRef } from "react";

interface Props {
  text: string;
  className?: string;
}

export default function AnimatedText({
  text,
}: Props) {
  const ref =
    useRef<HTMLParagraphElement>(
      null
    );

  const { scrollYProgress } =
    useScroll({
      target: ref,
      offset: [
        "start 0.8",
        "end 0.2",
      ],
    });

  const letters =
    text.split("");

  return (
    <p
      ref={ref}
      className="
      text-[#D7E2EA]
      font-medium
      text-center
      leading-relaxed
      max-w-[700px]
      text-[clamp(1rem,2vw,1.35rem)]
    "
    >
      {letters.map(
        (letter, index) => {
          const start =
            index /
            letters.length;

          const end =
            start +
            1 /
              letters.length;

          const opacity =
            useTransform(
              scrollYProgress,
              [start, end],
              [0.2, 1]
            );

          return (
            <span
              key={index}
              className="
              relative
              inline-block
            "
            >
              <span className="invisible">
                {letter === " "
                  ? "\u00A0"
                  : letter}
              </span>

              <motion.span
                style={{
                  opacity,
                }}
                className="
                absolute
                left-0
                top-0
              "
              >
                {letter === " "
                  ? "\u00A0"
                  : letter}
              </motion.span>
            </span>
          );
        }
      )}
    </p>
  );
}