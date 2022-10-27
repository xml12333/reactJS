import React, { useState } from "react";
const IconCheck = ({ check, setCheck, data }) => {
  const changeCheck = (e) => {
    const title =
      e.target.parentElement.querySelector(".accordion__title").innerText;

    setCheck((prev) => {
      localStorage.setItem(
        "data",
        JSON.stringify(
          data.map((el) => {
            if (el.question === title) {
              el.status = prev === 2 ? 0 : prev + 1;
            }
            return el;
          })
        )
      );

      return prev === 2 ? 0 : prev + 1;
    });
  };
  return (
    <i
      className={`bx bx-${
        check + 1 === 2 ? "window-close" : "check-square"
      } accordion__icon-check-${check + 1}`}
      onClick={changeCheck}
    ></i>
  );
};

export default IconCheck;
