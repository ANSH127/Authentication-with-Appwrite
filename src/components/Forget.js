import {React,useState} from 'react'
import { myaccount } from '../services/appwriteConfig';

function Forget() {
    const [details, setDetails] = useState({
        email:'',
    })
    const handlesubmit=async()=>{
        console.log(details.email);
        await myaccount.createRecovery(details.email,'http://localhost:3000/reset-password')
        console.log('Email has been sent');

    }
  return (
    <>
    <h1 className='text-center'>Password Recovery</h1>

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
                </div>
                <button type="button" className="btn btn-primary" onClick={() => handlesubmit()} >Reset Password</button>

    </div>
    </>
  )
}

export default Forget