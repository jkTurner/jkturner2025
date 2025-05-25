import { ProjectData } from "@/data/SiteData";
import MainButton from "../ui/buttons/MainButton";
import Image from "next/image";


const Projects = () => {
    return (
        <div className="mt-2xl w-full bg-[var(--backgroundOverlay)]">
            <div className="flex flex-col gap-md w-full max-w-[var(--desktop)] mx-auto px-md py-2xl">

                {/* Project Menu */}
                <div id="project menu" className="flex w-full justify-between items-center">
                    <h2 className="text-[var(--accent)] font-bold text-sm">Projects</h2>
                    <div className="w-[200px] h-[16px] bg-accent" />
                </div>

                {/* Project Content */}
                {ProjectData.map((item) => (
                    <div key={item.header}  className="flex w-full gap-md">
                            <div className="flex flex-col gap-sm w-full max-w-[70%]">
                                <div>
                                    <h3 className="font-bold text-xl">{item.header}</h3>
                                    <h4 className="text-xs">{item.subHeader}</h4>
                                </div>
                                <p>{item.detail}</p>
                                <div className="flex gap-sm">
                                    <MainButton name="View Details" />
                                    <MainButton name="Live Preview" />
                                </div>
                                <div className="w-full h-[300px] relative">
                                    <Image
                                        src={item.desktop}
                                        alt={item.header}
                                        fill
                                        priority
                                        className="nextImage"
                                    />
                                </div>
                            </div>
                        <div className="w-full flex-1 bg-accent relative">
                            <Image
                                src={item.mobile}
                                alt={item.header}
                                fill
                                priority
                                className="nextImage"
                            />
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Projects;