import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "./ui/card";
import NFMImage from "../assets/NFM.png";
import QuizlyImage from "../assets/Quizly.png";
import { MoveRight } from "lucide-react";

export default function Projects() {
  return (
    <section>
      <Card className="mb-4">
        <CardHeader>
          <div className="flex items-center gap-4">
            <img
              src={QuizlyImage}
              className="w-10 h-10 rounded-full text-gray-700 dark:text-gray-300"
            />
            <div>
              <CardTitle>
                <a
                  href="https://github.com/liamstamper/quizly"
                  className="hover:underline flex flex-row items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Quizly <MoveRight className="ml-1" size={"12px"} />
                </a>
              </CardTitle>
              <CardDescription className="text-xs">
                (Nov 2024 - Present)
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="text-sm space-y-2 list-disc ml-4 dark:text-zinc-300">
            <li>Took home 2nd place at the Iowa State Hackathon 2024</li>
            <li>
              Built a real-time quiz game using FastAPI, Redis, and WebSockets
              with a Vite, TypeScript, and React frontend.
            </li>
            <li>
              Implemented text prompt and document processing for AI quiz
              generation.
            </li>
          </ul>
        </CardContent>
      </Card>
      <Card className="mb-4">
        <CardHeader>
          <div className="flex items-center gap-4">
            <img
              src={NFMImage}
              className="w-10 h-10 rounded-full text-gray-700 dark:text-gray-300"
            />
            <div>
              <CardTitle>
                <a
                  href="https://github.com/NextFileManager/deployment"
                  className="hover:underline flex flex-row items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NextFileManager <MoveRight className="ml-1" size={"12px"} />
                </a>
              </CardTitle>
              <CardDescription className="text-xs">
                File Server (Oct 2024 - Present)
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="text-sm space-y-2 list-disc ml-4 dark:text-zinc-300">
            <li>
              Open-source file server built in TypeScript using React and
              FastAPI, supporting OIDC and LDAP authentication.
            </li>
            <li>
              Containerized with Docker for easy deployment, optimized
              performance, and seamless setup across different environments.
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}
