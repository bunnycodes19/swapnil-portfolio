import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { useRef } from "react";
import FadeIn from "./FadeIn";

const projects = [
  {
    number: "01",
    category: "AI + COMPUTER VISION",
    title:
      "VisionX – Smart Assistive Glasses",

    description:
      "Raspberry Pi-powered wearable system for visually impaired users featuring currency recognition, text-to-speech feedback, SOS emergency functionality, and live location/video streaming.",

    tech:
      "Python • OpenCV • Raspberry Pi • TTS • Computer Vision",

    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop",
  },

  {
    number: "02",
    category:
      "LLM + SEMANTIC RETRIEVAL",

    title:
      "FSSAI / NSC AI Assistant",

    description:
      "Optimized government chatbot workflows through improved indexing, semantic retrieval, feature facilitation, and low-computation response systems.",

    tech:
      "NLP • LLM • Semantic Search • Optimization • APIs",

    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1400&auto=format&fit=crop",
  },

  {
    number: "03",
    category: "FULL STACK SAAS",

    title:
      "Smile Saviours Dental Platform",

    description:
      "Scalable appointment and management system for dental clinics with authentication, dashboard management, scheduling, and responsive UX.",

    tech:
      "React • TypeScript • Node.js • PostgreSQL",

    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1400&auto=format&fit=crop",
  },

  {
    number:
      "04",

    category:
      "RESEARCH + CV",

    title:
      "PCB Defect Detection",

    description:
      "Research-based deep learning system achieving 89% mAP and 91% recall for automated PCB defect identification.",

    tech:
      "YOLOv5 • Deep Learning • Computer Vision",

    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop",
  },

  {
    number:
      "05",

    category:
      "MACHINE LEARNING",

    title:
      "Spam Message Classifier",

    description:
      "Machine learning spam detection system achieving 98% classification accuracy through optimized NLP preprocessing pipelines.",

    tech:
      "Python • NLP • Scikit-learn • ML",

    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1400&auto=format&fit=crop",
  },
];

function ProjectCard({
  project,
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
      className="
      h-[85vh]
      relative
    "
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
        bg-[#0C0C0C]
        p-4
        sm:p-6
        md:p-8
        overflow-hidden
      "
      >
        {/* TOP */}
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
              {project.number}
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
              {project.category}
            </p>

            <h3
              className="
              text-2xl
              md:text-5xl
              font-bold
              mt-3
            "
            >
              {project.title}
            </h3>
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
              {project.description}
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
              {project.tech}
            </div>
          </div>
        </div>

        {/* IMAGE */}
        <img
          src={project.image}
          alt={project.title}
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

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="
      bg-[#0C0C0C]
      rounded-t-[40px]
      sm:rounded-t-[50px]
      md:rounded-t-[60px]
      -mt-10
      sm:-mt-12
      md:-mt-14
      z-10
      relative
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
          Projects
        </h2>
      </FadeIn>

      <div>
        {projects.map(
          (project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
              totalCards={
                projects.length
              }
            />
          )
        )}
      </div>
    </section>
  );
}