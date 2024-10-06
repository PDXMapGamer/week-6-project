import Griditem from "./Griditem";
import Buybutton from "./Buybutton";
import "./UpgradeContainer.css";

export default function UpgradeContainer(props) {
  const propArray = [props.name, props.cost, props.increase];
  propArray.map((gridItem) => {
    console.log(gridItem);
  });

  return (
    <>
      <Griditem gridContent={props.name} />
      <Griditem gridContent={props.cost} />
      <Griditem gridContent={props.increase} />
      <Buybutton price={props.cost} increase={props.increase} />
    </>
  );
}
