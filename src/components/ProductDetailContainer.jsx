import { useParams } from "react-router";
import { useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";

function ProductDetailContainer() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
        .catch(err => console.error(err));
    }, [id]);

    const HandleAddToCart = (quantity) => {
        console.log("Producto:", product);
        console.log("Cantidad:", quality);
    };

    if (!product) {
        return ( 
            <p className="text-center text-white mt-10">
                Cargando producto...
            </p> 
        );
    }

    return (
        <ProductDetail 
        product={product}
        onAdd={HandleAddToCart}
        />
    );
}

export default ProductDetailContainer;