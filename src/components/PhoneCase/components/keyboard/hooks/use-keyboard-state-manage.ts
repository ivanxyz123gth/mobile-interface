import { useDispatch, useSelector } from "react-redux";
import { addValueToExpression, setExpression } from "../../../../../slices";
import { RootState } from "../../../../../store";

export const useKeyBoardStateManage = () => {
    const dispatch = useDispatch();
    const appOpen = useSelector((state: RootState) => state.appOpen);
    const appNumber = useSelector((state: RootState) => state.appNumber);

    const buttonNumberFunc = (value: string) => {
      if (appOpen) {
        switch(appNumber){
          case 1:
            return () => {}
          case 2:
            return dispatch(addValueToExpression(value))
          case 3: 
            dispatch(addValueToExpression(value))
        }
      }
    }

    const buttonАsteriskFunc = () => {
        if (appOpen){
            switch(appNumber){
              case 1: 
                return () => {};
              case 2:
                return dispatch(setExpression([]));
              case 3: 
                return dispatch(addValueToExpression("*"));
            }
        }
    }

    const buttonGridFunc = () => {
        if (appOpen){
            switch(appNumber){
              case 1: 
                return () => {};
              case 2:
                return dispatch(addValueToExpression("="));
              case 3: 
                return dispatch(addValueToExpression("#"));
            }
        }
    }

    return {
        buttonNumberFunc,
        buttonGridFunc,
        buttonАsteriskFunc,
    }
}