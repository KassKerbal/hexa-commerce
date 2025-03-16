
## Estructura del Proyecto

```
HEXA-COMMERCE/
├── public/
├── src/
│   ├── adapters
│   |   └──ProductAdapter.js 
│   ├── application
|   |   ├── GetProductById.js
|   |   ├── GetProducts.js
│   |   └── productRepositoryPort.js
│   ├── core
│   |   └── Product.js
│   ├── infrastructure
│   |   └── ProductApiRepository.js
│   |   └── store/
│   |       ├── filterSlice.js
│   |       ├── productSelector.js
│   |       ├── productsSlice.js
│   |       ├── productsThunks.js
│   |       └── store.js
│   ├── ui
|   |   ├── components
|   |   |   ├── Navbar.jsx
|   |   |   ├── ProductCard.jsx
│   |   |   └── Sidebar.jsx
│   |   └── pages
|   |       ├── ProductDetail.jsx
│   |       └── ProductList.jsx
|   ├── App.jsx
|   ├── index.css
|   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── LICENSE
├── package-lock.json
├── package.json
├── vite.config.js
└── README.md
```

---