import FadeIn from "./FadeIn";
import AnimatedText from "./AnimatedText";

import {
  Brain,
  Database,
  Cpu,
  Bot,
} from "lucide-react";

interface Props {
  onContactClick: () => void;
}

export default function AboutSection({
  onContactClick,
}: Props) {
  return (
    <section
      id="about"
      className="
      relative
      min-h-screen
      px-5
      sm:px-8
      md:px-10
      py-20
      overflow-hidden
    "
    >
      {/* TOP LEFT */}
      <FadeIn
        delay={0.1}
        x={-80}
        duration={0.9}
        className="
        absolute
        top-[4%]
        left-[1%]
        sm:left-[2%]
        md:left-[4%]
      "
      >
        <div
          className="
          w-[120px]
          sm:w-[160px]
          md:w-[210px]
          rounded-[32px]
          border
          border-white/10
          bg-white/5
          backdrop-blur-md
          p-5
        "
        >
          <Brain
            className="
            text-[#D7E2EA]
            w-10
            h-10
          "
          />

          <p
            className="
            mt-3
            uppercase
            tracking-widest
            text-xs
          "
          >
            AI Systems
          </p>
        </div>
      </FadeIn>

      {/* BOTTOM LEFT */}
      <FadeIn
        delay={0.25}
        x={-80}
        duration={0.9}
        className="
        absolute
        bottom-[8%]
        left-[3%]
        sm:left-[6%]
        md:left-[10%]
      "
      >
        <div
          className="
          w-[100px]
          sm:w-[140px]
          md:w-[180px]
          rounded-[32px]
          border
          border-white/10
          bg-white/5
          backdrop-blur-md
          p-5
        "
        >
          <Database
            className="
            text-[#D7E2EA]
            w-10
            h-10
          "
          />

          <p
            className="
            mt-3
            uppercase
            tracking-widest
            text-xs
          "
          >
            Databases
          </p>
        </div>
      </FadeIn>

      {/* TOP RIGHT */}
      <FadeIn
        delay={0.15}
        x={80}
        duration={0.9}
        className="
        absolute
        top-[4%]
        right-[1%]
        sm:right-[2%]
        md:right-[4%]
      "
      >
        <div
          className="
          w-[120px]
          sm:w-[160px]
          md:w-[210px]
          rounded-[32px]
          border
          border-white/10
          bg-white/5
          backdrop-blur-md
          p-5
        "
        >
          <Cpu
            className="
            text-[#D7E2EA]
            w-10
            h-10
          "
          />

          <p
            className="
            mt-3
            uppercase
            tracking-widest
            text-xs
          "
          >
            Computer Vision
          </p>
        </div>
      </FadeIn>

      {/* BOTTOM RIGHT */}
      <FadeIn
        delay={0.3}
        x={80}
        duration={0.9}
        className="
        absolute
        bottom-[8%]
        right-[3%]
        sm:right-[6%]
        md:right-[10%]
      "
      >
        <div
          className="
          w-[130px]
          sm:w-[170px]
          md:w-[220px]
          rounded-[32px]
          border
          border-white/10
          bg-white/5
          backdrop-blur-md
          p-5
        "
        >
          <Bot
            className="
            text-[#D7E2EA]
            w-10
            h-10
          "
          />

          <p
            className="
            mt-3
            uppercase
            tracking-widest
            text-xs
          "
          >
            RAG Systems
          </p>
        </div>
      </FadeIn>

      <div
        className="
        flex
        flex-col
        items-center
        justify-center
        min-h-screen
        gap-10
        sm:gap-14
        md:gap-16
      "
      >
        <FadeIn delay={0} y={40}>
          <h2
            className="
            hero-heading
            font-black
            uppercase
            leading-none
            tracking-tight
            text-center
            text-[clamp(3rem,12vw,160px)]
          "
          >
            About Me
          </h2>
        </FadeIn>

        <AnimatedText
        className="
        max-w-[900px]
        px-6
        md:px-0
        text-center
        leading-[1.8]
        text-[clamp(1rem,1.8vw,1.45rem)]
        break-normal
        whitespace-normal
        "text="Electronics and Communication Engineering student at Thapar Institute of Engineering and Technology focused on building Generative AI applications, Retrieval-Augmented Generation systems, intelligent document processing platforms, and production-ready AI software. My experience spans LLM-powered assistants, semantic search pipelines, vector databases, computer vision systems, and scalable backend engineering across government and research environments."
/>
        <p
          className="
          text-center
          text-white/60
          uppercase
          tracking-[0.25em]
          text-xs
          md:text-sm
        "
        >
          FSSAI Intern • ResearchMind AI • Computer Vision Research
        </p>

        {/* SAME CONTACT POPUP BUTTON */}
        <button
          onClick={onContactClick}
          className="
          relative
          rounded-full
          px-8
          py-4
          sm:px-10
          md:px-12
          text-xs
          sm:text-sm
          md:text-base
          font-medium
          uppercase
          tracking-widest
          text-white
          border-2
          border-white
          hover:scale-105
          transition-all
        "
          style={{
            background:
              "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
            boxShadow:
              "0px 4px 4px rgba(181,1,167,0.25), inset 4px 4px 12px #7721B1",
          }}
        >
          Contact Me
        </button>
      </div>
    </section>
  );
}