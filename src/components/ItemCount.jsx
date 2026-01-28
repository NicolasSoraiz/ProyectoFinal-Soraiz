import { useState } from "react";

function ItemCount({ stock = 0, onAdd }) {
    const [count, setCount] = useState(1);

    const increment = () => {
        if (count < stock) setCount(count + 1);
    }

    const decrement = () => {
        if (count > 1) setCount(count - 1);
    }

    if (stock === 0) {
        return (
            <p className="mt-6 text-red-400 font-semibold">
                Sin stock disponibles
            </p>
        )
    }

    return (
        <div className="flex flex-col items-center gap-4 mt-6">
            <div className="flex items-center gap-4">
                <button 
                    onClick={decrement}
                    disabled={count === 1}
                    className="px-3 py-1 bg-gray-700 text-white rounded cursor-pointer"
                >
                    -
                </button>

                <span className="text-xl font-bold">{count}</span>

                <button 
                    onClick={increment}
                    disabled={count === stock}
                    className="px-3 py-1 bg-gray-700 text-white rounded cursor-pointer"
                >
                    +
                </button>
            </div>

            <button
                onClick={() => onAdd(count)}
                className="bg-green-500 text-black font-semibold px-6 py-2 rounded hover:bg-green-400 transition cursor-pointer"
            >
                Agregar al carrito
            </button>
        </div>
    )
}

export default ItemCount