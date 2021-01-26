import React, { useState, createContext, useEffect } from "react"
import mockUser from "../context/mockData/mockUser"

const GitContext = createContext()

const GithubProvider = ({ children }) => {
    const [githubUser, setGithubUser] = useState(mockUser)


    return (
        <GitContext.Provider
          value={{
            githubUser,
            setGithubUser
          }}
        >
          {children}
        </GitContext.Provider>
      )
    }
    
    export { GithubProvider, GitContext }