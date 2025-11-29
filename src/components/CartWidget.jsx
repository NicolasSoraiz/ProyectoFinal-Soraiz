function CarWidget({ count = 0}) {
    return (
        <span className="relative inline-flex items-center">
            <span>Carrito 🛒</span>
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                {count}
            </span>
        </span>
    );
}

export default CarWidget
