import React from 'react'
import profilepic from "../images/profilePic.jfif"

const About = () => {
    return (
        <>

            <div className='container'>
                <form method=''>
                    <div className='rowContainer'>
                        <div >
                            <img src={profilepic} alt="profile image" />
                            <p>Social Media pages</p>
                            <a href="https://www.youtube.com/channel/UCVccwd1qTgmdGub9JsIei4w/featured" target='_blank'>Youtube</a><br />
                            <a href="https://www.instagram.com/hodor_boy/" target='_blank'>Instagram</a><br />
                            <a href="https://www.facebook.com/sahil.mehta.39948856/" target='_blank'>Facebook</a><br />
                            <a href="https://www.linkedin.com/in/sahil-mehta-74b681160/" target='_blank'>LinkedIn</a><br />
                            <a href="https://github.com/SahilM1998" target='_blank'>GitHub</a><br />
                        </div>

                        <div className='rowContainer'>
                            <div className='profileDetails'>
                                <h5>Sahil Mehta</h5>
                                <h6>Developer</h6>
                                <p className='rating'>Rating : 0/10</p>

                                <ul className='nav nav-tabs' role='tablist'>
                                    <li className='nav-item'>
                                        <a className='nav-link active' id='home-tab' data-toggle='tab' href="#home" role='tab'>About</a>
                                    </li>

                                    <li className='nav-item'>
                                        <a className='nav-link active' id='profile-tab' data-toggle='tab' href="#profile" role='tab'>Timeline</a>
                                    </li>

                                </ul>

                            </div>

                            <div>
                                <div className='tab-pane fade show active' id='home' role='tabpanel' aria-aria-labelledby='home-tab'>
                                    <div>
                                        <label>User ID</label><br />
                                        <p>28e82235932598</p>
                                    </div>
                                    <div>
                                        <label>Name</label><br />
                                        <p>Sahil Mehta</p>
                                    </div>
                                    <div>
                                        <label>Phone number</label><br />
                                        <p>3389289382389</p>
                                    </div>
                                    <div>
                                        <label>Email id</label><br />
                                        <p>abcd@gameil.com</p>
                                    </div>

                                </div>

                                <div className='tab-pane fade show active' id='profile' role='tabpanel' aria-aria-labelledby='home-tab'>
                                    <div>
                                        <label>Projects</label><br />
                                    </div>
                                    <div>
                                        <label>Experience</label><br />

                                    </div>

                                </div>


                            </div>

                        </div>

                        <div className='eBtn'>
                            <input type="submit" name="editBtn" id="editBtn" value='Edit Profile' />
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}

export default About