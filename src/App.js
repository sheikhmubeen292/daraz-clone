import Categories from "./components/Categories/Categories";
import DarazMall from "./components/DarazMall/DarazMall";
import ProductPage from "./components/ProductPage";
import Navbar from "./components/navbar/navbar";
import Slider from './components/slider/Slider'
import CategoryPage from "./components/CategoryPage/Categories";
function App() {
  return (
    <div>
      <Navbar />
      <Slider />
      <ProductPage />
      <CategoryPage />
      <DarazMall />
      <Categories />
    </div>
  );
}

export default App;
