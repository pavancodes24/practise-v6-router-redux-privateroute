import { useSelector } from "react-redux";

export const Cart = () => {
  const counter = useSelector((state) => state.counter);
  return (
    <div>
      <h1>Cart count: {counter}</h1>
    </div>
  );
};
