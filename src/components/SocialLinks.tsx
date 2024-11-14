import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="container flex space-x-4">
      <a
        href="https://linkedin.com/in/liamstamper"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="w-6 h-6 dark:text-zinc-400" />
      </a>
      <a
        href="https://github.com/liamstamper"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub className="w-6 h-6 dark:text-zinc-400" />
      </a>
      <a href="mailto:liam.stamper@gmail.com" aria-label="Email">
        <FaEnvelope className="w-6 h-6 dark:text-zinc-400" />
      </a>
    </div>
  );
};

export default SocialLinks;
