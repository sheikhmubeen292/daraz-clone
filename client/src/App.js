import Categories from "./components/Categories/Categories";
import DarazMall from "./components/DarazMall/DarazMall";
import ProductPage from "./components/ProductPage";
import Navbar from "./components/navbar/navbar";
import Slider from "./components/slider/Slider";
import CategoryPage from "./components/CategoryPage/Categories";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FlashSale from "./components/FlashSale/FlashSale";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div>
      {/* <Navbar />
      <Slider />
      <ProductPage />
      <CategoryPage />
      <DarazMall />
      <Categories /> */}

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Slider />
                <FlashSale />
                <DarazMall />
                <Categories />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/categoryPage/:category"
            element={<CategoryPage />}
          ></Route>
          <Route path="/product/:id" element={<ProductPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
