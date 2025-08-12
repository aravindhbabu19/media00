import axios from 'axios';
import React, { useState } from 'react'
import { FaFacebook, FaGoogle, FaInstagramSquare, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
const Footer = () => {

  const [number,setNumber]=useState("")
  const [rating,setRating]=useState(null)
  const [ratecolor,setColor]=useState(null)

   const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3500/api/v1/rating',{number})
        .then((result)=>{
            console.log(result)
            toast.success("your Data Register Successfully")
        }
        
    )
        .catch(err=>console.log(err))
    }


  return (
    <div class='tok text-white'>
      <div class='row pt-3'>
        <div class='col-12 col-sm-12 col-md-12 col-lg-4 my-2'>
            <h4 class='pages-h'>Address</h4>
            <p class='pages-p'>Perumalpuram</p>
            <p class='pages-p'>KanyaKumari 629000</p>
            <h4 class='pages-h'>Email</h4>
            <p class='pages-p'>rsmedia@gmail.com</p>
        </div>
        {/* <div class='col-12 col-sm-12 col-md-12 col-lg-4 mt-2'>
            <h4 class='d-flex justify-content-center'>Rate Us</h4>
            <div class='d-flex justify-content-center'>
                <div class='ratings mt-auto'>
                <div class='rating-outer'>
                <div class='rating-inner'><button class=''><FaStar /></button></div>
                </div>
                </div>
            </div>
            <>
              <div class='d-flex justify-content-center'>
            {
              [...Array(5)].map((star, index)=>{
                const currentRate=index+1
                return(
                  <>
                   <label>
                    <input class='rate' type='radio' name='rate' value={currentRate} onClick={()=>setRating(currentRate)}/>
                    <FaStar size={25} color={currentRate <= (ratecolor||rating)? "orange" : "grey"} />
                    </label>
                  </>

                )
               
              })
           
        }
            </div>
            </>
            
            <div class='col d-flex justify-content-center mt-5'>
              <p>+91 123 456 7890</p>
            </div>
        </div> */}
          {/* <div class='col-12 col-sm-12 col-md-12 col-lg-4 d-flex justify-content-center'>
            <Link to='https://www.facebook.com/'><FaFacebook class='icon-1 mx-3' type='button'/></Link>
            <Link to='https://www.google.com/'><FaGoogle class='icon-2 mx-3' type='button'/></Link>
            <Link to='https://www.instagram.com/rs_media_1/'><FaInstagramSquare class='icon-3 mx-3' type='button'/></Link>
          </div> */}
         <div class='col-12 col-sm-12 col-md-12 col-lg-4 mt-2'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15799.639442158485!2d77.5345228968429!3d8.110660535294915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04edcecf473c35%3A0x7bbfa795b65efe5c!2sRs%20Media%20Studio!5e0!3m2!1sen!2sin!4v1754993167318!5m2!1sen!2sin" width="300" height="300" title='add' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
      </div>
    </div>
  )
}

export default Footer
