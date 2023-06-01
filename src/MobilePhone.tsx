import React, { createContext, useState} from "react";
import { PhoneCase } from "./components/PhoneCase";
import { CalculatorApp } from "./components";

export const KeyboardContext = createContext({})

export const MobilePhone = () => {
  const [expression, setExpression] = useState<string[]>([]);
  
  const handleNumberChange = (algebraicValue: string) => {
    setExpression((expression => [...expression, algebraicValue]));
  }
  
  return(
    <KeyboardContext.Provider value={{addValue: handleNumberChange, expression: expression}}>
      <PhoneCase>
        <CalculatorApp/>
      </PhoneCase>
    </KeyboardContext.Provider>
  )
}



