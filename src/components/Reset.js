import { React, useState } from 'react'
import { myaccount } from '../services/appwriteConfig';
import { useNavigate } from "react-router-dom";

function Reset() {
    const navigate = useNavigate();

    const [details, setDetails] = useState({
        pass: "",
        cpass: "",

    })
    const handlesubmit = async () => {
        console.log(details);

        const urlParams = new URLSearchParams(window.location.search);
        const userId = urlParams.get('userId');
        const secret = urlParams.get('secret');
        await myaccount.updateRecovery(userId, secret, details.pass, details.cpass);
        navigate('/login');
    }
    return (
        <>
            <h1>Reset your password</h1>

            <div>
                <div className="mb-3">
                    <label htmlFor="pass" className="form-label">Enter your new password </label>
                    <input type="password" className="form-control" id="pass" onChange={(e) => {
                        setDetails({
                            ...details,
                            pass: e.target.value
                        }
                        )
                    }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpass" className="form-label">Repeat your password </label>
                    <input type="password" className="form-control" id="cpass" onChange={(e) => {
                        setDetails({
                            ...details,
                            cpass: e.target.value
                        }
                        )
                    }} />
                </div>
                <button type="button" className="btn btn-primary" onClick={() => handlesubmit()} >Change Password</button>

            </div>
        </>
    )
}

export default Reset