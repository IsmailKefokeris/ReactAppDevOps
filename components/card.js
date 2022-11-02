import Image from "next/image";

export default function Card(props) {
    const {roomname, capacity, type, description, image} = props;
    return (
        <div className="bg-white mt-11 p-2 rounded-lg shadow-md flex">
            <div>
                <Image
                    src={`/../public/img/${image}`}
                    alt="Room Image"
                    layout="fixed"
                    height={424}
                    width={518}
                />
            </div>
            
            <div className="min-w-[50%] ml-3">
                <h1 className="text-xl mb-6 font-bold">{roomname}</h1>

                <div className="flex justify-between border-b-2 border-gray-400 pb-3">
                    <h2 className="font-semibold">Student Capacity:</h2>
                    <h2>{capacity}</h2>
                </div>

                <div className="flex justify-between border-b-2 border-gray-400 pt-3 pb-3">
                    <h2 className="font-semibold">Type:</h2>
                    <h2>{type}</h2>
                </div>

                <div className="flex justify-between border-b-2 border-gray-400 pt-3 pb-3">
                    <p>{description}</p>
                </div>

            </div>
        </div>
    );
}