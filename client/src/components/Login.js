import React from 'react'
import signLogIn from "../images/Sigin.svg";
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <>

            <section className='container'>

                <div className='signImage'>
                    <figure>
                        <img src={signLogIn} alt="signInPicture" />
                    </figure>
                    <NavLink to='/Signup' className='linkLogin'>Create an Account</NavLink>
                </div>
                <div className='formData'>
                    <h2>
                        Sign Up
                    </h2>
                    <form>
                        <label htmlFor="email">Email:
                        </label><br /><br />
                        <input type="email" name="email" id="email" autoComplete='off' placeholder='Your email' />
                        <br /><br />

                        <label htmlFor="password">Password:</label><br /><br />
                        <input type="password" name="password" id="password" placeholder='Your password' />
                        <br /><br />

                        <input type="submit" name='signin' id='signin' value="Log In" />

                    </form>
                </div>

            </section>

        </>
    )
}

export default Login