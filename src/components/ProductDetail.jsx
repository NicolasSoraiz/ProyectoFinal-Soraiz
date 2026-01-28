import { useState } from "react"
import { Link } from "react-router"
import ItemCount from "./ItemCount"
import ProductInfo from "./ProductInfo"

function ProductDetail({ product, onAdd }) {
    const [added, setAdded] = useState(false)

    const handleAdd = (quantity) => {
        onAdd(quantity)
        setAdded(true)
    }

    return (
        <div className="p-6 max-w-5xl mx-auto text-white">
            <div className="flex flex-col md:flex-row gap-8">

                <div className="md:w-1/2 flex justify-center">
                    <img
                        src={product.url}
                        alt={product.name}
                        className="w-full max-h-96 object-contain"
                    />
                </div>

                <div className="md:w-1/2 flex flex-col gap-4">

                    <ProductInfo product={product} />

                    {!added ? (
                        <ItemCount 
                            stock={product.stock ?? 10} 
                            onAdd={handleAdd}
                        />
                    ) : (
                        <div className="flex gap-4 mt-4">
                            <Link
                                to="/"
                                className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 transition cursor-pointer"
                            >
                                Seguir comprando
                            </Link>

                            <Link
                                to="/cart"
                                className="bg-green-500 text-black px-4 py-2 rounded hover:bg-green-400 transition cursor-pointer"
                            >
                                Ir al carrito
                            </Link>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}

export default ProductDetail