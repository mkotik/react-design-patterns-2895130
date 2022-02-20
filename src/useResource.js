import {useState, useEffect} from "react"
import axios from 'axios'

export const useResource = (resourceUrl) => {
    const [resource, setResource]= useState(null)

    useEffect(() => {
        axios.get(resourceUrl)
        .then(res => setResource(res.data))

    }, [resourceUrl])

    return resource
}
