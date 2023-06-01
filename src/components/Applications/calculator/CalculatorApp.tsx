import React, { useContext } from "react";
import { calculator } from "./calculator";
import { KeyboardContext } from "../../../MobilePhone";
import styles from "./CalculatorApp.module.css";

export const CalculatorApp = () => {
    const context = useContext(KeyboardContext)
    const expression = context?.expression;
    const result = calculator(expression.join(""));
    return (
    <div className={styles.calculator}>
        <p className={styles.calculatorExpression}>
            {result === result ? result : "ошибка"}
        </p> 
    </div>
    );
}
