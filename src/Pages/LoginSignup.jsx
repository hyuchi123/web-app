import React, {useState} from 'react'
import './CSS/Loginsignup.css'

export const LoginSignup = () => {
    const [state, setState] = useState("Login");
    const [agreeChecked, setAgreeChecked] = useState(false);
    const [formData, setFormData] = useState({
        username:"",
        password:"",
        email:"",
    })

    const changeHandler = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value});
    }
    const handleCheckboxChange = () => {
        setAgreeChecked(!agreeChecked); // Toggle the state of the checkbox
    };

    const login = async () => {
        if (!formData.password || !formData.email) {
            alert('Please fill in all fields.');
            return; // Prevent further execution if any field is empty
        }
        console.log("Login Function Executed",formData);
        let responseData;
        await fetch('http://localhost:4000/login',{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData),
        }).then((response)=> response.json()).then((data)=> responseData=data);
        
        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/");
        }
        else{
            alert(responseData.errors)
        }
    }
    const signup = async () => {
        if (!formData.username || !formData.password || !formData.email) {
            alert('Please fill in all fields.');
            return; // Prevent further execution if any field is empty
        }
        if (!agreeChecked) {
            alert('Please agree to the terms of use & privacy policy.');
            return; // Prevent further execution if the checkbox is not checked
        }
        console.log("Signup Function Executed",formData);
        let responseData;
        await fetch('http://localhost:4000/signup',{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData),
        }).then((response)=> response.json()).then((data)=> responseData=data);
        
        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/");
        }
        else{
            alert(responseData.errors)
        }

    }

    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>{state}</h1>
                <div className="loginsignup-fields">
                    {state === "Sign Up"?<input name='username' value={formData.username} onChange={changeHandler} type='text' placeholder='Your Name' />:<></>}
                    <input name='email' value={formData.email} onChange={changeHandler} type='email' placeholder='Email Address' />
                    <input name='password' value={formData.password} onChange={changeHandler} type='password' placeholder='Password' />
                </div>
                <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
                {state === "Sign Up" ? (
                    <>
                        <p className="loginsignup-login">Already have an account? <span onClick={() => { setState("Login") }}>Login here</span></p>
                        <div className="loginsignup-agree">
                            <input type='checkbox' name='agree' id='agree' checked={agreeChecked} onChange={handleCheckboxChange} />
                            <label htmlFor='agree'>By continuing, I agree to the terms of use & privacy policy.</label>
                        </div>
                    </>
                ) : (
                    <p className="loginsignup-login">Create an account? <span onClick={() => { setState("Sign Up") }}>Click here</span></p>
                )}
            </div>
        </div>
    )
}


