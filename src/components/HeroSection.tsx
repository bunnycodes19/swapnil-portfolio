
import Navbar from "./Navbar";
import FadeIn from "./FadeIn";
import Magnet from "./Magnet";

import bobblehead from "../assets/swapnil_bobblehead_avatar.png";

interface Props {
  onContactClick: () => void;
}

export default function HeroSection({
  onContactClick,
}: Props) {
  return (
    <section
      className="
      relative
      h-screen
      flex
      flex-col
      overflow-x-clip
      bg-[#0C0C0C]
    "
    >
      {/* NAVBAR */}
      <Navbar
        onContactClick={
          onContactClick
        }
      />

      <div
        className="
        relative
        flex
        flex-1
        flex-col
        justify-between
      "
      >
        {/* HERO HEADING */}
        <FadeIn
          delay={0.15}
          y={40}
        >
          <div className="overflow-hidden">
            <h1
              className="
              hero-heading
              font-black
              uppercase
              tracking-tight
              leading-none
              whitespace-nowrap
              text-[11vw]
              sm:text-[12vw]
              md:text-[12.5vw]
              lg:text-[13vw]
              xl:text-[13.5vw]
              mt-6
              sm:mt-4
              md:-mt-5
              text-center
            "
            >
              HI, I&apos;M
              SWAPNIL
            </h1>
            <p
              className="
              text-center
              uppercase
              tracking-[0.4em]
              text-[#D7E2EA]
              text-sm
              md:text-base
              lg:text-lg
              mt-2
            "
            >
              GenAI • RAG • LLM Applications
            </p>

            <p
              className="
              text-center
              text-white/60
              uppercase
              tracking-[0.25em]
              text-xs
              md:text-sm
              mt-3
            "
            >
              FSSAI AI Intern • ECE @ TIET
            </p>
            <p
              className="
              text-center
              uppercase
              tracking-[0.4em]
              text-[#D7E2EA]
              text-sm
              md:text-base
              lg:text-lg
              mt-2
            "
            >
              Data Science • RAG • LLM •  REST APIs • DBMS
            </p>
          </div>
        </FadeIn>

        {/* BOBBLEHEAD */}
        <div
          className="
          absolute
          left-1/2
          -translate-x-1/2
          z-10
          w-[220px]
          sm:w-[280px]
          md:w-[340px]
          lg:w-[400px]
          xl:w-[440px]
          top-[35%]
          -translate-y-1/2
          sm:top-auto
          sm:bottom-[-10px]
          sm:translate-y-0
          pointer-events-none
        "
        >
          <FadeIn
            delay={0.6}
            y={30}
          >
            <Magnet
              padding={150}
              strength={3}
            >
              <img
                src={bobblehead}
                alt="Swapnil"
                className="
                w-full
                object-contain
                select-none
              "
                draggable={
                  false
                }
              />
            </Magnet>
          </FadeIn>
        </div>

        {/* BOTTOM BAR */}
        <div
          className="
          relative
          z-20
          flex
          justify-between
          items-end
          px-6
          md:px-10
          pb-7
          sm:pb-8
          md:pb-10
        "
        >
          {/* LEFT TEXT */}
          <FadeIn
            delay={0.35}
            y={20}
          >
            <p
              className="
              text-[#D7E2EA]
              font-light
              uppercase
              tracking-wide
              leading-snug
              text-[clamp(0.75rem,1.4vw,1.5rem)]
              max-w-[220px]
            "
            >
              Building
              production-ready
              GenAI applications,
              RAG systems,
              and AI-powered
              software.
            </p>
          </FadeIn>

          {/* CONTACT BUTTON */}
          <FadeIn
            delay={0.5}
            y={20}
          >
            <div className="flex gap-4 flex-wrap justify-end">
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

              <a
                href="/Swapnil_Mehta_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
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
                hover:bg-white/10
                transition-all
                "
              >
                View Resume
              </a>
            </div>
            
          </FadeIn>
        </div>
      </div>
      <div
              className="
              absolute
              bottom-6
              left-1/2
              -translate-x-1/2
              flex
              flex-col
              items-center
              gap-2
              z-20
              "
            >
              <span
                className="
                text-white/50
                uppercase
                tracking-[0.3em]
                text-[10px]
                "
              >
                Scroll
              </span>

              <div
                className="
                animate-bounce
                text-white/60
                text-xl
                "
              >
                ↓
              </div>
            </div>
    </section>
  );
}

