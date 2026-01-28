import { useState } from "react";
import { Link } from "react-router";

function Dropdown({ items = [] }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative">
            <button
                aria-expanded={open}
                onClick={() => setOpen(!open)}
                className="bg-green-900 text-white px-4 py-2 rounded cursor-pointer hover:bg-green-900 transition"
            >
                categorías
            </button>

            {open && items.length > 0 && (
                <ul className="absolute mt-2 w-48 bg-black border border-green-500 rounded shadow-lg">
                    {items.map(cat => (
                        <li key={cat}>
                            <Link
                                to={`/category/${cat}`}
                                className="block px-4 py-2 text-white hover:bg-white/10 transition-colors duration-150 cursor-pointer"
                                onClick={() => setOpen(false)}
                            >
                                {cat}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Dropdown