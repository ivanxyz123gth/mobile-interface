export const calculator = (expression: string): number | string =>{
    const expressionArray: string[] = expression.split("");
    const combineIntoNumber = 
      (stringArray: string[], indexStart: number, indexEnd: number):number => 
        Number(stringArray.slice(indexStart, indexEnd).join(""))
    if(expression.indexOf("=")!==-1){
    for (let i = 0; i<expressionArray.length; i++){
      switch(expressionArray[i]){
        case "+":
          return (combineIntoNumber(expressionArray, 0, i) 
          + combineIntoNumber(expressionArray, i+1, expressionArray.length-1))
        case "-":
          return combineIntoNumber(expressionArray, 0, i) 
          - combineIntoNumber(expressionArray, i+1, expressionArray.length-1)
        case "*":
          return combineIntoNumber(expressionArray, 0, i) 
          * combineIntoNumber(expressionArray, i+1, expressionArray.length-1)
        case "/":
          return combineIntoNumber(expressionArray, 0, i) 
          / combineIntoNumber(expressionArray, i+1, expressionArray.length-1)
     }
    }
  }

    return expression;
   }