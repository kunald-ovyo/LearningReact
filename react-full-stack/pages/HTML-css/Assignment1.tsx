import React, { memo, useEffect } from "react";
import style from "@/styles/assignment1.module.css";

function Assignment1() {
  return (
    <div className={style.base}>
      <button
        className={style.box}
        onClick={() => {
          console.log("Kuna checking button");
        }}
      >
        <h1>Checking</h1>
      </button>
    </div>
  );
}

export default memo(Assignment1);
