import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import IowaLogo from "@/assets/Iowa.png";
import SeatStockLogo from "@/assets/seatstock.png";
import QMCLogo from "@/assets/QMC.jpeg";
const WorkEducation = () => {
  return (
    <div className="container space-y-12 mt-12 pb-20">
      <section>
        <h2 className="dark:text-zinc-50 text-2xl font-bold mb-4">
          Work Experience
        </h2>
        <Card className="mb-4">
          <CardHeader>
            <div className="flex items-center gap-4">
              <img
                src={QMCLogo}
                className="w-8 h-8 rounded-full text-gray-700 dark:text-gray-300"
              />
              <div>
                <CardTitle><a className="hover:underline" href="https://centroinc.com" target="_blank">Centro, Inc.</a></CardTitle>
                <CardDescription>
                  FullStack Developer (Dec 2024 - Present)
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-2 list-disc ml-4 dark:text-zinc-300">
              <li>
                Developed and optimized full-stack features using TypeScript, Next.js, and NestJS, integrating TypeORM, TanStack, Kubb, and MSSQL for scalable and high-performance solutions.
              </li>
              <li>
                Engineered a high-efficiency NestJS mold inventory system, reducing API response times by 200% and significantly improving data synchronization across the organization.
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card className="mb-4">
          <CardHeader>
            <div className="flex items-center gap-4">
              <img
                src={IowaLogo}
                className="w-8 h-8 rounded-full text-gray-700 dark:text-gray-300"
              />
              <div>
                <CardTitle><a className="hover:underline" href="https://our.research.uiowa.edu/" target="_blank">The University of Iowa</a></CardTitle>
                <CardDescription>
                  Research Assistant (May 2023 - Dec 2024)
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="text-sm list-disc ml-4 space-y-2 dark:text-zinc-300">
              <li>
                Developed an interactive data visualization platform with TypeScript, React, and FastAPI, enabling real-time analysis and intuitive exploration of cell segmentation results.
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card className="mb-4">
          <CardHeader>
            <div className="flex items-center gap-4">
              <img
                src={SeatStockLogo}
                className="w-8 h-8 rounded-full text-gray-700 dark:text-gray-300"
              />
              <div>
                <CardTitle><a className="hover:underline" href="https://seatstock.com" target="_blank">SeatStock</a></CardTitle>
                <CardDescription>
                  Lead Frontend Developer (Aug 2023 - Dec 2023)
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-2 list-disc ml-6 dark:text-zinc-300">
              <li>
              Led the frontend development of a ticket marketplace application using TypeScript and React.
              </li>
              <li>
              Conducted usability testing and gathered feedback, iterating on UI/UX improvements to address user needs and improve overall satisfaction.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
      <section>
        <h2 className="dark:text-zinc-50 text-2xl font-bold mb-4">Education</h2>
        <Card className="mb-4">
          <CardHeader>
            <div className="flex items-center gap-4">
              <img
                src={IowaLogo}
                className="w-8 h-8 rounded-full text-gray-700 dark:text-gray-300"
              />
              <div>
                <CardTitle><a href="https://uiowa.edu" className="hover:underline" target="_blank">The University of Iowa</a></CardTitle>
                <CardDescription>
                Bachelor of Arts in Computer Science (Aug 2020 - Dec 2024)
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-2 list-disc ml-4 dark:text-zinc-300">
              <li>Mathematics minor. Event Planner for ACM 2024. Honors Program.</li>
              <li>
                Algorithms, Data Structures, Software Developement, Math of Machine Learning, Calculus I-III, Linear Algebra and Discrete Math.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default WorkEducation;
