import { useContext, useState } from "react"
import { useNavigate } from "react-router"
import { CartContext } from "../context/CartContext"
import CartList from "./CartList"
import CheckoutForm from "./CheckoutForm"
import { createOrder } from "../firebase/db"

function CartContainer () {
    const {
        cart,
        totalQuantity,
        totalPrice,
        removeItem,
        clearCart
    } = useContext(CartContext)

    const navigate = useNavigate()

    const [buyer, setBuyer] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        if (name === "phone") {
            if (!/^\d*$/.test(value)) return
            if (value.length > 11) return
        }

        setBuyer(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!buyer.name || !buyer.email || !buyer.phone || !buyer.address) {
            alert("Por favor completa todos los campos")
            return
        }

        const order = {
            buyer,
            items: cart,
            total: totalPrice
        }

        try {
            const orderId = await createOrder(order) 

            clearCart()
            alert(`Gracias por tu compra 🙌\nOrden: ${orderId}`)
            navigate("/")
        } catch (error) {
            console.error("Error al crear la orden", error)
            alert("Hubo un error al procesar la compra")
        }
    }

    if (cart.length === 0) {
    return (
        <div className="flex flex-col items-center justify-center text-white mt-16 gap-6">
            <p className="text-2xl">
                El carrito está vacío 🛒
            </p>

            <button
                onClick={() => navigate("/")}
                className="bg-green-500 text-black font-semibold px-6 py-2 rounded hover:bg-green-400 transition cursor-pointer"
            >
                Volver al inicio
            </button>
        </div>
    )
}

    return (
        <div className="max-w-6xl mx-auto p-6 text-white">
            <h1 className="text-3xl font-bold mb-6">
                Carrito
            </h1>

            <div className="flex flex-col md:flex-row gap-8">
                <CartList cart={cart} removeItem={removeItem} />

                <CheckoutForm
                    buyer={buyer}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    totalQuantity={totalQuantity}
                    totalPrice={totalPrice}
                    clearCart={clearCart}
                    navigate={navigate}
                />
            </div>
        </div>
    )
}

export default CartContainer