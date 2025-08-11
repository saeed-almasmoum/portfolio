import Link from "next/link";
import { FaGithub, FaGitlab, FaWhatsapp } from "react-icons/fa";
const socials = [
  { icon: <FaGithub></FaGithub>, path: "https://github.com/saeed-almasmoum/" },
  // { icon: <FaGitlab></FaGitlab>, path: "https://gitlab.com/users/ziad-abdul-samad/" },
  { icon: <FaWhatsapp></FaWhatsapp>, path: "https://wa.me/963935280318" },
];
export default function Socials({ containerStyles, iconStyles }) {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}
