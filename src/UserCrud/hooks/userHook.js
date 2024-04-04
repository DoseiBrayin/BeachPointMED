import {getUser} from '../../API/UserApi/User'
import {useEffect} from 'react'
import { useState } from 'react'

export function useUser() {
    const [user, setUser] = useState([])
    useEffect(() => {
        getUser().then((response) => {
            setUser(response.data)
        })
    }, [])
    return user
}

export function useModal() {
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)
    return { modal, toggle }
}