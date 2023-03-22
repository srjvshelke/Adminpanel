import React, { useState } from "react";
import "./login.css";
import { useNavigate } from 'react-router-dom';
import { clearErrors, login } from "../../Redux/Action/Login";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { memo, useEffect } from "react";
import LoadingScreen from "../../Components/Loaderscreen/LoadingScreen";
function Login() {
    const alert = useAlert();
    const dispatch = new useDispatch();
    const { error, loading, isAuthenticated } = useSelector(
        (state) => state.user
      );
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
        dispatch(login(email, password));
    }

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
    });
    return (
        <>
           {loading?<LoadingScreen/>
            : <div className="container">
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
           }


        </>
    );
}

export default memo(Login);