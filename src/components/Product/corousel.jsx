import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './product.css'

const Corousel = () => {
  return (
    <div className='container' >
      <Carousel className='carousel-cha'>
        <Carousel.Item>
          <img src="https://plus.unsplash.com/premium_photo-1669927131902-a64115445f0f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJlYXV0aWZ1bCUyMGNpdHl8ZW58MHx8MHx8fDA%3D" alt="..." />
         
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://cdn.pixabay.com/photo/2016/11/23/15/32/pedestrians-1853552_640.jpg" alt="..." />
         
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?cs=srgb&dl=pexels-peng-liu-169647.jpg&fm=jpg" alt="..." />
          </Carousel.Item>
      </Carousel>
    </div>



  )
}

export default Corousel
