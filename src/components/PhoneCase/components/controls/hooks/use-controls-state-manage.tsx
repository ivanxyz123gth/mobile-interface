import { useDispatch, useSelector } from 'react-redux';
import { control, restart } from '../../../../Applications';
import { up, down, enter, back, addValueToExpression } from '../../../../../slices';
import type { RootState } from "../../../../../store";

interface ControlsStateManageReturn {
  linkToApp: () => string;
}

export const useControlsStateManage = () => {
  const appNumber = useSelector((state: RootState) => state.appNumber);
  const appOpen = useSelector((state: RootState) => state.appOpen);
  const phoneNumber = useSelector((state: RootState) => state.expression);
  const dispatch = useDispatch();

  const linkToApp = (): string => {
    switch (appNumber){
        case 1: 
          return !appOpen ? "" : "/snake";
        case 2:
          return !appOpen ? "" : "/calculator";
        case 3:
          return !appOpen ? "" : "/phone"; 
        case 4:
          return !appOpen ? "" : "/contacts";
        default:
          return "";
        }
  }

  const centralBottomButtonFunc = () => {
    switch(appNumber){
      case 1:
        return appOpen ? control("down") : dispatch(up());
      case 2: 
        return appOpen ? dispatch(addValueToExpression("+")) : dispatch(up());
      default:
        return appOpen ? () => {} : dispatch(up());
    }
  };

  const centralTopButtonFunc = () => {
    switch(appNumber){
      case 1:
        return appOpen ? control("up") : dispatch(down());
      case 2: 
        return appOpen ? dispatch(addValueToExpression("-")) : dispatch(down());
      default:
        return appOpen ? () => {}: dispatch(down());
    }
  };

  const centralLeftButtonFunc = () => {
    switch(appNumber){
      case 1:
        return appOpen ? control("left") : () => {};
      case 2: 
        return appOpen ? dispatch(addValueToExpression("*")) : () => {};
      default:
        return () => {};
    }
  }

  const centralRightButtonFunc = () => {
    switch(appNumber){
      case 1:
        return appOpen ? control("right") : () => {};
      case 2: 
        return appOpen ? dispatch(addValueToExpression("/")) : () => {};
      default:
        return () => {};
    }
}

  const enterButtonFunc = () => {
  switch(appNumber){
    case 1:
      return appOpen ? restart : dispatch(enter());
    default:
      return appOpen ? () => {} : dispatch(enter());
    }
  };

  const backButtonFunc = () => {
  switch(appNumber){
    default:
      return dispatch(back());
    } 
  };

  const callButtonHref = ():string => {
    const phoneNumberString = phoneNumber.join("");
    if(appOpen && appNumber === 3){
      return `tel:${phoneNumberString}`
    }
    return "";
  }

  return {
    linkToApp, 
    centralBottomButtonFunc,
    centralTopButtonFunc,
    centralLeftButtonFunc,
    centralRightButtonFunc,
    enterButtonFunc,
    backButtonFunc, 
    callButtonHref
  }
}