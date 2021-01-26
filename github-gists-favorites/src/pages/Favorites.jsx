import React, { useContext } from 'react'
import { GitContext } from "../context/context"
import { Container, Card, Row, Col } from "react-bootstrap"
import { Star } from "react-feather"
import GistCode from "../components/GistCode"
import "./styles.css"

export default function Favorites() {
    const { favoritedGists } = useContext(GitContext)
    
    return (
    <Container className="mt-3">
      <Row md="auto" sm="1" xs="1">
        {favoritedGists.map((gist, key) => (
          <Col key={key}>
            <Card className="mb-4" key={key}>
              <Card.Header>
                <Row className="justify-content-between">
                  <Card.Title>{gist.filename}</Card.Title>
                  <Card.Text>
                    <Star
                      color="gold"
                      fill="gold"
                      size={25}
                    />
                  </Card.Text>
                </Row>
              </Card.Header>
              <Card.Body>
                <GistCode gistId={gist.id} />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    )
}
