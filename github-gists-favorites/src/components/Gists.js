import React, {useState, useContext } from 'react'
import { GitContext } from "../context/context"
import { Container, Card, Row, Col } from "react-bootstrap"

export default function Gists() {
    const { gists } = useContext(GitContext)

      console.log({gists})
    return (
    <Container>
      <Row md="auto" sm="1" xs="1">
        {gists.map((gist, key) => (
          <Col key={key}>
            <Card className="mb-4">
              <Card.Header>
                <Row className=" justify-content-between">
                  <Card.Title>{Object.values(gist.files)[0].filename}</Card.Title> 
                </Row>
              </Card.Header>
              <Card.Body>
                {Object.values(gist.files)[0].raw_url}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    )
}
