import { useEffect, useState } from "react";
import Navbar from "./Navbar";

function NavbarContainer() {
    const [categories, setCategories] = useState([]);
        useEffect(() => {
        fetch('https://dummyjson.com/products/category-list')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error));
    }, []);
    return <Navbar categories={categories} /> 
}

export default NavbarContainer;