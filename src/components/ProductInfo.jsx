function ProductInfo({ product }) {
    return (
        <>
            <h1 className="text-3xl font-bold">
                {product.name}
            </h1>

            <p className="text-gray-300">
                {product.description}
            </p>

            <p className="text-2xl text-green-400 font-bold">
                ${product.price}
            </p>
        </>
    )
}

export default ProductInfo