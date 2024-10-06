import Griditem from "./Griditem";

export default function ShopHeader() {
  return (
    <>
      <Griditem gridContent="Name:" />
      <Griditem gridContent="Cost:" />
      <Griditem gridContent="Income:" />
      <Griditem gridContent="Buy Button:" />
    </>
  );
}
