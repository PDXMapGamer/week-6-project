import reimu from "../../public/images/reimu.png";
import donationBox from "../../public/images/donationbox.png";
import "./GameArea.css";

export default function GameArea() {
  return (
    <div id="game-area">
      <img id="reimu" src={reimu} alt="cute anime girl" />
      <img id="donation-box" src={donationBox} alt="Click to make donation" />
    </div>
  );
}
