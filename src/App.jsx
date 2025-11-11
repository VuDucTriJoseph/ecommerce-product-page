import Button from "./component/Button";
import Quantitybox from "./component/QuantityBox";
import Header from "./sections/Header";

function App() {
  return (
    <main className="main">
      <Header />
      <div className="text_componnent">
        <Button />
        <Quantitybox />
      </div>
    </main>
  );
}

export default App;
