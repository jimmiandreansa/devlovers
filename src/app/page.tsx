import HeroSection from "@/components/HeroSection";
import JobBoard from "@/components/JobBoard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      <HeroSection />
      <JobBoard />
    </main>
  );
}
