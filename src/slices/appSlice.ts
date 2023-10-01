import { createSlice } from '@reduxjs/toolkit';

export interface AppState {
  appNumber: number;
  expression: string[],
  appOpen: boolean;
}

const initialState: AppState = {
  appNumber: 1,
  expression: [],
  appOpen: false,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    up: (state) => {
      if (state.appNumber > 1){
        state.appNumber -= 1;
      } else {
        state.appNumber = 4;
      }
    },
    down: (state) => {
      if (state.appNumber < 4){
        state.appNumber += 1;
      } else {
        state.appNumber = 1;
      }
    },
    enter: (state) => {
      state.appOpen = true;
    },
    back: (state) => {
      state.appOpen = false;
    },
    setAppNumber: (state, action) => {
      state.appOpen = true;
      state.appNumber = action.payload;
    },
    addValueToExpression: (state, action) => {
      const lastValue = state.expression[state.expression.length-1];
      const lastValueIsAlgebraicSign = lastValue === "/" || lastValue === "+" || lastValue === "-"|| lastValue === "*";
      const currentValueIsAlgebraicSign = action.payload === "/" || action.payload === "+" || action.payload === "-"|| action.payload === "*";
      if (!(lastValueIsAlgebraicSign && currentValueIsAlgebraicSign)){
        state.expression.push(action.payload);
      }
    }, 
    setExpression: (state, action) => {
      state.expression = action.payload;
    }
  },
})

export const { up, down, enter, back, setAppNumber, addValueToExpression, setExpression } = appSlice.actions;

export const appReducers = appSlice.reducer;