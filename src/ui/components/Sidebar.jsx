import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setPriceRange, setRating } from '../../infrastructure/store/filtersSlice';
import { selectFilteredProducts } from '../../infrastructure/store/productSelector';

const categories = [
    "all",
    "men's clothing",
    "women's clothing",
    "jewelery",
    "electronics",
];

const stars = [5, 4, 3, 2, 1];

const Sidebar = () => {
    const dispatch = useDispatch();
    const [isRate, setRate] = useState(stars)

    const handleCategoryChange = (e) => {
        dispatch(setCategory(e.target.value));
    };

    const handlePriceChange = (e) => {
        dispatch(setPriceRange({
            min: 0,
            max: Number(e.target.value),
        }));
    };

    useEffect(() => {
        dispatch(setRating(isRate));
        console.log(isRate)
    }, [isRate])

    const handleRatingChange = (e) => {
        if (!e.target.checked) {
            const rate = isRate.filter(element => element !== Number(e.target.value));
            setRate(rate)
        } else setRate([...isRate, Number(e.target.value)])
    };

    return (
        <aside className="fixed top-16 left-0 bottom-0 w-64 bg-white shadow-lg p-6 overflow-y-auto">
            {/* Filtro por Categorías */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Categories</h3>
                <ul className="space-y-2">
                    {categories.map(
                        (category) => (
                            <li key={category}>
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        name='category'
                                        className="form-checkbox h-4 w-4 text-indigo-600 rounded"
                                        value={category}
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
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Price</h3>
                <div className="space-y-4">
                    <input
                        type="range"
                        min="0"
                        max="600€"
                        className="w-full"
                        defaultValue={600}
                        onChange={handlePriceChange}
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                        <span>0€</span>
                        <span>600€</span>
                    </div>
                </div>
            </div>

            {/* Filtro por Valoración */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Valoración</h3>
                <ul className="space-y-2">
                    {stars.map((rating) => (
                        <li key={rating}>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-4 w-4 text-indigo-600 rounded"
                                    value={rating}
                                    onChange={handleRatingChange}
                                    defaultChecked
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
        </aside>
    );
}

export default Sidebar;