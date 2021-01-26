import React, { useContext } from 'react'
import { GitContext } from "../context/context"
import { useIndexedDB } from "react-indexed-db"
import { Container, Card, Row, Col, Button } from "react-bootstrap"
import { Star } from "react-feather"
import GistCode from './GistCode'

export default function Gists() {
    const { gists, favoritedGists, updateStateFromLocalDatabase, setShowToast  } = useContext(GitContext)

    const { add } = useIndexedDB("gists")

    const handleFavorite = (filename, id) => {
      if (favoritedGists.some((fav) => fav.id === id)) {
      } else {
        add({ filename, id }).then((res) => {
          setShowToast(true)
          return res
        })
        updateStateFromLocalDatabase()
      }
    }

    
    return (
    <Container>
      <Row md="auto" sm="1" xs="1">
        {gists.map((gist, key) => (
          <Col key={key}>
            <Card className="mb-4">
              <Card.Header>
                <Row className=" justify-content-between">
                  <Card.Title>{Object.values(gist.files)[0].filename}</Card.Title> 
                  <Button
                    id="favorite"
                    disabled={favoritedGists.some((fav) => fav.id === gist.id)}
                    variant="outline-warning"
                    onClick={() => {
                      handleFavorite(Object.values(gist.files)[0].filename, gist.id)
                    }}
                  >
                      <Star
                        fill={favoritedGists.some((fav) => fav.id === gist.id) ? "gold" : "none"}
                        className="clear-button"
                      />
                    </Button>
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
