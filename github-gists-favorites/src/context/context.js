import React, { useState, createContext, useEffect } from "react"
import mockUser from "../context/mockData/mockUser"
import mockGists from "./mockData/mockGists"

const GitContext = createContext()

const GithubProvider = ({ children }) => {
    const [githubUser, setGithubUser] = useState(mockUser)
    const [gists, setGists] = useState(mockGists)
    const [error, setError] = useState("")


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