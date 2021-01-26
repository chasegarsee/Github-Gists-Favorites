import React, { useState, createContext, useEffect } from "react"
import mockUser from "../context/mockData/mockUser"

const GitContext = createContext()

const GithubProvider = ({ children }) => {
    const [githubUser, setGithubUser] = useState(mockUser)
    const [error, setError] = useState("")


    return (
        <GitContext.Provider
          value={{
            githubUser, setGithubUser,
            error, setError
          }}
        >
          {children}
        </GitContext.Provider>
      )
    }
    
    export { GithubProvider, GitContext }