import React, { useEffect, useState } from "react";
import { calculator } from "./calculator";
import { EXPRESSION } from "../../PhoneCase/components";
import styles from "./CalculatorApp.module.css";

export const CalculatorApp = () => {
    const [expression, setExpression] = useState(EXPRESSION);
    
    useEffect(() => {
        setExpression(EXPRESSION);
    }, [EXPRESSION]); 
    
    return (
    <div className={styles.calculator}>
        <p className={styles.calculatorExpression}>
            {calculator(expression.join(""))}
        </p> 
    </div>
    );
}