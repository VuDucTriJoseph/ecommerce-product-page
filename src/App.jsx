import { ProductProvider } from "./context/ProductContext";

import LightBox from "./component/LightBox";
import Header from "./sections/Header";
import ProductImg from "./component/ProductImg";

function App() {
  return (
    <ProductProvider>
      <main className="main">
        <Header />
        <section className="product">
          <ProductImg />
        </section>
        <LightBox />
      </main>
    </ProductProvider>
  );
}

export default App;
