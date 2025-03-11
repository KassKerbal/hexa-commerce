const ProductCard = ({ product }) => {
  return (
    <div className="group relative flex flex-col border border-gray-200 rounded-xl p-3 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white">
      {/* Badge de categoría */}
      <span className="absolute top-2 right-2 bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded-full z-2">
        {product.category}
      </span>
      
      {/* Imagen con efecto hover */}
      <div className="aspect-square w-full rounded-lg overflow-hidden">
        <img 
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 z-1" 
          src={product.image} 
          alt={product.title} 
        />
      </div>

      {/* Contenido */}
      <div className="pt-4 space-y-2">
        <h2 className="text-lg font-bold text-gray-900 truncate">
          {product.title}
        </h2>
        
        <p className="text-gray-600 line-clamp-3 text-sm min-h-[60px]">
          {product.description}
        </p>

        <div className="flex justify-between items-center">
          <p className="text-lg font-extrabold text-gray-900">
            {product.price}€
            <span className="text-sm text-gray-500 font-normal ml-1">IVA incl.</span>
          </p>
          <button className="cursor-pointer bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors text-sm font-semibold">
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;