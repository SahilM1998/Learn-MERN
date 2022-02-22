import React from 'react'
import signimage from "../images/login.svg";
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from "react";

const Signup = () => {


    let history = useNavigate();
    const [user, setUser] = useState({
        name: "", email: "", phone: "", work: "", password: "", cpassword: ""
    });

    let field, value;
    const handleInputs = (e) => {
        console.log(e);
        field = e.target.name;
        value = e.target.value;

        setUser({ ...user, [field]: value });

    }

    const postData = async (e) => {
        console.log('clicked');
        console.log(user);
        e.preventDefault();

        const { name, email, phone, work, password, cpassword } = user;

        const res = await fetch("/register", {
            method: "POST",
            header: {
                "Content-Type": "application/json"
            }, "mode": "no-cors",
            body: JSON.stringify({
                name, email, phone, work, password, cpassword
            })
        });
        console.log(res);

        const data = await res.json();
        console.log(res);
        if (res.status === 422 || !data) {
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        }
        else {
            window.alert("Registration successfully react");
            console.log("Invalid successfully");

            history.push("/login");
        }
    }

    return (
        <>
            <section className='container'>
                <div className='formData'>
                    <h2>
                        Sign Up
                    </h2>
                    <form method='POST'>
                        <label htmlFor="name">Name:</label><br /><br />
                        <input type="text" name='name' id='name' autoComplete='off' placeholder='Your name'
                            value={user.name} onChange={handleInputs} />
                        <br /><br />

                        <label htmlFor="email">Email:
                        </label><br /><br />
                        <input type="email" name="email" id="email" autoComplete='off' placeholder='Your email'
                            value={user.email} onChange={handleInputs} />
                        <br /><br />

                        <label htmlFor="phone"> Number:
                        </label><br /><br />
                        <input type="number" name="phone" id="phone" autoComplete='off' placeholder='Your number'
                            value={user.phone} onChange={handleInputs} />
                        <br /><br />


                        <label htmlFor="work">Profession:
                        </label><br /><br />
                        <input type="text" name="work" id="work" autoComplete='off' placeholder='Your work details'
                            value={user.work} onChange={handleInputs} />
                        <br /><br />

                        <label htmlFor="password">Password:</label><br /><br />
                        <input type="password" name="password" id="password" placeholder='Your password'
                            value={user.password} onChange={handleInputs} />
                        <br /><br />

                        <label htmlFor="cpassword">Confirm Password:</label><br /><br />
                        <input type="password" name="cpassword" id="cpassword" placeholder='Confirm password'
                            value={user.cpassword} onChange={handleInputs} />
                        <br /><br />

                        <input type="submit" name='signup' id='signup' value="Register" onClick={postData} />

                    </form>
                </div>
                <div className='signImage'>
                    <figure>
                        <img src={signimage} alt="signInPicture" />
                    </figure>
                    <NavLink to='/Login' className='linkLogin'>I am already registered</NavLink>
                </div>
            </section>

        </>
    )
}

export default Signup