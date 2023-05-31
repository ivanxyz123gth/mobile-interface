import React from "react";
import { calculator } from "./calculator";
import styles from "./CalculatorApp.module.css";

export const CalculatorApp = ({expression}: {expression:string[]}) => {
    console.log(expression)
    return (
    <div className={styles.calculator}>
        <p className={styles.calculatorExpression}>
            {calculator(expression.join(""))}
        </p> 
    </div>
    );
}