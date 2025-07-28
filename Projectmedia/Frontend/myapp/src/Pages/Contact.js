import React, { useState } from 'react'
import axios from 'axios';
import {  FaInstagram, FaPhoneAlt } from 'react-icons/fa'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Contact = () => {
    const [first,setFirst]=useState("")
    const [last,setLast]=useState("")
    const [contact,setContact]=useState("")
    const [email,setEmail]=useState("")
    const [message,setMessage]=useState("")
   
  
    const handleSubmit=(e)=>{
      e.preventDefault()
      axios.post('http://localhost:3500/api/v1/form',{first,last,email,contact,message})
      .then((result)=>{
          console.log(result)
          toast.success("your Data Register Successfully")
      }
      
  )
      .catch(err=>console.log(err))
  } 
  return (
    <div>
        <div class='contact-div'></div>
        {/* <img src='./Images/Media/cam2.jpg' class='about-div ms-1' /> */}
        <div class='contact-br'>
            <div class='row'>
                <div class='col-12 col-sm-12 col-md-12 col-lg-4 mt-5 d-flex justify-content-center'>
                    <p class='contact-head'>Contact Us:</p>
                </div>
                <div class='col-12 col-sm-12 col-md-12 col-lg-4 mt-5 d-flex justify-content-center'>
                    <p class='contact-cl1'><FaPhoneAlt/> +91 123 456 7890</p>
                </div>
                <div class='col-12 col-sm-12 col-md-12 col-lg-4 mt-5 d-flex justify-content-center'>
                  <Link class='text-decoration-none text-dark' to={'https://www.instagram.com/rs_media_1/'}>
                    <p class='contact-inst1'><FaInstagram/> rsmedia</p>
                  </Link>
                </div>
            </div>
            <div class='row'>
                <div class='col-12 col-sm-12 col-md-12 col-lg-6 my-5'>
                    <form class='contact-form ' onSubmit={handleSubmit}>
                        <label class='form-label'>First Name</label>
                        <input type="text" required='true' name='nam' class='form-control' placeholder='Enter Your First Name' size="50" value={first} onChange={(e)=>setFirst(e.target.value)} />
                        <label class='form-label'>Last Name</label>
                        <input type="text" required='true' name='nam' class='form-control' placeholder='Enter Your Last Name' size="50" value={last} onChange={(e)=>setLast(e.target.value)} />
                        <label class='form-label'>Contact No</label>
                        <input type="text" required='true' name='cont' class='form-control' placeholder='Enter Your Contact No' size="50" value={contact} onChange={(e)=>setContact(e.target.value)} />
                        <label class='form-label'>Email</label> 
                        <input type="text" required='true' name='ema' class='form-control' placeholder='Enter Your Email' size="50" value={email} onChange={(e)=>setEmail(e.target.value)} />
                        <label class='form-label'>Message</label>
                        <textarea rows='5' required='true' cols='50' name='mess' class='form-control' value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                        <button type='submit'  class='btn btn-success mt-3'>Submit</button>
                    </form>
                </div>
                <div class='col-12 col-sm-12 col-md-12 col-lg-6 mt-5 d-flex justify-content-center pt-5'>
                    <img src='./Images/Media/cam.jpg' alt='' height={360} width={360}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact