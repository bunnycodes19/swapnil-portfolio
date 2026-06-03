
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import FadeIn from "./FadeIn";


const experiences = [
  {
    number: "01",
    type: "GOVERNMENT EXPERIENCE",

    company: "FSSAI ",

    role: "AI Engineering Intern",

    duration: "2026",

    description:
      "Worked on optimizing an AI-powered government chatbot system by improving semantic retrieval, keyword indexing, feature facilitation, and low-computation response pipelines for faster and more reliable assistance.",

    skills:
      "LLMs • NLP • Semantic Search • APIs • Optimization",

    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1400&auto=format&fit=crop",
    location: "New Delhi, India"
  },

  {
    number: "02",
    type: "RESEARCH EXPERIENCE",

    company:
      "ELC TIET",

    role:
      "Computer Vision Researcher",

    duration: "2025",

    description:
      "Designed deep learning-based PCB defect detection models for industrial automation, achieving high precision defect classification using modern computer vision pipelines.",

    skills:
      "YOLOv5 • Deep Learning • Computer Vision",

    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop",
    location: "Patiala, India"
  },

  
];

function ExperienceCard({
  experience,
  index,
  totalCards,
}: any) {
  const ref =
    useRef<HTMLDivElement>(null);

  const { scrollYProgress } =
    useScroll({
      target: ref,
      offset: [
        "start end",
        "start start",
      ],
    });

  const targetScale =
    1 -
    (totalCards - 1 - index) *
      0.03;

  const scale =
    useTransform(
      scrollYProgress,
      [0, 1],
      [1, targetScale]
    );

  return (
    <div
      ref={ref}
      className="h-[85vh] relative"
    >
      <motion.div
        style={{
          scale,
          top: `${index * 28}px`,
        }}
        className="
        sticky
        top-24
        md:top-32
        rounded-[40px]
        sm:rounded-[50px]
        md:rounded-[60px]
        border-2
        border-[#D7E2EA]
        bg-[#1A1A1A]
        p-4
        sm:p-6
        md:p-8
        overflow-hidden
      "
      >
        <div
          className="
          flex
          flex-col
          lg:flex-row
          justify-between
          gap-6
          mb-8
        "
        >
          <div>
            <div
              className="
              text-[clamp(3rem,10vw,140px)]
              font-black
              leading-none
            "
            >
              {experience.number}
            </div>

            <p
              className="
              uppercase
              tracking-widest
              text-sm
              opacity-60
              mt-2
            "
            >
              {experience.type}
            </p>

            <h3
              className="
              text-2xl
              md:text-5xl
              font-bold
              mt-3
            "
            >
              {experience.company}
            </h3>

            <div
              className="
              text-lg
              text-white/70
              mt-2
            "
            >
              {experience.role}
            </div>

            <div
              className="
              text-sm
              uppercase
              tracking-widest
              text-white/40
              mt-2
            "
            >
              {experience.duration}
            </div>

            <div
              className="
              text-sm
              text-white/50
              mt-1
            "
            >
              {experience.location}
            </div>
          </div>

          <div className="max-w-lg">
            <p
              className="
              text-white/70
              leading-relaxed
              text-sm
              md:text-lg
            "
            >
              {experience.description}
            </p>

            <div
              className="
              mt-5
              text-sm
              uppercase
              tracking-widest
              text-[#D7E2EA]
            "
            >
              {experience.skills}
            </div>
          </div>
        </div>

        <img
          src={experience.image}
          alt={experience.company}
          className="
          rounded-[40px]
          w-full
          h-[45vh]
          object-cover
        "
        />
      </motion.div>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="
      bg-[#0C0C0C]
      px-5
      sm:px-8
      md:px-10
      py-20
    "
    >
      <FadeIn>
        <h2
          className="
          hero-heading
          text-center
          font-black
          uppercase
          tracking-tight
          leading-none
          text-[clamp(3rem,12vw,160px)]
          mb-20
        "
        >
          Experience
        </h2>
      </FadeIn>

      <div>
        {experiences.map(
          (
            experience,
            index
          ) => (
            <ExperienceCard
              key={
                experience.number
              }
              experience={
                experience
              }
              index={index}
              totalCards={
                experiences.length
              }
            />
          )
        )}
      </div>
    </section>
  );
}
