import React, { FormEvent, useRef } from "react";
import {
  decrementCount,
  defaultCount,
  incrementCount,
} from "../../redux/Count/slice";
import { useTypedDispatch, useTypedSelector } from "../../redux/hooks/hooks";

import TitleChange from "../TitleChange/TitleChange";
import ToHome from "../ToHome/ToHome";

const Count: React.FC = () => {
  const incrementValue = useRef<HTMLInputElement>(null);
  const decrementValue = useRef<HTMLInputElement>(null);

  const dispatch = useTypedDispatch();
  const countState = useTypedSelector((state) => state.countReducer.count);

  const decrementState = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const value = Number(e.currentTarget.decrementField.value);
    if (isNaN(value)) {
      return;
    }
    dispatch(decrementCount(value));
  };

  const incrementState = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const value = Number(e.currentTarget.incrementField.value);
    if (isNaN(value)) {
      return;
    }
    dispatch(incrementCount(value));
  };

  return (
    <div>
      <TitleChange componentName={Count.name} />
      <ToHome />
      <form onSubmit={(e) => incrementState(e)}>
        <input type="number" ref={incrementValue} name="incrementField" />
        <button type="submit">Increment</button>
      </form>
      <form onSubmit={(e) => decrementState(e)}>
        <input type="number" ref={decrementValue} name="decrementField" />
        <button type="submit">Decrement</button>
      </form>
      <button
        onClick={() => {
          dispatch(defaultCount());
          if (decrementValue.current) {
            decrementValue.current.value = "";
          }
          if (incrementValue.current) {
            incrementValue.current.value = "";
          }
        }}
      >
        Default
      </button>
      <p>Value {countState}</p>
    </div>
  );
};

export default Count;
