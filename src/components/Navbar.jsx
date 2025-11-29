import CarWidget from "./CartWidget";

function Navbar () {
    return (
        <header className="text-white bg-green-700 p-2 flex justify-between items-center">
            <h1 className="text-3xl">Digital Market</h1>
            <nav className="flex justify-center gap-6 mt-1 ">
                <a href="" className="bg-green-800 px-3 py-2 rounded-md rounded hover:bg-green-600 transition">Procesadores</a>
                <a href="" className="bg-green-800 px-3 py-2 rounded-md rounded hover:bg-green-600 transition">Memorias Ram</a>
                <a href="" className="bg-green-800 px-3 py-2 rounded-md rounded hover:bg-green-600 transition">Tarjetas Graficas</a>
                <a href="" className="bg-green-800 px-3 py-2 rounded-md rounded hover:bg-green-600 transition">Tarjetas SSD</a>
            </nav>
            <button className="bg-green-900 text-white px-3">
                <CarWidget count={3} />
            </button>
        </header>
    );
}
export default Navbar
