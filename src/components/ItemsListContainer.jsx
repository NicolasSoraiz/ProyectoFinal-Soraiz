import { useEffect, useState } from "react"
import { useParams } from "react-router"
import ItemList from "./ItemList"
import { withLoading } from "../hoc/withLoading"
import { getProducts, getProductsByCategory } from "../firebase/db"

const ItemListWithLoading = withLoading(ItemList)

function ItemsListContainer({ greeting }) {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { category } = useParams()

    useEffect(() => {
        setLoading(true);

        const fetch = category
            ? getProductsByCategory(category)
            : getProducts()

        fetch
            .then(setProducts)
            .catch(console.error)
            .finally(() => setLoading(false))

        }, [category])

    return (
        <ItemListWithLoading
            isLoading={loading}
            greeting={greeting ? greeting : ""}
            products={products}
        />
    )
}

export default ItemsListContainer