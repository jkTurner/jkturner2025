import ProjectCarousel from "./ProjectCarousel";


const ProjectCarouselContainer = () => {
    return (
        <div className="w-full bg-[var(--backgroundOverlay)] py-2xl mt-2xl">
            <div className="flex justify-between w-full max-w-[var(--desktop)] mx-auto px-md mb-md">
                <h2 className="font-bold text-[var(--accent)]">Projects</h2>
                <div className="w-[200px] h-[20px]">
                    {/* navigator goes here */}
                </div>
            </div>
            <ProjectCarousel />
        </div>
    )
}

export default ProjectCarouselContainer;




