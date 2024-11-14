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
                <CardTitle>Undergraduate Research Assistant</CardTitle>
                <CardDescription>
                  The University of Iowa • Jan 2024 - Present
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-4 dark:text-zinc-300">
              <li>
                Developed mobile apps for Republic Polytechnic using React
                Native.
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
                <CardTitle>Frontend Developer</CardTitle>
                <CardDescription>
                  SeatStock • Aug 2023 - Dec 2023
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-4 dark:text-zinc-300">
              <li>
                Developed a backend system for bank account servicing processes.
              </li>
              <li>
                Built a custom database migration tool using Python and MariaDB.
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
                <CardTitle>Web Developer Intern</CardTitle>
                <CardDescription>
                  SeatStock • May 2022 - July 2022
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-4 dark:text-zinc-300">
              <li>
                Developed a backend system for bank account servicing processes.
              </li>
              <li>
                Built a custom database migration tool using Python and MariaDB.
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
                <CardTitle>Bachelor of Computer Science</CardTitle>
                <CardDescription>
                  The University of Iowa • 2021 - 2024
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-4 dark:text-zinc-300">
              <li>Focus on Artificial Intelligence and Machine Learning.</li>
              <li>
                Completed projects in quantum computing and machine learning.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default WorkEducation;
