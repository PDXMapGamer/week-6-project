import "./ShopArea.css";
import upgrades from "../lib/upgrades.json";
import Griditem from "./Griditem";
import UpgradeContainer from "./UpgradeContainer";
export default function ShopArea() {
  const shopArea = document.getElementById("shop-area");
  shopArea.style.gridTemplateRows = `repeat(${upgrades.length + 1}, 1fr)`;
  // console.log(shopArea);
  // upgrades.map((upgrade) => {
  //   console.log(upgrade.name);
  // });
  return (
    <section id="shop-area">
      <Griditem gridContent="Name:" />
      <Griditem gridContent="Cost:" />
      <Griditem gridContent="Income:" />
      <Griditem gridContent="Buy Button:" />
      {upgrades.map((upgrade) => {
        return (
          <>
            <UpgradeContainer id={upgrade.id} name={upgrade.name} cost={upgrade.cost} increase={upgrade.increase} />
          </>
        );
      })}
    </section>
  );
}
