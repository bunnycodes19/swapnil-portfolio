import {
Mail,
Phone,
FileText,
X,
} from "lucide-react";

interface Props {
open: boolean;
onClose: () => void;
}

export default function ContactPopup({
open,
onClose,
}: Props) {
if (!open) return null;

return ( <div
   className="
   fixed inset-0 z-[999]
   flex items-center justify-center
   bg-black/50
   backdrop-blur-md
 "
   onClick={onClose}
 >
<div
onClick={(e) =>
e.stopPropagation()
}
className="
w-[340px]
rounded-[36px]
border border-white/10
bg-[#111111]
p-5
shadow-2xl
"
>
{/* HEADER */} <div className="flex justify-between items-center mb-5"> <h2
         className="
         text-white
         font-bold
         uppercase
         tracking-widest
       "
       >
Contact Me </h2>

```
      <button onClick={onClose}>
        <X className="text-white/60" />
      </button>
    </div>

    {/* LINKEDIN */}
    <a
      href="https://www.linkedin.com/in/swapnil-mehta-sm/"
      target="_blank"
      rel="noopener noreferrer"
      className="
      flex items-center gap-4
      rounded-2xl
      p-4
      hover:bg-white/5
      transition
    "
    >
      <div
        className="
        w-[22px]
        h-[22px]
        rounded-full
        bg-blue-400
      "
      />

      <div>
        <p className="text-white font-medium">
          LinkedIn
        </p>

        <p className="text-white/50 text-sm">
          Connect professionally
        </p>
      </div>
    </a>

    {/* RESUME */}
    <a
      href="/Swapnil_Mehta_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="
      flex items-center gap-4
      rounded-2xl
      p-4
      hover:bg-white/5
      transition
    "
    >
      <FileText
        size={22}
        className="text-yellow-400"
      />

      <div>
        <p className="text-white font-medium">
          Resume
        </p>

        <p className="text-white/50 text-sm">
          Download latest resume
        </p>
      </div>
    </a>

    {/* EMAIL */}
    <a
      href="mailto:mehtaparth210@gmail.com"
      className="
      flex items-center gap-4
      rounded-2xl
      p-4
      hover:bg-white/5
      transition
    "
    >
      <Mail
        size={22}
        className="text-pink-400"
      />

      <div>
        <p className="text-white font-medium">
          Email
        </p>

        <p className="text-white/50 text-sm">
          mehtaparth210@gmail.com
        </p>
      </div>
    </a>

    {/* PHONE */}
    <a
      href="tel:+918383045113"
      className="
      flex items-center gap-4
      rounded-2xl
      p-4
      hover:bg-white/5
      transition
    "
    >
      <Phone
        size={22}
        className="text-green-400"
      />

      <div>
        <p className="text-white font-medium">
          Call / WhatsApp
        </p>

        <p className="text-white/50 text-sm">
          +91 83830 45113
        </p>
      </div>
    </a>
  </div>
</div>

);
}
