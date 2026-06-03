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
  className = "",
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

  const words =
    text.split(" ");

  return (
    <p
      ref={ref}
      className={`
        text-[#D7E2EA]
        font-medium
        text-center
        leading-relaxed
        max-w-[1000px]
        mx-auto
        text-[clamp(1rem,2vw,1.35rem)]
        ${className}
      `}
    >
      {words.map(
        (word, index) => {
          const start =
            index /
            words.length;

          const end =
            start +
            1 /
              words.length;

          const opacity =
            useTransform(
              scrollYProgress,
              [start, end],
              [0.2, 1]
            );

          return (
            <motion.span
              key={index}
              style={{
                opacity,
              }}
              className="
                inline-block
                mr-[0.35em]
              "
            >
              {word}
            </motion.span>
          );
        }
      )}
    </p>
  );
}