import React from "react";
import type { RootState } from "../../../store";
import { setAppNumber } from "../../../slices";
import { useDispatch, useSelector } from 'react-redux';
import styles from "./PhoneApp.module.css";

export const PhoneApp: React.FC = () => {
  const dispatch = useDispatch();
  const expression = useSelector((state: RootState) => state.expression);
  dispatch(setAppNumber(3));

  return (
    <div className={styles.phone}>
        <p className={styles.phoneNumber}>
          {expression}
        </p> 
    </div>
    );
}