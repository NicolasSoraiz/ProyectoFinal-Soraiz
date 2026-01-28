import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function Toast() {
    const { showToast } = useContext(CartContext)

    if (!showToast) return null

    return (
        <div className=" fixed top-6 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 font-semibold">
            🛒 Producto agregado al carrito
        </div>
    )
}

export default Toast