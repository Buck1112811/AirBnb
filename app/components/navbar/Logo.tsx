'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    return (

        <div className="flex flex-row items-center gap-2">
            <Image
                alt="Logo"
                className="hidden md:block cursor-pointer"
                width={50}
                height={50}
                src="/images/logo.png"
            />
            <span className="hidden text-2xl font-bold text-red-500 md:block">
                airbnb
            </span>
        </div>
    );
};

export default Logo;