import { useState } from "react";
import { Link } from "react-router";

function Dropdown({ items = [] }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setOpen(!open)}
                className="bg-green-900 text-white px-4 py-2 rounded"
            >
                categorias
            </button>

            {open && items.length > 0 && (
                <ul className="absolute mt-2 w-48 bg-black border border-green-500 rounded shadow-lg">
                    {items.map(item => (
                        <li key={item}>
                            <Link
                                to={`/category/${item}`}
                                className="block px-4 py-2 text-white hover:bg-white/10 transition-colors duration-150 cursor-pointer"
                                onClick={() => setOpen(false)}
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Dropdown;