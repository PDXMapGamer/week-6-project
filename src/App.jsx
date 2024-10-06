import { useState, useEffect } from "react";
import Title from "./components/Title";
import Options from "./components/Options";
import GameArea from "./components/GameArea";
import ShopArea from "./components/ShopArea";
export default function App() {
  //TODO: We need 2 states to store yen and yen per second interval, useState.
  const [currentMoney, setCurrentMoney] = useState(0);
  const [income, setIncome] = useState(0);
  const onBoxClick = () => {
    setCurrentMoney(currentMoney + 1);
    save();
  };
  const onBuyButtonClick = (upgradeCost, incomeIncrease) => {
    if (currentMoney < upgradeCost) {
      console.log("Can not afford.");
    } else {
      setCurrentMoney(currentMoney - upgradeCost);
      setIncome(income + incomeIncrease);
      save();
    }
  };
  function save() {
    //TODO SAVE TO LOCAL STORAGE
  }
  //TODO: we need an interval managed by useEffect.
  useEffect(
    () => {
      const incomePerSecondInterval = setInterval(() => {
        setCurrentMoney(currentMoney + income);
        save();
      }, 1000);
      return () => {
        clearInterval(incomePerSecondInterval);
      };
    },
    [currentMoney, income]

    //TODO ON DIFFERANT PAGE: give upgrades some logic.
  );
  return (
    <>
      <Title />
      <Options />
      <GameArea currentMoney={currentMoney} income={income} onBoxClick={onBoxClick} />
      <ShopArea currentMoney={currentMoney} income={income} onBuyButtonClick={onBuyButtonClick} />
    </>
  );
}
