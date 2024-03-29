
import { Link } from "react-router-dom"

export default function SignIn (props){

    return(
        <>   
            <div className="signInputs">
                <h3>Lets Sign In</h3>
                <div className="sign-input">
                    <input type="text" placeholder = 'User Name' />
                    <input type="password" placeholder = 'Password' />
                </div>
                <div className="sign-btn">
                    <div className="card-button">
                        <button type="button" onClick={()=>{console.log('sign up')}}>Sign In</button>
                    </div>
                </div>
            </div>

            <div className="signText">
                        <h4>Need Help With,</h4>
                    <div className="sign-help">
                        <p>already have an account <Link to={'/register'}>Register</Link></p>
                        <p>forget your password <Link to={'/reset_password'}>reset Password</Link></p>
                    </div>
            </div>
        </>
    )
}