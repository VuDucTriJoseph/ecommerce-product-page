function NextButton({ customClass = "" }) {
  return (
    <div className={`nextBTN ${customClass}`}>
      <div className="nextBTN__icon">
        <div className="nextBTN__icon-previous"></div>
      </div>
      <div className="nextBTN__icon">
        <div className="nextBTN__icon-next"></div>
      </div>
    </div>
  );
}
export default NextButton;
