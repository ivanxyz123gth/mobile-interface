import React from "react";
import { Route, Routes } from "react-router-dom";
import { PhoneCase, Menu, Snake, CalculatorApp, PhoneApp } from "./components";

export const MobilePhone: React.FC = () => (
  <PhoneCase>
    <Routes>
      <Route path="/" element={<Menu/>} />
      <Route path="/snake" element={<Snake/>} />
      <Route path="/calculator" element={<CalculatorApp/>}/>
      <Route path="/phone" element={<PhoneApp/>}/>
      <Route path="/contacts" element={<p>не найдено</p>} />
    </Routes>
  </PhoneCase>
)


