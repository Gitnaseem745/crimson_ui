import { darkTheme } from "@/components/theme/theme";
import Button from "@/components/ui/button/Button";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
    <Button theme={darkTheme}> Dark Theme </Button>
    </div>
  );
}
