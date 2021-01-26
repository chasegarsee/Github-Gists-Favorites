import React, {useContext} from 'react'
import {GitContext} from '../context/context'

export default function Dashboard() {
    const {githubUser} = useContext(GitContext)
    return (
        <div>
            <h1>Dashboard</h1>
            <h1>{githubUser.name}</h1>
        </div>
    )
}
