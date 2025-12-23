import { useState } from "react";

function ItemCount({ stock = 10, onAdd = () => {} }) {
    const [count, setCount] = useState(1);

    const increment = () => {
        if (count < stock) setCount(count + 1);
    };

    const decrement = () => {
        if (count > 1) setCount(count - 1);
    };

    return (
        <div className="flex flex-col items-center gap-4 mt-6">
            <div className="flex items-center gap-4">
                <button
                    onClick={decrement}
                    className="px-3 py-1 bg-gray-700 text-white rounded"
                >
                    -
                </button>

                <span className="text-xl font-bold">{count}</span>

                <button
                    onClick={increment}
                    className="px-3 py-1 bg-gray-700 text-white rounded"
                >
                    +
                </button>
            </div>

            <button
                onClick={() => onAdd(count)}
                className="bg-green-500 text-black font-semibold px-6 py-2 rounded hover:bg-green-400 transition"
            >
                Agregar al carrito
            </button>
        </div>
    );
}

export default ItemCount;