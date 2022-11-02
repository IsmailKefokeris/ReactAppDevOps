import Link from "next/link";
import Image from "next/image";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";

export default function Header() {

    return (
        <div className="max-w-full relative w-screen">
            <nav className="p-5 bg-white flex justify-between border-b-2 border-slate-500">
                <Link href="/">
                    <Image
                        src="/../public/img/logo.png"
                        alt="Logo"
                        layout="fixed"
                        height={46}
                        width={102}
                        className="cursor-pointer"
                    />
                </Link>

                <div className="flex space-x-2 cursor-pointer mt-2">
                    <ArrowRightOnRectangleIcon className="h-6 w-6 mt-0.5"/>
                    <h4 className="text-gray-500">Log Out</h4>
                </div>
            </nav>
        </div>
    );
}