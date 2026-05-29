
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
        justify-between
        items-center
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
        lg:text-[1.4rem]
        hover:opacity-70
        transition
        "
        >
        About
        </a>

        <a
        href="#services"
        className="
        text-[#D7E2EA]
        font-medium
        uppercase
        tracking-wider
        text-sm
        md:text-lg
        lg:text-[1.4rem]
        hover:opacity-70
        transition
        "
        >
        Expertise
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
        lg:text-[1.4rem]
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
        lg:text-[1.4rem]
        hover:opacity-70
        transition
        "
        >
        Projects
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
        lg:text-[1.4rem]
        hover:opacity-70
        transition
        "
        >
        Contact
        </button>
    </nav>
    );

}
