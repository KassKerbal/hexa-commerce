const Navbar = () => {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo y Título */}
            <div className="flex items-center space-x-4">
              <img
                src="/logo.png" // Ruta de tu logo
                alt="Logo"
                className="h-8 w-auto"
              />
              <h1 className="text-xl font-bold text-gray-900">Ecommerce Hexagonal Architecture</h1>
            </div>
  
            {/* Barra de Búsqueda */}
            <div className="flex-1 max-w-lg mx-4">
              <input
                type="text"
                placeholder="Buscar productos..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
  
            {/* Menú de Usuario (opcional) */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-indigo-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  export default Navbar;