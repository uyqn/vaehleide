import { HeroSection } from "@/sections/hero/HeroSection";
import { HistorySection } from "@/sections/history/HistorySection";

export default function Home() {
  return (
    <main className="h-full">
      <HeroSection />
      <HistorySection />
    </main>
  );
}
