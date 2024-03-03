import ButtonJoinUs from "./ButtonJoinUs"


export default function JoinUs (){

    return(
        <>
                <div className="join-us-head">
                    <h2>Join Us For Free</h2>
                </div>
                <div className="join-us-text">
                    <p>create free account with us 
                        to track your link history 
                        and more things for free</p>
                </div>
 
            <div className="joinBtns">
                <ButtonJoinUs 
                    BtnName='Sign Up' 
                    NavPath = '/register'
                />
                <ButtonJoinUs 
                    BtnName='Sign In' 
                    NavPath = '/login'
                />
            </div>

        </>
    )
}