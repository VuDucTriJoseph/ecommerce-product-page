import Button from "./component/Button";
import Cart from "./component/Cart";
import LightBox from "./component/LightBox";
import Quantitybox from "./component/QuantityBox";
import Thumbnails from "./component/Thumbnails";
import { ProductProvider } from "./context/ProductContext";
import Header from "./sections/Header";

function App() {
  return (
    <ProductProvider>
      <main className="main">
        <Header />
        <div className="text_componnent">
          <LightBox />
        </div>
      </main>
    </ProductProvider>
  );
}

export default App;
