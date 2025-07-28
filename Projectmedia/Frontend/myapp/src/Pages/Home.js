import React, { useState } from 'react'

import axios from 'axios'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const Home = () => {
    const [name,setName]=useState("")
    const [mobile,setMobile]=useState("")
    const [date,setDate]=useState("")
    const [message,setMessage]=useState("")
    
   
  
    const handleSubmit=(e)=>{
      e.preventDefault()
      axios.post('http://localhost:3500/api/v1/applicationpath',{name,mobile,date,message})
      .then((result)=>{
          console.log(result)
          toast.success("your Data Register Successfully")
      }
      
  )
      .catch(err=>console.log(err))
  }
  return (
   
   
    <div>
        <div class='home-div1'></div>
        {/* <img src='./Images/Media/cam1.jpg' alt='' class='home-div1' /> */}
        <h2 class='home-head mt-3 ms-2'>Get The best photoshoot in Kanyakumari</h2>
        <h5 class='home-head1'>Book photoshoot in bangalore to experience moments of joy with beautiful styles from Conceptual, Candid and Lifestyle. </h5>
        <div class='home-ph mt-5'>
          <div class='row my-5 mx-5'>
              <div class='col-12 col-sm-6 col-lg-4 col-md-4 d-flex justify-content-center'>
              <Link class='text-decoration-none text-dark' to={'/baby'}>
              <img src='./Images/Media/baby.jpg' alt='' height={300} width={300} class='home-img'/>
              <h5 class='home-head2 ms-1'>Baby Photoshoot</h5>
              </Link> 
              </div>
              <div class='col-12 col-sm-6 col-lg-4 col-md-4 d-flex justify-content-center'>
              <Link class='text-decoration-none text-dark' to={'/Couples'}>
              <img src='./Images/Media/couples.jpg' alt='' height={300} width={300} class='home-img1'/>
              <h5 class='home-head3 ms-1'>Couples Photoshoot</h5>
              </Link>
              </div>
              <div class='col-12 col-sm-6 col-lg-4 col-md-4 d-flex justify-content-center'>
              <Link class='text-decoration-none text-dark' to={'/Family'}>
              <img src='./Images/Media/family.jpg' alt='' height={300} width={300} class='home-img2 mb-2'/>
              <h5 class='home-head4 mt-4'>Family Photoshoot</h5>
              </Link>
              </div>
              <div class='row my-5'>
              <div class='col-12 col-sm-6 col-lg-4 col-md-4 d-flex justify-content-center'>
              <Link class='text-decoration-none text-dark' to={'/Maternity'}>
              <img src='./Images/Media/maternity.jpeg' alt='' height={300} width={300} class='home-img3'/>
              <h5 class='home-head5'>Maternity Photoshoot</h5> 
              </Link>
              </div>
              <div class='col-12 col-sm-6 col-lg-4 col-md-4 d-flex justify-content-center'>
              <Link class='text-decoration-none text-dark' to={'/New'}>
              <img src='./Images/Media/newborn.jpg' alt='' height={300} width={300} class='home-img4'/>
              <h5 class='home-head6'>Newborn Photoshoot</h5> 
              </Link>
              </div>
              <div class='col-12 col-sm-6 col-lg-4 col-md-4 d-flex justify-content-center'>
              <Link class='text-decoration-none text-dark' to={'/Matri'}>
              <img src='./Images/Media/matri.jpg' alt='' height={300} width={300} class='home-img5'/>
              <h5 class='home-head7'>Matrimonial Photoshoot</h5> 
              </Link>
              </div>
              </div>
          </div>
        </div>
          <h1 class='home-h'>How every session is unique ?</h1>    
          <div class='row my-5 mx-1 link'>
              <div class='home-col col-12 col-sm-6 col-lg-3 col-md-4 '>
              <h1 class='home-h1'>01</h1> 
              <h2 class='home-h2'>Curated experience</h2>
              </div>
              <div class='home-col col-12 col-sm-6 col-lg-3 col-md-4 '>
              <h1 class='home-h3'>02</h1> 
              <h2 class='home-h4'>Fun filled session</h2>
              </div>
              <div class='home-col col-12 col-sm-6 col-lg-3 col-md-4 '>
              <h1 class='home-h5'>03</h1> 
              <h2 class='home-h6'>Artistic editing</h2>
              </div>
              <div class='home-col col-12 col-sm-6 col-lg-3 col-md-4 '>
              <h1 class='home-h5'>04</h1> 
              <h2 class='home-h6'>Premium Wall Art</h2>
              </div>
          </div>
          <div class='home-br1'>
            <h1 class='home-cl'> In the heart of Kanyakumari</h1>
            <hr></hr>
            <p class='home-para'>Our premium photoshoot Studio in Bangalore allows us to offer curated experience for maternity photoshoot in bangalore, newborn photoshoot , baby photoshoot , couple photoshoot , family photoshoot , matrimonial photoshoot , professional headshots , weddings & event photography and much more...</p>
            <img src='./Images/Media/stud1.jpg' alt='' class='home-back'/>
          </div>
          <div class='home-br2'>
            <h1 class='home-para1'>Premium Photo Frames</h1>
            <hr class='home-hr1'></hr>
            <p class='home-para2'>Our premium photo frames are carved with unique designs and customized with curated prints that gives the vision of true to life as there is no glass or acrylic used. Each print is curated through water and dust resistant process.</p>
          <div class=' row my-5 mx-5'>
            <div class='home-col1 col-12 col-sm-6 col-lg-3 col-md-4 '>
            <img src='./Images/Media/frame.jpg' alt='' height={400} width={250} class='rounded'/>
            </div>
            <div class='home-col2 col-12 col-sm-6 col-lg-3 col-md-4 '>
            <img src='./Images/Media/frame1.jpg' alt='' height={400} width={250} class='rounded'/>
            </div>
            <div class='home-col3 col-12 col-sm-6 col-lg-3 col-md-4 '>
            <img src='./Images/Media/frame2.jpg' alt='' height={400} width={250} class='rounded'/>
            </div>
            <div class='home-col4 col-12 col-sm-6 col-lg-3 col-md-4 '>
            <img src='./Images/Media/frame3.jpg' alt='' height={400} width={250} class='rounded'/>
            </div>
          </div>  
          </div>
          <div class='home-br3 row mt-5 pt-5'>
            <div class='col-12 col-sm-12 col-md-12 col-lg-6'>
              <img src='./Images/Media/call.jpg' alt='' class='home-img0 rounded ms-3 mt-5'/>
            </div>
            <div class='col-12 col-sm-12 col-md-12 col-lg-6 my-5'>
              <h1 class='home-head8'>BOOK NOW</h1>
              <h3 class='home-head9 mt-5'>Call our Kanyakumari Studio to schedule your photoshoot</h3>
              <p class='home-para5 mt-5'>+91 123 456 7890</p>
              <div class='d-flex justify-content-center my-5'>
                <button type="btn" class="btn1 btn-secondary rounded "  data-bs-toggle="modal" data-bs-target="#modalid1">Book Your Session</button>
                {/* <button type="btn" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#modalid1">
                <span>Book Your Session</span>
                </button> */}
              </div>
            </div>
          </div>
          <div class="modal fade  rounded" id="modalid1">
          <div class="modal-dialog">
          <div class="modal-content text-dark" >
              <div class="modal-header">
                <h4>Fill In Below Details For Booking</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal" ></button>
              </div>
              <div class="modal-body rounded">
            <form onSubmit={handleSubmit}>
            <div class="m-3">
              <label for="nam" htmlFor='name' class="form-label" >Name</label>
              <input type="text" required='true' id="nam" name='name' class="form-control" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div class="m-3">
              <label for="ema" htmlFor='ema'  class="form-label">Mobile</label>
              <input type="text" required='true' name='ema' id="ema" class="form-control" placeholder="Enter Mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
            </div>
            <div class="m-3">
              <label for="ema" htmlFor='ema'  class="form-label">Date</label>
              <input type="text" required='true' name='ema' id="ema" class="form-control" placeholder="Enter Date" value={date} onChange={(e)=>setDate(e.target.value)}/>
            </div>
            <textarea rows='5' cols='30' required='true'  name='mess' class='form-control' value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
            <button type="submit" class="btn1 btn-secondary my-3 mx-3 rounded justify-content-end" >Book Now</button>
            </form>
              </div>
          </div>
          </div>
          </div>
    </div>
    
  )
}

export default Home