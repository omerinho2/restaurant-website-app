import React from 'react';
import BannerImage from '../assets/2blackbean.jpg';

function Contact() {
    return (
        <div className='contact'>
            <div className='leftSide' style={{backgroundImage:`url(${BannerImage})`}}></div>
            <div className='rightSide'>
                <h1> Contact Us</h1>
                <form id='contact-form'>
                    <label htmlFor='name'>Full Name</label>
                    <input name='name' placeholder='Enter full name...' type='text' />
                    <label htmlFor='email'>Email</label>
                    <input name='email' placeholder='Enter an email...' type='email' />
                    <label htmlFor='message'>full name</label>
                    <textarea name='name' placeholder='Enter ful name...' type='text' ></textarea>
                    <button type='submit'>Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
