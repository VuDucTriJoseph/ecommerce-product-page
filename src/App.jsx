import { ProductProvider } from "./context/ProductContext";

import LightBox from "./component/LightBox";
import Header from "./sections/Header";
import ProductImg from "./component/ProductImg";
import ProductDetail from "./component/ProductDetal";

function App() {
  return (
    <ProductProvider>
      <main className="main">
        <Header />
        <section className="product">
          <ProductImg />
          <ProductDetail />
        </section>
        <LightBox />
      </main>
    </ProductProvider>
  );
}

export default App;
