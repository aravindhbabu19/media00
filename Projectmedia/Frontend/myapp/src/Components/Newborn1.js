import React from 'react'

const Newborn1 = ({newBorn}) => {
  return (
    <div class='col-12 col-sm-6 col-lg-3 col-md-4 my-4 baby1-div d-flex justify-content-center'>
    <img src= {newBorn.images[0].image} alt='' class='img-fluid baby-img'  />
    </div>
  )
}

export default Newborn1