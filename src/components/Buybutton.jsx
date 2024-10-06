export default function Buybutton(props) {
  const { onBuyButtonClick } = props;
  function onBuy() {
    onBuyButtonClick(props.price, props.increase);
  }
  return (
    <button className="buy-button" onClick={onBuy}>
      Buy
    </button>
  );
}
