import FadeIn from "./FadeIn";

const services = [
{
number: "01",
title: "GENERATIVE AI APPLICATIONS",
description:
"Building production-ready AI applications powered by Large Language Models, prompt engineering, model evaluation, and intelligent workflow automation.",
},
{
number: "02",
title: "RETRIEVAL-AUGMENTED GENERATION",
description:
"Developing RAG systems using embeddings, vector databases, semantic search, contextual retrieval, and citation-grounded question answering.",
},
{
number: "03",
title: "INTELLIGENT DOCUMENT PROCESSING",
description:
"Creating document understanding pipelines involving PDF extraction, chunking, embedding generation, indexing, information retrieval, and automated knowledge discovery.",
},
{
number: "04",
title: "COMPUTER VISION SYSTEMS",
description:
"Building vision-based solutions using OpenCV, YOLOv5, deep learning, and image processing for accessibility, industrial automation, and real-world AI applications.",
},
{
number: "05",
title: "FULL STACK AI PLATFORMS",
description:
"Developing scalable AI products with FastAPI, React, NestJS, PostgreSQL, REST APIs, authentication, and production-oriented backend architecture.",
},
];

export default function ServicesSection() {
return ( <section
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
 > <FadeIn> <h2
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
Skills </h2> </FadeIn>

```
  <div className="max-w-5xl mx-auto">
    {services.map((service, i) => (
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
    ))}
  </div>
</section>

);
}
