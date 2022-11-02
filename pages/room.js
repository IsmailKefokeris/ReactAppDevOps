function RoomName(props) {
    console.log(props);
    return <h1> Room = {props.names} </h1>;
}

export default function Room() {
    return (
        <div>
            <h1> RM501 </h1>
            <RoomName names="Joes Room" />
        </div>
    );
}
