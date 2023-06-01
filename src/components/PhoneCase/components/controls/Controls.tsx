import React, {useContext} from "react";
import { CallIcon, ResetCallIcon } from "../../../Icons";
import { control, restart } from "../../../Applications";
import { KeyboardContext } from "../../../../MobilePhone";
import styles from "./Controls.module.css";
export const Controls = () =>{
    const context = useContext(KeyboardContext);
    const addValueFromCalc = context?.addValue;
    const handleClick = (value:string) => {
        addValueFromCalc(value);
    }
    return (
    <div className={styles.controls}>
        <div className={styles.controlsSideButtons}>
            <button className={styles.controlsSideButton} onClick={()=> restart()}>
                <hr className={styles.controlsHr}></hr>
            </button>
            <button className={styles.controlsSideButton}>
                <CallIcon/>
            </button>
        </div>

        <div className={styles.controlsCentralButtons}>
            <button className={styles.controlsCentralVerticalButton} onClick={()=>control("left")}/>
            <div className={styles.controlsCentralHorizontalButtons}>
                <button className={styles.controlsCentralHorizontalButton} onClick={()=>control("down")}/>
                <button className={styles.controlsCentralHorizontalButton} onClick={()=>control("up")}/>
            </div>
            <button className={styles.controlsCentralVerticalButton} onClick={()=>control("right")}/>

        </div>

        <div className={styles.controlsSideButtons}>
            <button className={styles.controlsSideButton} onClick={()=>handleClick("=")}>
                <hr className={styles.controlsHr}></hr>
            </button>
            <button className={styles.controlsSideButton}>
                <ResetCallIcon/>
            </button>
        </div>
    </div>
)}