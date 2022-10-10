// import Register from "./components/Singup/Register";
// import Login from "./components/Login/Login";
import Signup from "./components/Singup/Signup";
import Loginfoam from "./components/Login/Login1";
import ProductPage from "./components/ProductPage";
import HomeScreen from "./components/HomeScreen";
import CategoryPage from "./components/CategoryPage/Categories";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FlashSale from "./components/FlashSale/FlashSale";
import AddProduct from "./components/AddProduct";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

import AdminRoutes from "./components/AdminRoutes";
function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Navbar /> */}

        <Routes>
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Loginfoam />} />
          <Route path="/" element={<HomeScreen />} />
          <Route path="/categoryPage/:category" element={<CategoryPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/admin-dashbord/*" element={<AdminRoutes />} />
        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
