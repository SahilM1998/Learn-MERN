import React from 'react'

const Contact = () => {
    return (
        <>



            <div className='mainConatiner'>
                <div className='pContainer'>
                    <div>Phone number</div>
                    <div>1234567879</div>
                </div>

                <div className='pContainer'>
                    <div>Email ID</div>
                    <div>abcd@gmail.com</div>
                </div>

                <div className='pContainer'>
                    <div>Address</div>
                    <div>Amravati Maharashtra India</div>
                </div>

            </div>

            <section className='container'>

                <div className='detailsContainer'>
                    <div className='dc'>
                        <input type="text" id='name' className='name' placeholder='Your name' required='true' />
                        <br />
                        <input type="email" id='email' className='email' placeholder='Your email' required='true' />
                        <br />
                        <input type="number" id='phone' className='phone' placeholder='Your contact number' required='true' />
                        <br />

                    </div>

                    <div className='textmeassage'>
                        <textarea name="textareaMessage" placeholder='Your Meassage' cols="30" rows="10"></textarea>


                    </div>

                    <div className='btncontainer'>
                        <button type="submit">Send Message</button>
                    </div>


                </div>



            </section>

        </>
    )
}

export default Contact