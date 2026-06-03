
import {
  useEffect,
  useRef,
  useState,
} from "react";

const marqueeItems = [
  {
    title: "ResearchMind AI",
    subtitle:
    "Generative AI Research Assistant",

  
  tech:
    "LangChain • Gemini • FAISS • FastAPI",

  image:
    "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1400&auto=format&fit=crop",
  

  },

  {
  title: "FSSAI RAG",
  subtitle:
  "Government Document Intelligence",

    
  tech:
    "RAG • Embeddings • Vector Search",

  image:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1400&auto=format&fit=crop",
    

  },

  {
  title: "PCB Detection",
  subtitle:
  "Computer Vision Research",

    
  tech:
    "YOLOv5 • OpenCV • Deep Learning",

  image:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop",
    

  },

  {
  title: "Smile Saviours",

    
  subtitle:
    "Multi-Tenant SaaS Platform",

  tech:
    "NestJS • React • PostgreSQL",

  image:
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1400&auto=format&fit=crop",
    

  },

  {
  title: "VisionX",

    
  subtitle:
    "AI Smart Assistive Glasses",

  tech:
    "OpenCV • Raspberry Pi • TTS",

  image:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop",
    

  },

  {
  title: "Semantic Retrieval",

    
  subtitle:
    "Embeddings + Vector Databases",

  tech:
    "FAISS • ChromaDB • Search",

  image:
    "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?q=80&w=1400&auto=format&fit=crop",
    

  },
  ];

function MarqueeCard({
  item,
}: any) {
  return (
    <div
      className="
      relative
      h-[270px]
      min-w-[420px]
      overflow-hidden
      rounded-2xl
      border
      border-white/10
      group
    "
    >
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className="
        absolute
        inset-0
        h-full
        w-full
        object-cover
        transition-transform
        duration-700
        group-hover:scale-105
      "
      />

      {/* overlay */}
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-t
        from-black/90
        via-black/30
        to-transparent
      "
      />

      {/* content */}
      <div
        className="
        absolute
        bottom-0
        left-0
        p-6
        z-10
      "
      >
        <h3
          className="
          text-3xl
          font-bold
          text-white
        "
        >
          {item.title}
        </h3>

        <p
          className="
          text-white/70
          mt-1
          text-sm
        "
        >
          {item.subtitle}
        </p>

        <div
          className="
          mt-4
          text-xs
          uppercase
          tracking-[0.2em]
          text-[#D7E2EA]
        "
        >
          {item.tech}
        </div>
      </div>
    </div>
  );
}

export default function MarqueeSection() {
  const sectionRef =
    useRef<HTMLElement>(null);

  const [offset, setOffset] =
    useState(0);

  const row1 =
    marqueeItems.slice(0, 3);

  const row2 =
    marqueeItems.slice(3);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current)
        return;

      const sectionTop =
        sectionRef.current.offsetTop;

      const scrollOffset =
        (window.scrollY -
          sectionTop +
          window.innerHeight) *
        0.3;

      setOffset(scrollOffset);
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    handleScroll();

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
      bg-[#0C0C0C]
      pt-24
      sm:pt-32
      md:pt-40
      pb-10
      overflow-hidden
    "
    >
      <div className="flex flex-col gap-3">

        {/* ROW 1 */}
        <div className="overflow-hidden">
          <div
            className="
            flex
            gap-3
            will-change-transform
          "
            style={{
              transform: `translateX(${
                offset - 200
              }px)`,
            }}
          >
            {[
              ...row1,
              ...row1,
              ...row1,
            ].map(
              (item, i) => (
                <MarqueeCard
                  key={i}
                  item={item}
                />
              )
            )}
          </div>
        </div>

        {/* ROW 2 */}
        <div className="overflow-hidden">
          <div
            className="
            flex
            gap-3
            will-change-transform
          "
            style={{
              transform: `translateX(-${
                offset - 200
              }px)`,
            }}
          >
            {[
              ...row2,
              ...row2,
              ...row2,
            ].map(
              (item, i) => (
                <MarqueeCard
                  key={i}
                  item={item}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
