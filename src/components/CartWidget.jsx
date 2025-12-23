import { useNavigate } from "react-router";

function CarWidget({ count = 0}) {
    const navigate = useNavigate()

    return (
        <button
            onClick={() => navigate("/cart")}
            className="relative inline-flex items-center text-white"
        >
            <span>Carrito 🛒</span>

            {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                    {count}
                </span>
            )}
        </button>
    );
}

export default CarWidget
