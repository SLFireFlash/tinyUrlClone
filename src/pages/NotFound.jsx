import { useNavigate } from "react-router-dom";

export default function () {
const navigate = useNavigate();

    return(
        <>
            <div className="not-found-bg">
                <div className="not-found-text">
                    <h1>404</h1>
                    <p>somethig went wrong...</p>
                    <p>the requested url is not found in this server</p>
                </div>
                <div className="not-found-btn">
                <div className="card-button">
                        <button type="button" onClick={()=>{navigate('/home')}}>Home</button>
                    </div>
                </div>

                
            </div>
        </>
    )
}