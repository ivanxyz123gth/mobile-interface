import React from "react";
import { useCalculation } from "./hooks/use-calculation";
import type { RootState } from "../../../store";
import { setAppNumber } from "../../../slices";
import { useDispatch, useSelector } from 'react-redux';
import styles from "./CalculatorApp.module.css";

export const CalculatorApp: React.FC = () => {
  const dispatch = useDispatch();
  const expression = useSelector((state: RootState) => state.expression);
  dispatch(setAppNumber(2));
  const result = useCalculation(expression);

  return (
    <div className={styles.calculator}>
        <p className={styles.calculatorExpression}>
          {result === result ? result : "ошибка"}
        </p> 
    </div>
    );
}
