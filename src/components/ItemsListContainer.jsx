import { useEffect, useState } from "react";
import { withLoading } from "../hoc/withLoading";
import { useParams } from "react-router";
import ItemList from "./ItemList";

const ItemListWithLoading = withLoading(ItemList)

function ItemsListContainer({ greeting }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { category } = useParams()

    useEffect(() => {
        setLoading(true);
        const url = category
            ? `https://dummyjson.com/products/category/${category}`
            : `https://dummyjson.com/products`;
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    setProducts(data.products || []);
                    setLoading(false);
                })
                .catch(error => {
                    console.error(error);
                    setLoading(false);
                });
        }, [category]);

    return (
        <ItemListWithLoading
            isLoading={loading}
            greeting={greeting}
            products={products}
        />
    );
}

export default ItemsListContainer