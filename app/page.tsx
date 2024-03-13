import LandingPage from "@/app/components/LandingPage";
import { FeaturesPage, Footer, PricingPage, WhyUs } from "./components";

export default function Home() {
  return (
    <main className=" h-[100vh] w-full relative">
      <LandingPage />
      <FeaturesPage />
      <WhyUs />
      <PricingPage />
      <Footer />
    </main>
  );
}
