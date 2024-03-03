
import { Link } from "react-router-dom"

export default function ResetPassword (props){

    return(
        <>   
            <div className="signInputs">
                <h3>Lets Reset Password</h3>
                <div className="sign-input">
                    <input type="text" placeholder = 'User Name' />
                    <input type="text" placeholder = 'Email Address' />
                </div>
                <div className="sign-btn">
                    <div className="card-button">
                        <button type="button" onClick={()=>{console.log('reset password')}}>Reset Password</button>
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