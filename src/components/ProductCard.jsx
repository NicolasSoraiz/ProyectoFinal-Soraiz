import { useNavigate } from "react-router";

function ProductCard( {product }) {
    const navigate = useNavigate()
    return (
        <div className="bg-black border-2 border-green-500 rounded-lg p-4 shadow-lg text-white flex flex-col">
            <img 
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-40 object-contain bg-black rounded mb-3"
                />

                <h3 className="text-lg font-semibold mb-1">
                    {product.title}
                </h3>

                <p className="text-green-400 font-bold mb-4">
                    ${product.price}
                </p>

                <button
                    className="mt-auto bg-green-500 text-black font-semibold py-2 rounded hover:bg-green-400 transition"
                    onClick={() => navigate(`/Product/${product.id}`)}
                >
                    Ver mas
                </button>
        </div>
    );
}

export default ProductCard;