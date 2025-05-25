import { CredentialData } from "@/data/SiteData";


const Credentials = () => {
    return (
        <div className="flex flex-col gap-sm mt-2xl w-full max-w-[var(--desktop)] px-md">
            <h2 className="font-bold">Credentials</h2>
            <div className="flex gap-xs flex-wrap">
                <div className="w-[24px] bg-[var(--accent)]" />
                {CredentialData.map((item) => (
                    <div key={item.institute} className="bg-[var(--surface)] py-md px-xl">
                        <h4>{item.institute}</h4>
                        <h4 className="text-xs">{item.credential}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Credentials;