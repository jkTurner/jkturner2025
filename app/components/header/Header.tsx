import { Paths } from "@/data/SiteData";
import styles from "./header.module.css"
import Link from "next/link";


const Header = () => {
    return (
        <div className="mainLayout py-md bg-[var(--backgroundOverlay)]">
            <div className="flex w-full max-w-[var(--desktop)] justify-between items-center px-md">
                <div className="font-bold">
                    <h1>J<span className="text-accent">K</span>T</h1>
                </div>
                <div className="flex leading-none">
                    {Paths.map((item) => (
                        <div key={item.name} className={styles.navItem}>
                            <Link href={item.path}>
                                <span className="">{item.name}</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Header;