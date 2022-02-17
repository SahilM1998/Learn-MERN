import React from 'react'
import signimage from "../images/login.svg";
import { NavLink } from 'react-router-dom';

const Signup = () => {
    return (
        <>
            <section className='container'>
                <div className='formData'>
                    <h2>
                        Sign Up
                    </h2>
                    <form>
                        <label htmlFor="name">Name:</label><br /><br />
                        <input type="text" name='name' id='name' autoComplete='off' placeholder='Your name' />
                        <br /><br />

                        <label htmlFor="email">Email:
                        </label><br /><br />
                        <input type="email" name="email" id="email" autoComplete='off' placeholder='Your email' />
                        <br /><br />

                        <label htmlFor="phone"> Number:
                        </label><br /><br />
                        <input type="number" name="phone" id="phone" autoComplete='off' placeholder='Your number' />
                        <br /><br />


                        <label htmlFor="work">Profession:
                        </label><br /><br />
                        <input type="text" name="work" id="work" autoComplete='off' placeholder='Your work details' />
                        <br /><br />

                        <label htmlFor="password">Password:</label><br /><br />
                        <input type="password" name="password" id="password" placeholder='Your password' />
                        <br /><br />

                        <label htmlFor="cpassword">Confirm Password:</label><br /><br />
                        <input type="password" name="cpassword" id="cpassword" placeholder='Confirm password' />
                        <br /><br />

                        <input type="submit" name='signup' id='signup' value="Register" />

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