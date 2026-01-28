import { useEffect, useState } from "react"
import Navbar from "./Navbar"
import { getCategories } from "../firebase/db"

function NavbarContainer () {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
            .then(cat => setCategories(cat))
            .catch(err => console.error(err))
    }, [])

    return (
        <Navbar categories={categories}  />
    )
}

export default NavbarContainer