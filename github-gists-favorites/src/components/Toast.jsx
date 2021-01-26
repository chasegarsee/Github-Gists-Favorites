import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { GitContext } from "../context/context"
import { Toast } from "react-bootstrap"
import "./styles.css"

export default function ToastComp() {
  const { showToast, setShowToast } = useContext(GitContext)
  return (
    <div
      className="toast-container"
      aria-live="polite"
      aria-atomic="true"
    >
      <Toast
        className="toast"
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={5000}
        autohide
      >
        <Toast.Header>
          <strong className="mr-auto">Score!</strong>
        </Toast.Header>
        <Toast.Body>New Gist Added To  <Link to="/favorites">Favorites</Link></Toast.Body>
      </Toast>
    </div>
  )
}