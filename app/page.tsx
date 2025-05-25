import Credentials from "./components/home/Credentials";
import Projects from "./components/home/Projects";
import Skills from "./components/home/Skills";
import SoftSkills from "./components/home/SoftSkills";
import HeroHome from "./components/ui/banners/HeroHome";
import ProjectCarousel from "./components/ui/carousel/ProjectCarousel";

export default function Home() {
    return (
        <div className="py-xl w-full flex flex-col items-center">
            <HeroHome />
            <Skills />
            <ProjectCarousel />
            <Projects />
            <Credentials />
            <SoftSkills />
            <div className="w-full max-w-[var(--desktop)] px-md my-2xl">
                <p className="font-bold text-lg">Thank you for visiting</p>
                <p>I look forward to connecting with you and discuss exciting possibilities and collaborations</p>
            </div>
        </div>
    );
}
