import { useDispatch, useSelector } from 'react-redux';
import { control, restart } from '../../../../Applications';
import { up, down, enter, back } from '../../../../../slices';
import type { RootState } from "../../../../../store";

export const useControlsStateManage = () => {
  const appNumber = useSelector((state: RootState) => state.appNumber);
  const appOpen = useSelector((state: RootState) => state.appOpen);
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
      default:
        return appOpen ? () => {} : dispatch(up());
    }
  };

  const centralTopButtonFunc = () => {
    switch(appNumber){
      case 1:
        return appOpen ? control("up") : dispatch(down());
      default:
        return appOpen ? () => {}: dispatch(down());
    }
  };

  const centralLeftButtonFunc = () => {
    switch(appNumber){
      case 1:
        return appOpen ? control("left") : () => {};
      default:
        return () => {};
    }
  }

  const centralRightButtonFunc = () => {
    switch(appNumber){
      case 1:
        return appOpen ? control("right") : () => {};
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

  return {
    linkToApp, 
    centralBottomButtonFunc,
    centralTopButtonFunc,
    centralLeftButtonFunc,
    centralRightButtonFunc,
    enterButtonFunc,
    backButtonFunc
  }
}