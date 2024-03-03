
import { useNavigate } from "react-router-dom"

export default function ButtonJoinUs (props){

    const navigate = useNavigate();

    const NavPage =()=>{
        navigate(props.NavPath);
    }

    return(
        <>
            <div className="join-us-button">
                <button type="button" onClick={NavPage}>{props.BtnName}</button>
            </div>
        </>

    )
}