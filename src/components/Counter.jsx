import { useDispatch, useSelector } from "react-redux";
import { decCounter, incCounter } from "../Redux/action";

export const Counter = () => {
  //useselector, dispatch =>react -redux hooks

  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(incCounter(1));
  };
  const handleRed = () => {
    if (counter === 0) return;
    dispatch(decCounter(1));
  };
  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={handleAdd}>ADD</button>
      <button onClick={handleRed}>RED</button>
    </div>
  );
};
