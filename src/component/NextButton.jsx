import { useProduct } from "../context/useProduct";

function NextButton({ customClass = "" }) {
  const { next, prev } = useProduct();
  return (
    <div className={`nextBTN ${customClass}`}>
      <div className="nextBTN__icon" onClick={prev}>
        <div className="nextBTN__icon-previous"></div>
      </div>
      <div className="nextBTN__icon" onClick={next}>
        <div className="nextBTN__icon-next"></div>
      </div>
    </div>
  );
}
export default NextButton;
