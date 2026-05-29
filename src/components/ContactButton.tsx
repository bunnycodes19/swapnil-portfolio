
export default function ContactButton() {
  return (
    <a
      href="mailto:smehta1be23@thapar.edu"
      className="
      rounded-full
      border-2
      border-white
      px-8
      py-3
      text-xs
      sm:text-sm
      md:text-base
      font-medium
      uppercase
      tracking-widest
      text-white
      sm:px-10
      sm:py-3.5
      md:px-12
      md:py-4
      transition
      hover:scale-[1.03]
      "
      style={{
        background:
          "linear-gradient(123deg,#18011F 7%,#B600A8 37%,#7621B0 72%,#BE4C00 100%)",

        boxShadow:
          "0px 4px 4px rgba(181,1,167,.25),4px 4px 12px #7721B1 inset",
      }}
    >
      Contact Me
    </a>
  );
}
