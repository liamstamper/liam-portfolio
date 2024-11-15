import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { ModeToggle } from "./theme/mode-toggle";

const SocialLinks = () => {
  return (
    <div className="container flex items-center space-x-4">
      <a
        href="https://linkedin.com/in/liamstamper"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
      >
        <FaLinkedin className="w-6 h-6 dark:text-zinc-400" />
      </a>
      <a
        href="https://github.com/liamstamper"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
      >
        <FaGithub className="w-6 h-6 dark:text-zinc-400" />
      </a>
      <a
        href="mailto:liam.stamper@gmail.com"
        aria-label="Email"
        className="hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
      >
        <FaEnvelope className="w-6 h-6 dark:text-zinc-400" />
      </a>
      <div className="ml-4">
        <ModeToggle />
      </div>
    </div>
  );
};

export default SocialLinks;
