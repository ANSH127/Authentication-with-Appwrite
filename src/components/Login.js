import {React,useState} from 'react'
import { myaccount } from '../services/appwriteConfig';
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const [details, setDetails] = useState({
        email:"",
        password:"",
    });
    const handlesubmit=async(e)=>{
        console.log(details);
        try {
            await myaccount.createEmailSession(details.email,details.password);
            navigate("/home");
            
        } catch (error) {
            console.log(error);
            
        }
    }
    const handleforget=()=>{
        navigate('/forget-password');
    }
    return (
        <>
        <h2 className='text-center'>Login Page</h2>
            <div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={(e) => {
                        setDetails({
                            ...details,
                            email: e.target.value
                        }
                        )
                    }} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="pass" className="form-label">Password</label>
                    <input type="password" className="form-control" id="pass" onChange={(e) => {
                        setDetails({
                            ...details,
                            password: e.target.value
                        }
                        )
                    }} />
                </div>
                <button type="button" className="btn btn-primary" onClick={() => handlesubmit()} >Submit</button>
                <button type='button' className='btn btn-danger' onClick={()=> handleforget()} >Forget password</button>
            </div>
        </>
    )
}

export default Login