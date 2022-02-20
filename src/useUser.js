import {useState, useEffect} from "react"
import axios from 'axios'

export const useUser = (userId) => {
    const [user, setUser]= useState(null)

    useEffect(() => {
        axios.get(`/users/${userId}`)
        .then(res => setUser(res.data))

    }, [userId])

    return user
}
