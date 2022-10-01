import Categories from "./components/Categories/Categories";
import DarazMall from "./components/DarazMall/DarazMall";
import ProductPage from "./components/ProductPage";

import CategoryPage from "./components/CategoryPage/Categories";
function App() {
  return (
    <div>
      <ProductPage />
      <CategoryPage />
      <DarazMall />
      <Categories />
    </div>
  );
}

export default App;
