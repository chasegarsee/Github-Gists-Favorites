import React, { useState } from "react"
import ReactGist from "../utilities/ReactGist"
import { Button } from "react-bootstrap"


export default function GistCode({ gistId }) {
    const [minimize, setMinimize] = useState(true)
  
  return (
    <>
      <ReactGist className={minimize ? "minimize" : ""} id={gistId} />
      <Button variant="info" onClick={() => setMinimize(!minimize)}>
        {minimize ? "View" : "Hide"}
      </Button>
    </>
  )
}
