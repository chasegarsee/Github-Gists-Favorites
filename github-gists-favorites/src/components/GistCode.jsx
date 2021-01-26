import React from "react"
import ReactGist from "../utilities/ReactGist"


export default function GistCode({ gistId }) {
  
  return (
    <>
      <ReactGist id={gistId} />
    </>
  )
}
