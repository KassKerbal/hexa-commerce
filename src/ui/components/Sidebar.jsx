import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { 
  setCategory,
  resetFilters
} from '../../infrastructure/store/filtersSlice';

const Sidebar = () => {

    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.products);
    const filters = useSelector((state) => state.filters);

      const handleCategoryChange = (e) => {
        dispatch(setCategory(e.target.value));
      };
      
    return (
        <aside className="fixed top-16 left-0 bottom-0 w-64 bg-white shadow-lg p-6 overflow-y-auto">
            {/* Filtro por Categorías */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Categorías</h3>
                <ul className="space-y-2">
                    {["Electrónica", "Ropa", "Hogar", "Deportes", "Juguetes"].map(
                        (category) => (
                            <li key={category}>
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 text-indigo-600 rounded"
                                        onChange={handleCategoryChange}
                                    />
                                    <span className="text-gray-700">{category}</span>
                                </label>
                            </li>
                        )
                    )}
                </ul>
            </div>

            {/* Filtro por Precio */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Precio</h3>
                <div className="space-y-4">
                    <input
                        type="range"
                        min="0"
                        max="1000"
                        className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                        <span>0€</span>
                        <span>1000€</span>
                    </div>
                </div>
            </div>

            {/* Filtro por Valoración */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Valoración</h3>
                <ul className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                        <li key={rating}>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-4 w-4 text-indigo-600 rounded"
                                />
                                <span className="text-gray-700">
                                    {Array(rating)
                                        .fill()
                                        .map((_, i) => (
                                            <span key={i} className="text-yellow-400">★</span>
                                        ))}
                                </span>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Botón de Aplicar Filtros */}
            <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
                Aplicar Filtros
            </button>
        </aside>
    );
}

export default Sidebar;