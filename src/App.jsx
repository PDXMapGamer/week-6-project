import { useState, useEffect } from "react";
import Title from "./components/Title";
import Options from "./components/Options";
import GameArea from "./components/GameArea";
import ShopArea from "./components/ShopArea";
export default function App() {
  const clickSoundEffect = new Audio("../public/audio/button_sfx.mp3");
  const LsoundEffect = new Audio("../public/audio/unallowed.wav");
  const coinSoundEffect = new Audio("../public/audio/coindrop.wav");
  const parsedMoney = JSON.parse(localStorage.getItem("money"));
  const parsedIncome = JSON.parse(localStorage.getItem("income"));
  const [currentMoney, setCurrentMoney] = useState(parsedMoney);
  const [income, setIncome] = useState(parsedIncome);
  const [soundOn, setSoundOn] = useState(true);
  const onBoxClick = () => {
    setCurrentMoney(currentMoney + 1);
    checkSound("money");
    save();
  };
  const onBuyButtonClick = (upgradeCost, incomeIncrease) => {
    if (currentMoney < upgradeCost) {
      checkSound("buzzer");
    } else {
      setCurrentMoney(currentMoney - upgradeCost);
      checkSound("click");
      setIncome(income + incomeIncrease);
      save();
    }
  };
  function checkSound(soundType) {
    if (soundOn) {
      switch (soundType) {
        case "money":
          coinSoundEffect.play();
          break;
        case "click":
          clickSoundEffect.play();
          break;
        case "buzzer":
          LsoundEffect.play();
          break;
      }
    }
  }
  function save() {
    const storedMoney = JSON.stringify(currentMoney);
    const storedIncome = JSON.stringify(income);
    localStorage.setItem("money", storedMoney);
    localStorage.setItem("income", storedIncome);
  }
  useEffect(() => {
    const incomePerSecondInterval = setInterval(() => {
      setCurrentMoney(currentMoney + income);
      save();
    }, 1000);
    return () => {
      clearInterval(incomePerSecondInterval);
    };
  }, [currentMoney, income]);
  return (
    <>
      <Title />
      <Options />
      <GameArea currentMoney={currentMoney} income={income} onBoxClick={onBoxClick} />
      <ShopArea currentMoney={currentMoney} income={income} onBuyButtonClick={onBuyButtonClick} />
    </>
  );
}
