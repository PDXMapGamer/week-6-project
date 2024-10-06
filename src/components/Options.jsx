import "./Options.css";

export default function Options(props) {
  const { onReset } = props;
  const { onOption } = props;
  const { onShop } = props;

  return (
    <div id="options">
      <button className="options-button" onClick={onShop}>
        🏪
      </button>
      <button className="options-button" onClick={onOption}>
        ⚙️
      </button>
      <button className="options-button" onClick={onReset}>
        ⟳
      </button>
    </div>
  );
}
