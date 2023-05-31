import React, { createContext, useState} from "react";
import { PhoneCase } from "./components/PhoneCase";
import { CalculatorApp } from "./components/Applications";

export const KeyboardContext = createContext({})

export const MobilePhone = () => {
  const [expression, setExpression] = useState<string[]>([]);
  
  const handleCalcChange = (algebraicValue: string) =>{
    expression.push(algebraicValue);
    setExpression(expression);
  }
  
  return(
    <KeyboardContext.Provider value={handleCalcChange}>
      <PhoneCase>
        <CalculatorApp expression={expression}/>
      </PhoneCase>
    </KeyboardContext.Provider>
  )
}



