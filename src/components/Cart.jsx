function Cart({ cart, removeItem }) {
    return (
        <div>
            {cart.map(prod => (
                <div
                    key={prod.id}
                    className="border-b border-gray-600 py-4"
                >
                    <h4 className="font-semibold">{prod.name}</h4>
                    <p>Cantidad: {prod.quantity}</p>
                    <p>${prod.price}</p>

                    <button
                        onClick={() => removeItem(prod.id)}
                        className="text-red-500 mt-2"
                    >
                        Eliminar
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Cart