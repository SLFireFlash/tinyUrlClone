
import { Link } from "react-router-dom"

export default function ResetPasswordV (props){

    return(
        <>   
            <div className="signInputs">
                <h3>Lets Update Password</h3>
                <div className="sign-input">
                    <input type="password" placeholder = 'New Password' />
                    <input type="password" placeholder = 'Re-Type Password' />
                </div>
                <div className="sign-btn">
                    <div className="card-button">
                        <button type="button" onClick={()=>{console.log('reset password 2')}}>Update Password</button>
                    </div>
                </div>
            </div>

            <div className="signText">
                        <h4>Need Help With,</h4>
                    <div className="sign-help">
                        <p>already have an account <Link to={'/register'}>Register</Link></p>
                        <p>already have an account <Link to={'/login'}>login</Link></p>
                    </div>
            </div>
        </>
    )
}