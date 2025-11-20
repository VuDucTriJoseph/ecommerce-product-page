import LightBox from "./component/LightBox";
import Header from "./sections/Header";
import ProductImg from "./component/ProductImg";
import ProductDetail from "./component/ProductDetal";

function App() {
  return (
    <main className="main">
      <Header />
      <section className="product">
        <ProductImg />
        <ProductDetail />
      </section>
      <LightBox />
    </main>
  );
}

export default App;
