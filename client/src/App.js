import Signup from "./components/Singup/Signup";
import Loginfoam from "./components/Login/Login1";
import ProductPage from "./components/ProductPage";
import HomeScreen from "./components/HomeScreen";
import CategoryPage from "./components/CategoryPage/Categories";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import AddProduct from "./components/AddProduct";
import Navbar from "./components/navbar/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminRoutes from "./components/AdminRoutes";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "./utils";
import store from "./store/Store";
import Cart from "./components/Cart1";

function App() {
  const [resultdata, setResultdata] = useState([]);
  const { account, connect, disconnect } = useContext(AppContext);
  console.log(resultdata, "app rwsult");

  useEffect(() => {
    if (!account) {
      connect();
    }
  }, [connect, account]);

  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          {/* <Navbar /> */}
          <Navbar getresult={setResultdata} />
          <button onClick={connect}>connect</button>
          <p>{account}</p>
          {/* <Register /> */}
          <Routes>
            <Route path="/register" element={<Signup />} />
            <Route path="/login" element={<Loginfoam />} />

            <Route
              path="/"
              element={<HomeScreen dataOfResult={resultdata} />}
            />
            <Route
              path="/categoryPage/:category"
              element={<CategoryPage dataOfCategory={resultdata} />}
            />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/admin-dashbord/*" element={<AdminRoutes />} />
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>

          {/* <Footer /> */}
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
