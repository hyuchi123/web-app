import React, {useState} from 'react'
import './CSS/Loginsignup.css'

export const LoginSignup = () => {
    const [state, setState] = useState("會員登入");
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
                    {state === "註冊會員"?<input name='username' value={formData.username} onChange={changeHandler} type='text' placeholder='您的名字' />:<></>}
                    <input name='email' value={formData.email} onChange={changeHandler} type='email' placeholder='您的 Email' />
                    <input name='password' value={formData.password} onChange={changeHandler} type='password' placeholder='您的密碼' />
                </div>
                <button onClick={()=>{state==="會員登入"?login():signup()}}>登入</button>
                {state === "註冊會員" ? (
                    <>
                        <p className="loginsignup-login">已經有帳號了? <a onClick={() => { setState("會員登入") }}>按這裡登入</a></p>
                        <div className="loginsignup-agree">
                            <input type='checkbox' name='agree' id='agree' checked={agreeChecked} onChange={handleCheckboxChange} />
                            <label htmlFor='agree'>我同意會員條款和隱私政策</label>
                        </div>
                    </>
                ) : (
                    <p className="loginsignup-login">還不是會員? <a onClick={() => { setState("註冊會員") }}>加入會員</a></p>
                )}
            </div>
        </div>
    )
}
  

