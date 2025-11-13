import Button from "./component/Button";
import Cart from "./component/Cart";
import Quantitybox from "./component/QuantityBox";
import Thumbnails from "./component/Thumbnails";
import Header from "./sections/Header";

function App() {
  return (
    <main className="main">
      <Header />
      <div className="text_componnent">
        <Cart />
      </div>
    </main>
  );
}

export default App;
