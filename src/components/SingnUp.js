import {React,useState} from 'react'
import { myaccount } from '../services/appwriteConfig';
import { ID } from "appwrite";
import { useNavigate } from "react-router-dom";

function SingnUp() {
    const navigate = useNavigate();
    const [details, setDetails] = useState({
        name:"",
        email:"",
        password:""
    })
    const handlesubmit=async(e)=>{
        console.log(details);
        try {
        const newuser=await myaccount.create(ID.unique(),details.email,details.password,details.name);
        await myaccount.createEmailSession(details.email,details.password);
        await myaccount.createVerification("http://localhost:3000/home");
        console.log("Verification email sent");
        // console.log(newuser);
        // alert("User Created Sucessfully")
        // navigate('/home')

            
        } catch (error) {
            console.log(error);
            
        }
    }
    const googleAuth=(e)=>{
        myaccount.createOAuth2Session("google","http://localhost:3000/home","http://localhost:3000/login")
    }
    return (
        <>
            <div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label" 
                     >Name </label>
                    <input type="email" className="form-control" id="name" onChange={(e)=>{
                        setDetails({
                            ...details,
                            name: e.target.value
                        }
                        )}} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={(e)=>{
                        setDetails({
                            ...details,
                            email: e.target.value
                        }
                        )}}/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="pass" className="form-label">Password</label>
                    <input type="password" className="form-control" id="pass" onChange={(e)=>{
                        setDetails({
                            ...details,
                            password: e.target.value
                        }
                        )}}/>
                </div>
                <button type="button" className="btn btn-primary" onClick={()=>handlesubmit()} >Submit</button>
            </div>
            <div>
                <button className='btn btn-primary my-4' onClick={()=>googleAuth()} >Login With Google</button>
            </div>
        </>
    )
}

export default SingnUp