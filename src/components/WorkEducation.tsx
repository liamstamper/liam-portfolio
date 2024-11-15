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
        <h2 className="dark:text-zinc-50 text-2xl font-bold mb-6">
          Work Experience
        </h2>
        <Card className="mb-4">
          <CardHeader>
            <div className="flex items-center gap-4">
              <img
                src={IowaLogo}
                className="w-8 h-8 rounded-full text-gray-700 dark:text-gray-300"
              />
              <div>
                <CardDescription className="text-xs">May 2023 - Present</CardDescription>
                <CardTitle><a className="hover:underline" href="https://our.research.uiowa.edu/" target="_blank">The University of Iowa</a></CardTitle>
                <CardDescription>
                Undergraduate Research Assistant
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="text-sm list-disc ml-4 dark:text-zinc-300">
              <li>
                Developed advanced machine learning models to perform precise cell segmentation for bone marrow scans.
              </li>
              <li>
                Engineered a custom visualization tool using TypeScript, React and FastApi.
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
                <CardDescription className="text-xs">Aug 2023 - Dec 2023</CardDescription>
                <CardTitle><a className="hover:underline" href="https://seatstock.com" target="_blank">SeatStock</a></CardTitle>
                <CardDescription>
                  Lead Frontend Developer
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="text-sm list-disc ml-6 dark:text-zinc-300">
              <li>
              Led the frontend development of a ticket marketplace application using TypeScript and React.
              </li>
              <li>
              Conducted usability testing and gathered feedback, iterating on UI/UX improvements to address user needs and improve overall satisfaction.
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card className="mb-4">
          <CardHeader>
            <div className="flex items-center gap-4">
              <img
                src={QMCLogo}
                className="w-8 h-8 rounded-full text-gray-700 dark:text-gray-300"
              />
              <div>
                <CardDescription className="text-xs">May 2022 - July 2022</CardDescription>
                <CardTitle><a className="hover:underline" href="https://qualitymfgcorp.com" target="_blank">Quality Manufacturing Corporation</a></CardTitle>
                <CardDescription>
                Software Developer (Intern)
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="text-sm list-disc ml-4 dark:text-zinc-300">
              <li>
                Designed and implemented data-driven part request forms using HTML/CSS, JavaScript, PHP, AJAX and SQL.
              </li>
              <li>
              Collaborated closely with cross-functional teams to refine requirements and ensure the interface met both user and business needs.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
      <section>
        <h2 className="dark:text-zinc-50 text-2xl font-bold mb-6">Education</h2>
        <Card className="mb-4">
          <CardHeader>
            <div className="flex items-center gap-4">
              <img
                src={IowaLogo}
                className="w-8 h-8 rounded-full text-gray-700 dark:text-gray-300"
              />
              <div>
                <CardDescription className="text-xs">Aug 2020 - Dec 2024</CardDescription>
                <CardTitle><a href="https://uiowa.edu" className="hover:underline" target="_blank">The University of Iowa</a></CardTitle>
                <CardDescription>
                Bachelor of Arts in Computer Science
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="text-sm list-disc ml-4 dark:text-zinc-300">
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
