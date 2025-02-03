import LiamImage from "@/assets/Liam.jpeg";
import Resume from "@/assets/Liam-Stamper.pdf";

const Hero = () => {
  return (
    <div className="container dark:text-zinc-50 pt-20 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 pb-4">
      <div className="text-center md:text-left max-w-lg space-y-4 order-2">
        <h1 className="text-4xl font-bold">Hi, I'm Liam 👋</h1>

        <p className="text-md dark:text-white">
          I'm a{" "}
          <span className="underline font-semibold">full-stack developer</span>{" "}
          based in Iowa City. I love exploring new tech and getting outdoors.
        </p>

        <p className="text-md dark:text-zinc-300">
          I specialize in{" "}
          <span className="font-semibold">
            TypeScript, React, NestJS, FastApi and Next.js
          </span>
          . For more, visit my {" "}
          <a
            href="https://github.com/liamstamper"
            target="_blank"
            className="font-semibold text-blue-500 dark:text-blue-400"
            rel="noopener noreferrer"
          >
            GitHub
          </a> or{" "}
          <a
            href={Resume}
            target="_blank"
            className="font-semibold text-blue-500 dark:text-blue-400"
            rel="noopener noreferrer"
          >
            view my resume.
          </a>
        </p>
      </div>

      <div className="flex-shrink-0 self-center md:self-start order-1">
        <img
          src={LiamImage}
          alt="Liam"
          className="w-24 h-24 md:w-36 md:h-36 rounded-xl object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
