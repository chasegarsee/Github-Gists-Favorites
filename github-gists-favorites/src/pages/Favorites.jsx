import React, { useContext } from 'react'
import { GitContext } from "../context/context"
import { Container, Card, Row, Col, Button } from "react-bootstrap"
import { Star } from "react-feather"
import GistCode from "../components/GistCode"
import { useIndexedDB } from "react-indexed-db"
import "./styles.css"

export default function Favorites() {
    const { favoritedGists, updateStateFromLocalDatabase} = useContext(GitContext)
    const { deleteRecord } = useIndexedDB("gists")

    const handleDelete = async (e) => {
      await deleteRecord(e).then(() => {
        console.log("deleted id: ", e)
        updateStateFromLocalDatabase()
      })
    }
  
    
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
                  <Button
                    id="favorite"
                    variant="outline-warning"
                    onClick={() => { handleDelete(gist.id) }}
                    >
                    <Star 
                        color="gold"
                        fill="gold" 
                        className="clear-button"
                        />
                  </Button>
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
