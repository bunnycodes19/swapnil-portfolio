import FadeIn from "./FadeIn";

const skillGroups = [
{
title: "Languages",
skills: [
"Python",
"SQL",
"JavaScript",
"C++",
"C",
],
},

{
title: "Generative AI",
skills: [
"LLMs",
"RAG",
"LangChain",
"Embeddings",
"FAISS",
"ChromaDB",
"Prompt Engineering",
],
},

{
title: "Backend",
skills: [
"FastAPI",
"Node.js",
"Express",
"NestJS",
"REST APIs",
],
},

{
title: "Databases",
skills: [
"PostgreSQL",
"MongoDB",
"MySQL",
],
},

{
title: "Machine Learning",
skills: [
"Scikit-learn",
"OpenCV",
"YOLOv5",
"NLP",
"Computer Vision",
],
},
];

export default function SkillsSection() {
return ( <section
   id="skills"
   className="
   bg-white
   px-5
   sm:px-8
   md:px-10
   py-20
 "
 > <FadeIn> <h2
       className="
       text-[#0C0C0C]
       text-center
       font-black
       uppercase
       text-[clamp(3rem,12vw,160px)]
       mb-20
     "
     >
Skills </h2> </FadeIn>

```
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
    {skillGroups.map((group) => (
      <div
        key={group.title}
        className="
        border
        border-black/10
        rounded-3xl
        p-8
      "
      >
        <h3
          className="
          text-2xl
          font-bold
          text-black
          mb-5
        "
        >
          {group.title}
        </h3>

        <div className="flex flex-wrap gap-3">
          {group.skills.map((skill) => (
            <span
              key={skill}
              className="
              px-4
              py-2
              rounded-full
              bg-black
              text-white
              text-sm
            "
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>


);
}
