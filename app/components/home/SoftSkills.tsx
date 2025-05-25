import { SoftSkillData } from "@/data/SiteData";


const SoftSkills = () => {
    return (
        <div className="mt-xl w-full max-w-[var(--desktop)] px-md">
            <h2 className="text-sm font-bold mb-md">Soft Skills</h2>
            <div className="gridSoftSkills">
                {SoftSkillData.map((item) => (
                    <h4 
                        key={item}
                        className="w-full py-sm px-md bg-[var(--surface)]"
                    >
                        {item}
                    </h4>
                ))}
            </div>
        </div>
    )
}

export default SoftSkills;