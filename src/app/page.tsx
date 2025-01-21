import HeroSection from "@/components/HeroSection";
import JobBoard from "@/components/JobBoard";
import User from "@/components/User";
import { buttonVariants } from "@/components/ui/button";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      <HeroSection />
      <JobBoard />
    </main>
  );
}
