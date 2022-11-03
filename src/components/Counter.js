import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store";
import "./Counter.scss";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  const showCounter = useSelector((state) => state.counter.showCounter);

  const onIncrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const onDecrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const onIncreaseHandler = () => {
    dispatch(counterActions.increase(10));
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className="counter">
      <h1 className="counter__h1">Redux Counter</h1>
      {showCounter && <div className="counter__value">{counter}</div>}
      <div>
        <button className="counter__Button" onClick={onIncrementHandler}>
          Increment
        </button>
        <button className="counter__Button" onClick={onIncreaseHandler}>
          Increment by 10
        </button>
        <button className="counter__Button" onClick={onDecrementHandler}>
          Decrement
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
