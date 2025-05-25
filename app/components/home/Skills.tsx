import { SkillData } from "@/data/SiteData";

const Skills = () => {
    return (
        <div className="w-full max-w-[var(--desktop)] px-md">
            <h2 className="text-sm font-bold">Skills & Favorite Tools</h2>
            {SkillData.map((item) => (
                <div key={item.category} className="flex flex-col gap-sm">
                    <div className="flex gap-sm w-full items-center mt-sm">
                        <h3 className="">{item.category}</h3>
                        <div className="w-full h-[1px] flex-1 bg-mute" />
                    </div>
                    <div className="grid4Container">
                        {item.skills.map((skill, index) => (
                            <h4 
                                key={skill} 
                                className="w-full py-sm px-md revealGradient"
                                // style={{ animationDelay: `${index * 0.15}s` }}
                                style={{ '--reveal-delay': `${index * 0.3}s` } as React.CSSProperties}
                            >
                                {skill}
                            </h4>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Skills;