function CartList({ cart, removeItem }) {
    return (
        <div className="md:w-1/2 flex flex-col gap-4">
            {cart.map(item => (
                <div
                    key={item.id}
                    className="flex items-center gap-4 bg-black border border-gray-700 p-4 rounded hover:border-green-500 transition"
                >
                    <img
                        src={item.url}
                        alt={item.name}
                        className="w-24 h-24 object-contain"
                    />

                    <div className="flex flex-col flex-1">
                        <h4 className="font-semibold">
                            {item.name}
                        </h4>
                        <p>Cantidad: {item.quantity}</p>
                        <p className="text-green-400 font-bold">
                            ${item.price}
                        </p>
                    </div>

                    <button
                        onClick={() => removeItem(item.id)}
                        className="border border-red-500 text-red-400 hover:bg-red-500/10 px-4 py-2 rounded-lg transition cursor-pointer"
                    >
                        Eliminar
                    </button>
                </div>
            ))}
        </div>
    )
}

export default CartList