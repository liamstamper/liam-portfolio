import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import IowaLogo from "@/assets/Iowa.jpg";

export default function Education() {
  return (
    <section>
      <Card className="mb-4">
        <CardHeader>
          <div className="flex items-center gap-4">
            <img
              src={IowaLogo}
              className="w-8 h-8 rounded-full text-gray-700 dark:text-gray-300"
            />
            <div>
              <CardTitle>
                <a
                  href="https://uiowa.edu"
                  className="hover:underline"
                  target="_blank"
                >
                  The University of Iowa
                </a>
              </CardTitle>
              <CardDescription className="py-[1px] text-xs">
                Bachelor's in Computer Science (Aug 2020 - Dec 2024)
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="text-sm space-y-2 list-disc ml-4 dark:text-zinc-300">
            <li>
              Mathematics minor. Event Planner for ACM 2024. Honors Program.
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}
