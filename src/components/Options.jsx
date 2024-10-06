import "./Options.css";

export default function Options() {
  function onShopClick() {
    console.log("Shop button clicked");
  }
  function onOptionsClick() {
    console.log("Option button clicked");
  }
  function onResetClick() {
    console.log("Restart button clicked");
  }

  return (
    <div id="options">
      <button className="options-button" onClick={onShopClick}>
        🏪
      </button>
      <button className="options-button" onClick={onOptionsClick}>
        ⚙️
      </button>
      <button className="options-button" onClick={onResetClick}>
        ⟳
      </button>
    </div>
  );
}
