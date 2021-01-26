import React from 'react'
import UserSearch from "../components/UserSearch"
import UserInfo from "../components/UserInfo"
import { Container, Row } from "react-bootstrap"
import Gists from '../components/Gists'
import "./styles.css"

export default function Dashboard() {
    return (
      <>
      <Container className="mb-3 mt-3 user-container">
        <Row className="justify-content-md-center">
          <UserSearch />
        </Row>
        <Row className="justify-content-md-center">
          <UserInfo />
        </Row>
      </Container>
      <Gists />
      </>
    )
}
