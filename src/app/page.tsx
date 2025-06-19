"use client";
import SplitText from "./_components/SplitText";
import Iridescence from "./_components/Iridescence";
import { ChevronDown } from "lucide-react";
import { Projects } from "./_components/Projects/Projects";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const handleAnimationComplete = () => {};

export default function Home() {
  return (
    <>
      <div className="absolute inset-0 w-full h-screen font-sans">
        <Iridescence
          color={[0.3, 0.5, 0.9]}
          mouseReact={false}
          amplitude={0.1}
          speed={0.9}
        />
      </div>

      <nav className="absolute h-auto w-[calc(100%-10rem)] text-white z-50 top-0 mx-20">
        <div className="flex gap-4 w-full items-center justify-between py-4 font-serif">
          <div>
            <Link href="/">
              <h1 className="hover:text-blue-300 hover:cursor-pointer">
                Marco Túlio
              </h1>
            </Link>
          </div>
          <div className="flex gap-4">
            <a
              className="hover:scale-125 hover:text-blue-300"
              href="https://github.com/maarcotulio"
              target="_blank"
            >
              <GitHubLogoIcon className="h-8 w-8" />
            </a>
            <a
              className="hover:scale-125 hover:text-blue-300"
              href="https://www.linkedin.com/in/marco-túlio-b4225b340"
              target="_blank"
            >
              <LinkedInLogoIcon className="h-8 w-8" />
            </a>
          </div>
        </div>
      </nav>

      <header className="h-screen w-ful flex flex-col text-white justify-center relative z-20">
        <div className="relative flex flex-col items-center justify-between">
          <SplitText
            text="Marco Túlio"
            className="text-6xl font-bold font-figTree"
            delay={100}
            duration={0.5}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <SplitText
            text="Engenheiro de Software"
            className="text-2xl font-medium font-figTree"
            delay={100}
            duration={0.2}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <ChevronDown className="h-8 w-8" />
        </div>
      </header>

      <div className="h-40 w-full"></div>

      <main className="bg-background mx-20 mb-40">
        <div>
          <Projects />
        </div>
      </main>
    </>
  );
}
