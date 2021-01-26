import React, { useState, createContext, useEffect } from "react"
import { useIndexedDB } from "react-indexed-db"
import mockUser from "../context/mockData/mockUser"
import mockGists from "./mockData/mockGists"
import fetchGists from "../utilities/fetchRequests/fetchGists"

const GitContext = createContext()

const GithubProvider = ({ children }) => {
    const [githubUser, setGithubUser] = useState(mockUser)
    const [gists, setGists] = useState(mockGists)
    const [favoritedGists, setFavoritedGists] = useState([])
    const [showToast, setShowToast] = useState(true)
    const [error, setError] = useState("")


    const { getAll } = useIndexedDB("gists")

    const updateStateFromLocalDatabase = async () => {
      const favoritedIDBResult = await getAll()
      setFavoritedGists(favoritedIDBResult)
    }

    console.log({ favoritedGists })
  
    useEffect(() => {
      updateStateFromLocalDatabase()
    }, [])


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
            error, setError,
            favoritedGists, setFavoritedGists,
            showToast, setShowToast,
            updateStateFromLocalDatabase
          }}
        >
          {children}
        </GitContext.Provider>
      )
    }
    
    export { GithubProvider, GitContext }