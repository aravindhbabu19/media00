import React from 'react'

const Baby1 = ({baby}) => {
  return (
    <div class='col-12 col-sm-6 col-lg-3 col-md-4 my-4 baby1-div d-flex justify-content-center'>
        <img src= {baby.images[0].image} alt='' class='img-fluid baby-img'  />
    </div>
  )
}

export default Baby1