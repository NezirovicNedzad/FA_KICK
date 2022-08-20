import React from 'react'
import { Button} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import { useNavigate } from 'react-router'
import './menu.css'

const Karousel = () => {


  const navigate=useNavigate()

  const usmeri=()=>{
    navigate("/kampovi")
  }
  const objekti=()=>{
    navigate("/objekti")
  }
    return (
        <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 fluid"
            src="/images/adria-crehuet-cano-LIhB1_mAGhY-unsplash.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>Dobrodošli</h1>
            <h3>Poglejdate opcije koje nudimo i budite i vi učesnik!</h3>
            <Button type='button' onClick={()=>usmeri()} className='btn-lg'>
                 Prijavi se!

            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 fluid"
            src="/images/objekti.jpg"
            alt="Second slide"
         
          />
      
          <Carousel.Caption>
            <h1>Upoznajte se bolje sa našim objektima!</h1>
            <h3>Pogledajte sa čime raspolažemo pri našim uslugama.</h3>
            <Button onClick={()=>objekti()} type='button'className='btn-lg'>
                 Pogledaj!

            </Button>
          </Carousel.Caption>


        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 fluid"
            src="/images/potpis.jpg"
            alt="Third slide"
            
            
          />
      
          <Carousel.Caption>
            <h1>Pogledajte potpise naših bivših članova!</h1>
            <h3>Kratke informacije o ugovorima naših biših studenta</h3>
            <Button type='button'className='btn-lg'>
                 Pogledaj!

            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
}

export default Karousel
