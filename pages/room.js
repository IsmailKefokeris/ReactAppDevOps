import { HomeIcon } from "@heroicons/react/24/outline"
import { ChevronRightIcon } from "@heroicons/react/24/outline"
import Link from "next/link";
import Card from "../components/card";


export default function Room() {
    const description = "dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius duis at consectetur lorem donec massa sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl";
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

            <Card roomname="RM505" capacity={20} type="Computers" description={description} image="room.png" />

        </div>
    );
}
