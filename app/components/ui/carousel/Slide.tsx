import Image from "next/image";
import MainButton from "../buttons/MainButton";

interface SlideProps {
    header: string;
    subHeader: string;
    detail: string;
    desktop: string;
    mobile: string;

}

const Slide: React.FC<SlideProps> = ({ header, subHeader, detail, desktop, mobile}) => {
    return (
        <div className="flex gap-md w-full px-md">
            <div className="flex flex-col gap-sm w-full max-w-[70%]">
                <div>
                    <h3 className="font-bold text-xl">{header}</h3>
                    <h4 className="text-xs">{subHeader}</h4>
                </div>
                <p>{detail}</p>
                <div className="flex gap-sm">
                    <MainButton name="View Details" />
                    <MainButton name="Live Preview" />
                </div>

                {/* Image Desktop */}
                <div className="w-full h-[400px] relative">
                    <Image
                        src={desktop}
                        alt="none"
                        fill
                        priority
                        className="nextImage"
                    />
                </div>

            </div>
            {/* Image Mobile */}
            <div className="w-full flex-1 bg-accent relative">
                <Image
                    src={mobile}
                    alt="none"
                    fill
                    priority
                    className="nextImage"
                />
            </div>
        </div>
    )
}

export default Slide;