import { HomeIcon } from "@heroicons/react/24/outline"
import { ChevronRightIcon } from "@heroicons/react/24/outline"
import Link from "next/link";
import Card from "../components/card";


export default function Room() {
    return (
        <div className="max-w-[80%] mx-auto mt-11">

            <div className="bg-white mt-11 p-2 rounded-lg shadow-md flex">
                <HomeIcon className="h-7 w-7"/>
                <Link href="/">
                    <a className="cursor-pointer font-semibold text-blue-700 mt-1 ml-1">Home</a>
                </Link>
                <ChevronRightIcon className="h-5 w-5 mt-2 ml-1"/>

                <p className="cursor-pointer font-semibold mt-1 ml-1">RM505</p>
            </div>

            <Card roomname="name" capacity={20} type="Computers" description="lorem40" image="room.png" />

        </div>
    );
}
