import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import style from "@/styles/assignment1.module.css";
import { setInterval } from "timers";

const Assignment1 = () => {
  const [count, setcount] = useState<number>(0);
  const [showDecrementButton, setShowDecrementButton] =
    useState<boolean>(false);
  const intervalRef = useRef(undefined);

  useEffect(() => {
    if (count < 10 && count >= 1) {
      const timeout = setTimeout(() => {
        setcount(showDecrementButton ? count - 1 : count + 1);
        clearTimeout(timeout);
      }, 1000);
    } else {
      setShowDecrementButton(true);
    }
  }, [count]);

  return (
    <div className={style.base}>
      <h1 className={style.header}>{count}</h1>
      <button
        className={style.box}
        onClick={() => {
          setcount(count + 1);
        }}
      >
        <h1>Checking</h1>
      </button>
      {showDecrementButton && (
        <button
          className={style.box}
          onClick={() => {
            setcount(count - 1);
          }}
        >
          <h1>Decrement</h1>
        </button>
      )}
    </div>
  );
};

export default memo(Assignment1);
