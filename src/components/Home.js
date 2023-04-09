import { React, useState, useEffect } from 'react'
import { myaccount } from '../services/appwriteConfig'
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const [data, setData] = useState();
    useEffect(() => {
        try {
            fetchData();
            async function fetchData() {

                const data = await myaccount.get();
                setData(data)
                console.log(data);
            }

        } catch (error) {

        }


    }, [])

    const handlelogout = async (e) => {
        try {
            await myaccount.deleteSession('current');
            navigate('/login')

        } catch (error) {
            console.log(error)

        }


    }
    const handledelete=async(e)=>{
        // try {
        //     await myaccount.delete();

            
        // } catch (error) {
        //     console.log(error);
            
        // }
        // method removed not anymore

    }
    
    // email verification 

    const urlParams=new URLSearchParams(window.location.search);
    const userId=urlParams.get('userId');
    const secret=urlParams.get('secret');
    if (userId) {
        
        myaccount.updateVerification(userId,secret).then(()=>{
            console.log("user is verified");
            navigate('/home');
        }).catch((e)=>{
            console.log('failed',e);
        })
    }
    

    return (
        <>
            {data && <div className="container">
                <h2>UID: {data.$id}</h2>
                <h2>Name {data.name}</h2>
                <h2>Email {data.email}</h2>
                <h2>Email Status {data.emailVerification ? "Verified" : "Not Verified"}</h2>
                <button className='btn btn-danger mx-2' onClick={() => handlelogout()} >Logout</button>
                <button className='btn btn-danger mx-2' onClick={() => handledelete()} >Delete Account</button>
            </div>}
        </>
    )
}

export default Home