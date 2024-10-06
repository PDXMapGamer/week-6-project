export default function Buybutton(props) {
  const { onBuyButtonClick } = props;
  function onBuy() {
    console.log(`This upgrade will cost ${props.price} and will increase income by ${props.increase}`);
    onBuyButtonClick(props.price, props.increase);
  }
  return (
    <button className="buy-button" onClick={onBuy}>
      Buy
    </button>
  );
}
