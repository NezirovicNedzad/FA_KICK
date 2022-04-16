import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import './menu.css'

const CarouselzaObjekte = () => {
    return (
        <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 fluid"
            src="/images/teren.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>Dobrodošli</h1>
            <h3>Ovo je naš glavni trenažni centar!</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 fluid"
            src="/images/internat.jpg"
            alt="Second slide"
         
          />
      
          <Carousel.Caption>
          <h1>Naš internat</h1>
                    <h3>Internat je u mogućnosti da primi preko 1000 članova</h3>
           
          </Carousel.Caption>


        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 fluid"
            src="/images/teretana.jpg"
            alt="Third slide"
            
            
          />
      
          <Carousel.Caption>
          
          <h1 >Naši pomoćni objekti</h1>
       
       <h3>U sklopu kampa se nalazi i teretana</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
}

export default CarouselzaObjekte
