import { Paths } from "@/data/SiteData";
import styles from "./header.module.css"
import Link from "next/link";


const Header = () => {
    return (
        <div className="mainLayout py-md">
            <div className="flex w-full max-w-[var(--desktop)] justify-between items-center px-md relative">
                <div className="font-bold">
                    <h1>J<span className="text-accent">K</span>T</h1>
                    <div className="absolute bg-[var(--backgroundOverlay)] h-[100px] w-[80px] top-[-50px] left-[9px] z-[-10]" />
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