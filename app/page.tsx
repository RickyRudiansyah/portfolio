import Navbar from "@/components/Navbar";
import Intro from "@/components/sections/Intro";
import TechStack from "@/components/sections/TechStack";
import ProjectWarkopQR from "@/components/sections/ProjectWarkopQR";
import ProjectJudiGone from "@/components/sections/ProjectJudiGone";
import ProjectSmartQuail from "@/components/sections/ProjectSmartQuail";
import ProjectCocoGo from "@/components/sections/ProjectCocoGo";
import Connect from "@/components/sections/Connect";
import BackToTop from "@/components/ui/BackToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Intro />
        <TechStack />
        <ProjectWarkopQR />
        <ProjectJudiGone />
        <ProjectSmartQuail />
        <ProjectCocoGo />
        <Connect />
      </main>
      <BackToTop />
    </>
  );
}
