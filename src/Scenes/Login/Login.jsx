import React, { useState } from "react";
import "./login.css";
import { useNavigate } from 'react-router-dom';
function Login() {

    const navigator = useNavigate();
    const [logindata, setlogindata] = useState({
        email: "",
        password: ""

    })

    let name, value;
    const userlogindata = (e) => {
        name = e.target.name;
        value = e.target.value;
        setlogindata({ ...logindata, [name]: value });


    }
    const logincomplete = async (e) => {
        const { email, password } = logindata;
        e.preventDefault();
        const res = await fetch("/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    email,
                    password
                })
        });
        const data = res.json();

        if (res.status == 400 || !data) {
            console.log("invalid credentials");
            window.alert("invalid credentials");
            setlogindata({
                email: "",
                password: ""
            })
        } else {
            console.log("Login succefully");
            window.alert("Login sucessfully");
            navigator("/chat");
            setlogindata({
                email: "",
                password: ""
            })
        }

    }
    return (
        <>
            <div className="container">
                <div className="wrapper">
                    <div className="title-text">
                        <div className="title login">
                            Login Form
                        </div>
                    </div>
                    <div className="form-container">

                        <div className="form-inner">
                            <form action="#" className="login">
                                <div className="field">
                                    <input type="text" placeholder="Email Address" name="email" required value={logindata.email} onChange={userlogindata} />
                                </div>
                                <div className="field">
                                    <input type="password" placeholder="Password" name="password" required value={logindata.password} onChange={userlogindata} />
                                </div>
                                <div className="pass-link">
                                    <a>Forgot password?</a>
                                </div>
                                <div className="field btn">
                                    <div className="btn-layer"></div>
                                    <input type="submit" value="Login" onClick={logincomplete} />
                                </div>
                            </form>


                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Login;