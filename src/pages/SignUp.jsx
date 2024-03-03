import { Link } from "react-router-dom";
import { useState } from "react";
import bcrypt from 'bcryptjs';


import { collection, addDoc ,getDocs ,query, where, } from "firebase/firestore";
import {db} from '../firebase';
   

export default function SignUp (props){
    const [email,setEmail] = useState();
    const [username,setUsername] =useState('hiru');
    const [password,setPassword] = useState();
    const [repssword,setRepassword] = useState();
    const [hashedPassword,setHashedPassword] = useState();

    //password hashing
    const hasher = ()=>{
        const pw = password;
        const saltRounds = 10;
        bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(pw, salt, function(err, hash) {
                setHashedPassword(hash)
            });
        });
    }

    //firebase add new user
    const adduser = async () => {
        //hash password
        hasher();
        console.log(hashedPassword);
        //add user
        try {
            const docRef = await addDoc(collection(db, "users"), {
              email:email,
              username: username,
              password: hashedPassword    
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }
    //firebase check user
    const checkUsername = async () => {        
        //setup query 
        const usersRef = collection(db, "users");
        const qun = query(usersRef, where("username", "==", username));
        const qem = query(usersRef,where('email', '==',email));
        
        //check db 
        const querySnapshotUn = await getDocs(qun);
        const querySnapshotEm =await getDocs(qem);

        //user names outputs
        if (querySnapshotUn.docs.length != 0) {
            if (querySnapshotEm.docs.length != 0) {
                alert('Email and password Exists try another one');
                return false; 
            }else{
                alert('Username Exists try otherOne');
                return false; 
            }
            
        }else{
            if (querySnapshotEm.docs.length != 0) {
                alert('Email Exists try otherOne');
                return false
            }else{
                return true
            }
        }
    };


    //function for sign up checkes
    const signUp = async (e)=>{
        e.preventDefault();
        const UnEmCheck = await checkUsername();
        if(password != repssword){
            console.log('check the password');
        }else{
            if(UnEmCheck){
                adduser();
            }else{
                console.log('sign up failed');
            }
        }

    }



    return(
        <>  
            <div className="signInputs">
                <h3>Lets Sign Up</h3>
                <div className="sign-input">
                    <input type="text" placeholder = 'Email Address' onChange={(ev)=>{setEmail(ev.target.value)}} />
                    <input type="text" placeholder = 'User Name' onChange={(ev)=>{setUsername(ev.target.value)}} />
                    <input type="password" placeholder = 'Password' onChange={(ev)=>{setPassword(ev.target.value)}} />
                    <input type="password" placeholder = 'Re-type Password' onChange={(ev)=>{setRepassword(ev.target.value)}}/>
                </div>
                <div className="sign-btn">
                    <div className="card-button">
                        <button type="button" onClick={signUp}>Sign Up</button>
                        {/* <button type="button" onClick={hasher}>hash</button> */}
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