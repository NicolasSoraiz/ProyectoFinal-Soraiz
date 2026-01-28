import { useParams, useNavigate } from "react-router";
import { useEffect, useState, useContext } from "react";
import ProductDetail from "./ProductDetail";
import { getDetail } from "../firebase/db"
import { CartContext } from "../context/CartContext"

function ProductDetailContainer() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { addItem } = useContext(CartContext)

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        setError(null)

        getDetail(id)
            .then(prod => setProduct(prod))
            .catch(err => {
                console.error(err);
                setError("Producto no encontrado")
            })
            .finally(() => setLoading(false))
        }, [id]);

        const handleAddToCart = (quantity) => {
            addItem(product, quantity)
        }

        if (loading) {
            return ( 
                <p className="text-center text-white mt-10">
                    Cargando producto...
                </p> 
            )
        }

        if (error) {
            return (
                <div className="text-center text-white mt-10">
                    <p className="text-xl mb-4">{error}</p>
                    <button
                        onClick={() => navigate("/")}
                        className="bg-green-500 text-black px-6 py-2 rounded hover:bg-green-400 transition"
                    >
                        Volver al inicio
                    </button>
                </div>
            )
        }

        const handleAdd = (quantity) => {
            addItem(product, quantity)
        }

        return (
            <ProductDetail 
            product={product}
            onAdd={handleAddToCart}
        />
    )
}

export default ProductDetailContainer