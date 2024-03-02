import { useState } from "react"

export default function (props) {
const [inputPlaceholder,setInputPlaceholder] = useState('Your Link')

    return(
        <>
            <div className="card-bg">
                <div className="card-input">
                    <input type="text" placeholder = {props.InputName} />
                </div>
                <div className="card-button">
                    <button type="button" onClick={()=>{console.log('clicked')}}>{props.BtnName}</button>
                </div>
            </div>
        </>
    )
}