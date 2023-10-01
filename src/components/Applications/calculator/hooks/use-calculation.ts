import { useDispatch } from "react-redux";
import { setExpression } from "../../../../slices";


export const useCalculation = (expression: string[]): string[] | string => {
    const dispatch = useDispatch();

    const combineIntoNumber = 
      (stringArray: string[], indexStart: number, indexEnd: number):number => 
        Number(stringArray.slice(indexStart, indexEnd).join(""));
    
    let result: string = "";
        
    if(expression.indexOf("=")!==-1){
      for (let i = 0; i < expression.length; i++){
        switch(expression[i]){
          case "+":
            result = Number((combineIntoNumber(expression, 0, i) 
            + combineIntoNumber(expression, i+1, expression.length-1)).toFixed(3)).toString()
            dispatch(setExpression([result]));
            return result;
          case "-":
            result = Number((combineIntoNumber(expression, 0, i) 
            - combineIntoNumber(expression, i+1, expression.length-1)).toFixed(3)).toString()
            dispatch(setExpression([result]));
            return result;
          case "*":
            result = Number((combineIntoNumber(expression, 0, i) 
            * combineIntoNumber(expression, i+1, expression.length-1)).toFixed(3)).toString()
            dispatch(setExpression([result]));
            return result;
          case "/":
            result = Number((combineIntoNumber(expression, 0, i) 
            / combineIntoNumber(expression, i+1, expression.length-1)).toFixed(3)).toString()
            dispatch(setExpression([result]));
            return result;
        }
      }
  }

  return expression;
}