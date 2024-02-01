import LandingPage from "@/app/components/LandingPage";
import Card from "./common/Card";
import { ClickIcon, CustomIcon, SecureIcon, StaffIcon } from "./icons";
import FeatureCards from "./components/FeatureCards";


export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-2 h-[100vh]">
    <LandingPage />
  </main>
  );
}
