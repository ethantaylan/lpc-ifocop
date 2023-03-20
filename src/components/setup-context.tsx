import React from "react";
import { useGlobalContext, useGlobalDispatch } from "../context/context";
import { Span } from "./span/span";

type Props = {};

export const Test = (props: Props) => {
  const { darkMode, textPrimary, textSecondary, textTertiary } =
    useGlobalContext();
  const dispatch = useGlobalDispatch();

  const handleDarkMode = () => {
    dispatch({
      type: darkMode ? "LIGHT" : "DARK",
      payload: null,
    });
    if (darkMode) document.body.style.backgroundColor = "#222222";
    else {
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <h1 className={textPrimary} onClick={handleDarkMode}>
      Test
    </h1>
  );
};
