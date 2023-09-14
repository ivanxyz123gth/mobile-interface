import React, { createContext, useState} from "react";
import { Route, Routes } from "react-router-dom";
import { PhoneCase, Menu, Snake, CalculatorApp } from "./components";

export const KeyboardContext = createContext({})

export const MobilePhone = () => {
  const [expression, setExpression] = useState<string[]>([]);
  
  const handleNumberChange = (algebraicValue: string) => {
    setExpression((expression => [...expression, algebraicValue]));
  }
  
  return(
    <>
      <KeyboardContext.Provider value={{addValue: handleNumberChange, expression: expression}}>
        <PhoneCase>
          <Routes>
            <Route path="/" element={<Menu/>} />
            <Route path="/snake" element={<Snake/>} />
            <Route path="/calculator" element={<CalculatorApp/>}/>
            <Route path="/phone" element={<p>не найдено</p>}/ >
            <Route path="/contacts" element={<p>не найдено</p>} />
          </Routes>
        </PhoneCase>
      </KeyboardContext.Provider>
    </>
  )
}



