import reimu from "../../public/images/reimu.png";
import donationBox from "../../public/images/donationbox.png";
import "./GameArea.css";

export default function GameArea(props) {
  const { onBoxClick } = props;
  return (
    <section id="game-area">
      <section id="stats">
        <p>Money: {props.currentMoney}¥</p>
        <p>Income: {props.income}¥/s</p>
      </section>
      <img id="reimu" src={reimu} alt="cute anime girl" />
      <img id="donation-box" src={donationBox} alt="Click to make donation" onClick={onBoxClick} />
    </section>
  );
}
