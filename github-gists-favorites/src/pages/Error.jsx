import React from 'react'
import { Container, Jumbotron, Button, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
export default function Error() {
    return (
        <Container className="vh-100 justify-content-md-center">
            <Row align="center" className="h-100 justify-content-md-center align-items-center">
                <Col>
                    <Jumbotron>
                        <h1>404</h1>
                        <p>Sorry! The page you are looking for cannot be found.</p>
                        <Link to="/">
                            <Button variant="info">Go back</Button>
                        </Link>
                    </Jumbotron>    
                </Col> 
            </Row>
        </Container>
    )
}
