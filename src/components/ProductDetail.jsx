import ItemCount from "./ItemCount";

function ProductDetail({ product, onAdd }) {
        return (
        <div className="p-6 max-w-4xl mx-auto">
            <img 
                src={product.images?.[0] || product.thumbnail}
                alt={product.title}
                className="w-full max-h-96 object-contain mb-6"
            />
            <h1 className="text-3xl font-bold mb-4">
                {product.title}
            </h1>
            <p className="mb-4">
                {product.description}
            </p>
            <p className="text-2xl text-green-400 font-bold">
                ${product.price}
            </p>
            <ItemCount stock={product.stock} onAdd={onAdd} />
        </div>
    );
}

export default ProductDetail