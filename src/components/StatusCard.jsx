

export default function StatusCard (props){

    return(

        <>
            <div className="StatusBg">
                <div className="StCount">{props.count}</div>
                <div className="StName">{props.name}</div>
            </div>
        </>
    )
}