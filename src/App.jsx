import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './ui/pages/ProductList';
import ProductDetail from './ui/pages/ProductDetail';
import Sidebar from './ui/components/Sidebar';
import Navbar from './ui/components/Navbar';

const App = () => {

  return (
    <>
      <Navbar/>
      <Sidebar />
      <Router>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;