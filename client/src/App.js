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
        <Routes>
          {/* <Route path="/" element={<HomeScreen />} render={props => currentUser ? (
                  <HomeScreen {...props} currentUser={currentUser}/>
                ) : (
                  <Navigate to="/login" />
                )
              }
            /> */}
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Loginfoam />}></Route>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route
            path="/categoryPage/:category"
            element={<CategoryPage />}
          ></Route>
          <Route path="/product/:id" element={<ProductPage />}></Route>
          <Route path="/addproduct" element={<AddProduct />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
