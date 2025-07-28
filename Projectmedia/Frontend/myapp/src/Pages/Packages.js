import React from 'react'

const Packages = () => {
  return (
    <div>
        <div class='packages-div'></div>
        {/* <img src='./Images/Media/pack.jpg' class='packages-div' /> */}
        <h1 class='pack-h1 d-flex justify-content-center mt-4'>Packages</h1>
        <div class='row pack-br d-flex justify-content-center mt-5 ms-1 pb-4'>
          <h4 class='pack-h4 mt-4 d-flex justify-content-center'>Package one</h4>
          <div class='col-12 col-sm-12 col-md-12 col-lg-6 mt-3'>
            <p class='pack-p d-flex justify-content-center'>includes 8 hours of photography<br></br> complimentary engagement shoot<br></br> online gallery for sharing<br></br>professional editing.</p>
          </div>
          <div class='col-12 col-sm-12 col-md-12 col-lg-6 mt-3 d-flex justify-content-center'>
            <img src='./Images/Media/pen.jpg' alt='' height={120} width={120} class='me-2'/>
            <img src='./Images/Media/album.jpg' alt='' height={120} width={120}/>
          </div>
        </div>
        <div class='row pack-br d-flex justify-content-center ms-1 pb-4 mt-4'>
          <h4 class='pack-h4 mt-4 d-flex justify-content-center'>Package Two</h4>
          <div class='col-12 col-sm-12 col-md-12 col-lg-6 mt-3'>
            <p class='pack-p d-flex justify-content-center'>includes 10 hours of photography<br></br>complimentary engagement shoot<br></br> online gallery for sharing<br></br> professional editing.</p>
          </div>
          <div class='col-12 col-sm-12 col-md-12 col-lg-6 mt-3 d-flex justify-content-center'>
            <img src='./Images/Media/pen.jpg' alt='' height={100} width={100} class='me-2'/>
            <img src='./Images/Media/album.jpg' alt='' height={100} width={100}/>
            <img src='./Images/Media/calendar.jpg' alt='' height={100} width={100}/>
          </div>
        </div>
        <div class='row pack-br d-flex justify-content-center ms-1 pb-4 mt-4'>
          <h4 class='pack-h4 mt-4 d-flex justify-content-center'>Package Three</h4>
          <div class='col-12 col-sm-12 col-md-12 col-lg-6 mt-3'>
            <p class='pack-p d-flex justify-content-center'>includes 12 hours of photography<br></br> a second photographer<br></br> complimentary engagement shoot<br></br> online gallery for sharing<br></br> professional editing.</p>
          </div>
          <div class='col-12 col-sm-12 col-md-12 col-lg-6 mt-3 d-flex justify-content-center'>
            <img src='./Images/Media/pen.jpg' alt='' height={80} width={80} class='me-2'/>
            <img src='./Images/Media/album.jpg' alt='' height={80} width={80}/>
            <img src='./Images/Media/calendar.jpg' alt='' height={80} width={80}/>
            <img src='./Images/Media/clock.jpg' alt='' height={80} width={80} />
          </div>
        </div>
              {/* <h4 class='pack-h4 ms-5 mt-5 p-2'>Package Three: </h4>
              <p class='pack-p'>includes 12 hours of photography<br></br> a second photographer<br></br> complimentary engagement shoot<br></br> online gallery for sharing<br></br> professional editing.</p>
              <img src='./Images/Media/pen.jpg' alt='' height={120} width={120} class='pack-imag'/>
              <img src='./Images/Media/album.jpg' alt='' height={120} width={120} class='pack-imag1'/>
              <img src='./Images/Media/coffee.jpg' alt='' height={120} width={120} class='pack-imag11'/>
              <img src='./Images/Media/clock.jpg' alt='' height={120} width={120} class='pack-imag12'/> */}
    </div>
  )
}

export default Packages