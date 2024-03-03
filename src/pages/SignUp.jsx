import { Link } from "react-router-dom"

export default function SignUp (props){

    return(
        <>  
            <div className="signInputs">
                <h3>Lets Sign Up</h3>
                <div className="sign-input">
                    <input type="text" placeholder = 'Email Address' />
                    <input type="text" placeholder = 'User Name' />
                    <input type="password" placeholder = 'Password' />
                    <input type="password" placeholder = 'Re-type Password' />
                </div>
                <div className="sign-btn">
                    <div className="card-button">
                        <button type="button" onClick={()=>{console.log('sign up')}}>Sign Up</button>
                    </div>
                </div>
            </div>

            <div className="signText">
                        <h4>Need Help With,</h4>
                    <div className="sign-help">
                        <p>Dont have an account <Link to={'/login'}>Login</Link></p>
                        <p>forget your password <Link to={'/reset_password'}>reset Password</Link></p>
                    </div>
            </div>
        </>
    )
}