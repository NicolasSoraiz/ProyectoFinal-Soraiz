import { useContext } from "react"
import { useNavigate } from "react-router"
import { CartContext } from "../context/CartContext"

function CartWidget() {
    const navigate = useNavigate()
    const { totalQuantity } = useContext(CartContext)

    return (
        <button
            aria-label="Ira al carrito"
            onClick={() => navigate("/cart")}
            className="relative bg-green-900 text-white px-4 py-2 rounded cursor-pointer hover:bg-green-900 transition"
        >
            <span>Carrito 🛒</span>

            {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                    {totalQuantity > 99 ? "99+" : totalQuantity}
                </span>
            )}
        </button>
    )
}

export default CartWidget