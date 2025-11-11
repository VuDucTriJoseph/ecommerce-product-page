function Quantitybox() {
  return (
    <div className="quantityBox">
      <button className="quantityBox_btn">
        <div className="quantityBox_btn-minus"></div>
      </button>
      <span className="quantityBox_text text-pre-3--bold">0</span>
      <button className=" quantityBox_btn">
        <div className="quantityBox_btn-plus"></div>
      </button>
    </div>
  );
}

export default Quantitybox;
