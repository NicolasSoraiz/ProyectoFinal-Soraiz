function CheckoutForm({
    buyer,
    handleChange,
    handleSubmit,
    totalQuantity,
    totalPrice,
    clearCart,
    navigate
}) {
    return (
        <div className="md:w-1/2 bg-black border border-green-500 p-6 rounded">
            <h2 className="text-2xl mb-4">
                Datos para la compra
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">

                <input
                    type="text"
                    name="name"
                    placeholder="Nombre y apellido"
                    value={buyer.name}
                    onChange={handleChange}
                    className="p-2 bg-gray-800 rounded"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={buyer.email}
                    onChange={handleChange}
                    className="p-2 bg-gray-800 rounded"
                />

                <input
                    type="tel"
                    name="phone"
                    placeholder="Teléfono (11 digitos)"
                    value={buyer.phone}
                    onChange={handleChange}
                    inputMode="numeric"
                    maxLength={11}
                    className="p-2 bg-gray-800 rounded"
                />

                <input
                    type="text"
                    name="address"
                    placeholder="Dirección de envío"
                    value={buyer.address}
                    onChange={handleChange}
                    className="p-2 bg-gray-800 rounded"
                />

                <div className="mt-4 flex flex-col gap-3">
                    <p>Total de productos: {totalQuantity}</p>
                    <p className="text-green-400 font-bold text-xl">
                        Total: ${totalPrice}
                    </p>

                    <div className="flex gap-3">
                        <button
                            type="button"
                            onClick={clearCart}
                            className="flex-1 border border-red-500 text-red-400 hover:bg-red-500/10 py-2 rounded transition cursor-pointer"
                        >
                            Vaciar carrito
                        </button>

                        <button
                            type="button"
                            onClick={() => navigate("/")}
                            className="flex-1 border border-gray-400 text-gray-300 hover:bg-gray-400/10 py-2 rounded transition cursor-pointer"
                        >
                            Volver al inicio
                        </button>
                    </div>
                </div>

                <button
                    type="submit"
                    className="mt-4 bg-green-500 text-black font-semibold py-2 rounded hover:bg-green-400 transition cursor-pointer"
                >
                    Finalizar compra
                </button>
            </form>
        </div>
    )
}

export default CheckoutForm