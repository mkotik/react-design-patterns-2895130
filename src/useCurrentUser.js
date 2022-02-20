import {useState, useEffect} from "react"
import axios from 'axios'

export const useCurrentUser = () => {
    const [user, setUser]= useState(null)

    useEffect(() => {
        axios.get("/current-user")
        .then(res => setUser(res.data))

    }, [])

    return user
}
