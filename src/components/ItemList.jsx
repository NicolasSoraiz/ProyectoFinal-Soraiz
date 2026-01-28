import ProductCard from "./ProductCard";

function ItemList({ greeting, products = [] }) {
        return (
            <div className="p-6 text-center">
                {greeting && (
                    <p className="text-2xl">
                        {greeting}
                    </p>
                )}
            
            {products.length === 0 ? (
                <p className="text-gray-400 mt-6">
                    No hay productos
                </p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                    {products.map(product => (
                        <ProductCard 
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default ItemList