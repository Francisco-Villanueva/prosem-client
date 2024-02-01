import Button from "@/app/common/Button";
import LandingPage from "@/app/components/LandingPage";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-2 h-[100vh] ">
      {/* <LandingPage /> */}
      <Button variant="primary">BUTTON</Button>
      <Button variant="secondary">button</Button>
      <Button variant="dark">button</Button>
    </main>
  );
}
