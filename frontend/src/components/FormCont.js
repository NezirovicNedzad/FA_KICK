import React from 'react'
import { Col,Row,Container } from 'react-bootstrap'
const FormCont = ({children}) => {
    return (
     <Container style={{height:'80vh',paddingTop:'100px'}}>
         <Row className="justify-content-md-center">

         <Col style={{padding:"0.3rem 1.7rem"}}  xs={12} md={6}>
             {children}
        </Col>
         </Row>
     </Container>
    )
}

export default FormCont
