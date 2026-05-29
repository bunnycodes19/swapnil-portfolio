import FadeIn from "./FadeIn";

const services = [
  {
    number: "01",
    title: "AI AUTOMATION SYSTEMS",
    description:
      "Building intelligent automation systems powered by NLP, LLMs, and semantic retrieval to reduce manual workflows, improve efficiency, and enable practical decision support.",
  },

  {
    number: "02",
    title: "INTELLIGENT SEARCH & RETRIEVAL",
    description:
      "Designing low-latency semantic search systems with optimized indexing, contextual retrieval, and scalable knowledge pipelines for enterprise and government use cases.",
  },

  {
    number: "03",
    title: "COMPUTER VISION SOLUTIONS",
    description:
      "Developing vision-based systems using OpenCV, YOLO, and deep learning for detection, recognition, accessibility, and real-world AI applications.",
  },

  {
    number: "04",
    title: "FULL-STACK SOFTWARE",
    description:
      "Building scalable web applications using React, TypeScript, Node.js, NestJS, databases, APIs, and production-oriented engineering principles.",
  },

  {
    number: "05",
    title: "EDGE AI & EMBEDDED SYSTEMS",
    description:
      "Creating optimized AI systems for Raspberry Pi and low-resource environments with real-time inference, computer vision, and hardware integration.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="
      bg-white
      rounded-t-[40px]
      sm:rounded-t-[50px]
      md:rounded-t-[60px]
      px-5
      sm:px-8
      md:px-10
      py-20
      sm:py-24
      md:py-32
    "
    >
      <FadeIn delay={0}>
        <h2
          className="
          text-[#0C0C0C]
          font-black
          uppercase
          text-center
          mb-16
          sm:mb-20
          md:mb-28
          text-[clamp(3rem,12vw,160px)]
        "
        >
          What I Build
        </h2>
      </FadeIn>

      <div
        className="
        max-w-5xl
        mx-auto
      "
      >
        {services.map(
          (service, i) => (
            <FadeIn
              key={service.number}
              delay={i * 0.1}
            >
              <div
                className="
                flex
                flex-col
                md:flex-row
                gap-8
                py-8
                sm:py-10
                md:py-12
                border-b
                border-black/15
              "
              >
                <div
                  className="
                  font-black
                  text-[#0C0C0C]
                  text-[clamp(3rem,10vw,140px)]
                  leading-none
                "
                >
                  {service.number}
                </div>

                <div className="flex-1">
                  <h3
                    className="
                    font-medium
                    uppercase
                    text-[#0C0C0C]
                    text-[clamp(1rem,2.2vw,2.1rem)]
                  "
                  >
                    {service.title}
                  </h3>

                  <p
                    className="
                    mt-4
                    max-w-2xl
                    font-light
                    leading-relaxed
                    text-[clamp(.85rem,1.6vw,1.25rem)]
                    text-black/60
                  "
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          )
        )}
      </div>
    </section>
  );
}