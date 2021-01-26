import React, { useContext, useState } from "react"
import { GitContext } from "../context/context"
import { Row, Button, Form, InputGroup } from "react-bootstrap"
import "./styles.css"
import searchGithubUsers from "../utilities/fetchRequests/searchGithubUsers"

export default function UserSearch() {
  const { error, setError, setGithubUser } = useContext(GitContext)
  const [user, setUser] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (user) searchGithubUsers({ user, setError, setGithubUser })
  }

  return (
    <Form style={{ width: "18rem" }} onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicSearch">
        <Row>
          <InputGroup>
            <Form.Control
              value={user}
              onChange={(e) => setUser(e.target.value)}
              type="text"
              placeholder="Search for a github user"
            />
            <Button
              size="sm"
              className="search-button"
              disabled={!user}
              variant="info"
              type="submit"
            >
              Submit
            </Button>
          </InputGroup>
          {error && <Form.Text className="text-danger">{error}</Form.Text>}
        </Row>
      </Form.Group>
    </Form>
  )
}
