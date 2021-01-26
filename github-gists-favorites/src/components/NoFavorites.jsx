import React from 'react'
import { Container, Jumbotron, Button, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
export default function NoGists() {
    return (
        <Container className="vh-100 justify-content-md-center">
            <Row align="center" className="h-100 justify-content-md-center align-items-center">
                <Col>
                    <Jumbotron>
                        <p>Looks like you dont have any favorite gists. Find your new favorites by seaching for a Github username</p>
                        <Link to="/">
                            <Button variant="info">Search Github Users</Button>
                        </Link>
                    </Jumbotron>    
                </Col> 
            </Row>
        </Container>
    )
}