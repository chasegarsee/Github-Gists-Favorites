import React, { useContext } from "react"
import { GitContext } from "../context/context"
import { Card, Image } from "react-bootstrap"
import "./styles.css"

export default function UserInfo() {
  const { githubUser } = useContext(GitContext)

  console.log({ githubUser })
  return (
    <Card style={{ width: "20rem" }} className="text-center">
      <Card.Header>
        <Image className="text-center profile-image" src={githubUser.avatar_url} roundedCircle />
        <Card.Title className="profile">{githubUser.name}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>{githubUser.company}</Card.Text>
        <Card.Text>{githubUser.location}</Card.Text>
        <Card.Text>Public Gists: {githubUser.public_gists}</Card.Text>
      </Card.Body>
    </Card>
  )
}
