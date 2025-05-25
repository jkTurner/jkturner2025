import { BehanceIcon, GitHubIcon, LinkedInIcon } from "@/asset/Icon";
import { Paths } from "@/data/SiteData";
import Link from "next/link";
import styles from "./footer.module.css"

const Footer = () => {
    return (
        <div className="mainLayout bg-[var(--backgroundOverlay)]">
            <div className="flex flex-col w-full max-w-[var(--desktop)] px-md">

                {/* Top Section */}
                <div className="flex w-full justify-between font-bold py-xl">
                    <div className="flex gap-lg items-center w-full leading-none">
                        <h1>J<span className="text-accent">K</span>T</h1>
                        <div className="w-full max-w-[1px] bg-accent h-[70%]" />
                        <p className="font-light">Stay focused, and the rest will follow</p>
                    </div>
                    <div className="flex gap-sm items-center">
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

                {/* Bottom Menu */}
                <div className="flex w-full justify-between pb-md leading-none">
                    <div className="flex">
                        {Paths.map((item) => (
                            <div key={item.name} className={styles.navItem}>
                                <Link href={item.path}>
                                    <span className="">{item.name}</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <span className="text-[var(--mute)]">©Jakkrit Turner. All rights reserved</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;