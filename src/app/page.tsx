import { HeroSection } from "@/sections/hero/HeroSection";
import { HistorySection } from "@/sections/history/HistorySection";
import { InformationSection } from "@/sections/information/InformationSection";

export default function Home() {
  return (
    <main className="h-full">
      <HeroSection />
      <HistorySection />
      <InformationSection />
    </main>
  );
}
