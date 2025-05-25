import { HomeHeroData } from "@/data/SiteData";
import MainButton from "../buttons/MainButton";
import { BehanceIcon, GitHubIcon, LinkedInIcon } from "@/asset/Icon";
import Link from "next/link";



const HeroHome = () => {
    return (
        <div className="w-full max-w-[var(--desktop)] px-md py-2xl">
            <h1>JAKKRIT</h1>
            <div className="flex justify-between w-full">
                
                {/* left column */}
                <div className="w-full max-w-[48%]">
                    <span className="font-extrabold text-hero leading-none">TURNER</span>
                    <h4 className="text-[var(--accent)]">React/React Native Developer & UX/UI Designer</h4>
                </div>

                {/* middle line */}
                <div className="max-w-[1px] bg-accent flex-1" />

                {/* right column */}
                <div className="flex flex-col gap-sm w-full max-w-[48%]">
                    <p>{HomeHeroData.detail}</p>
                    <div className="flex gap-sm items-center">
                        <MainButton name="View Resume" />
                        <Link href="https://www.behance.net/jakkritturner" target="blank">
                            <BehanceIcon size={32} color="var(--accent)" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/jakkrit-turner/" target="blank">
                            <LinkedInIcon size={32} color="var(--accent)" />
                        </Link>
                        <Link href="https://github.com/jkTurner" target="blank">
                            <GitHubIcon size={32} color="var(--accent)" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroHome;