import "./ShopArea.css";
import upgrades from "../lib/upgrades.json";
import Griditem from "./Griditem";
import Buybutton from "./Buybutton";
import ShopHeader from "./ShopHeader";
import React from "react";
export default function ShopArea(props) {
  const { onBuyButtonClick } = props;
  // const shopArea = document.getElementById("shop-area");
  // shopArea.style.gridTemplateRows = `repeat(${upgrades.length + 1}, 1fr)`;
  // Previous code apparently uneccessary and randomly caused the website to just not load so will be left ommited.
  return (
    <section id="shop-area">
      <ShopHeader />
      {upgrades.map((upgrade) => {
        return (
          <React.Fragment key={upgrade.id}>
            {/* Google how to put key in fragments */}
            <Griditem gridContent={upgrade.name} />
            <Griditem gridContent={upgrade.cost} />
            <Griditem gridContent={upgrade.increase} />
            <Buybutton price={upgrade.cost} increase={upgrade.increase} onBuyButtonClick={onBuyButtonClick} />
          </React.Fragment>
        );
      })}
    </section>
  );
}
