interface Props {
  onContactClick: () => void;
}

export default function Navbar({
  onContactClick,
}: Props) {
  return (
    <nav
      className="
      flex
      flex-wrap
      justify-center
      md:justify-between
      items-center
      gap-4
      px-6
      md:px-10
      pt-6
      md:pt-8
      z-30
      relative
    "
    >
      <a
        href="#about"
        className="
        text-[#D7E2EA]
        font-medium
        uppercase
        tracking-wider
        text-sm
        md:text-lg
        hover:opacity-70
        transition
      "
      >
        About
      </a>

      <a
        href="#experience"
        className="
        text-[#D7E2EA]
        font-medium
        uppercase
        tracking-wider
        text-sm
        md:text-lg
        hover:opacity-70
        transition
      "
      >
        Experience
      </a>

      <a
        href="#projects"
        className="
        text-[#D7E2EA]
        font-medium
        uppercase
        tracking-wider
        text-sm
        md:text-lg
        hover:opacity-70
        transition
      "
      >
        Projects
      </a>

      <a
        href="#skills"
        className="
        text-[#D7E2EA]
        font-medium
        uppercase
        tracking-wider
        text-sm
        md:text-lg
        hover:opacity-70
        transition
      "
      >
        Skills
      </a>

      <a
        href="/Swapnil_Mehta_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="
        text-[#D7E2EA]
        font-medium
        uppercase
        tracking-wider
        text-sm
        md:text-lg
        hover:opacity-70
        transition
      "
      >
        Resume
      </a>

      <a
        href="https://linkedin.com/in/swapnil-mehta-sm"
        target="_blank"
        rel="noopener noreferrer"
        className="
        text-[#D7E2EA]
        font-medium
        uppercase
        tracking-wider
        text-sm
        md:text-lg
        hover:opacity-70
        transition
      "
      >
        LinkedIn
      </a>

      <button
        onClick={onContactClick}
        className="
        text-[#D7E2EA]
        font-medium
        uppercase
        tracking-wider
        text-sm
        md:text-lg
        hover:opacity-70
        transition
      "
      >
        Contact
      </button>
    </nav>
  );
}