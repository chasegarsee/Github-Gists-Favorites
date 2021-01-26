import React, { useState, createContext, useEffect } from "react"
import mockUser from "../context/mockData/mockUser"
import mockGists from "./mockData/mockGists"
import fetchGists from "../utilities/fetchRequests/fetchGists"

const GitContext = createContext()

const GithubProvider = ({ children }) => {
    const [githubUser, setGithubUser] = useState(mockUser)
    const [gists, setGists] = useState(mockGists)
    const [error, setError] = useState("")


  useEffect(() => {
    if (githubUser) {
      fetchGists({ githubUser, setGists })
    }
  }, [githubUser])

    return (
        <GitContext.Provider
          value={{
            githubUser, setGithubUser,
            gists, setGists,
            error, setError
          }}
        >
          {children}
        </GitContext.Provider>
      )
    }
    
    export { GithubProvider, GitContext }