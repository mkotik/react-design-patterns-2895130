import {useState, useEffect} from "react"
import axios from 'axios'

export const useDataSource = (getResourceFunc) => {
    const [resource, setResource]= useState(null)

    useEffect(() => {
        setResource(getResourceFunc())

    }, [getResourceFunc])

    return resource
}
