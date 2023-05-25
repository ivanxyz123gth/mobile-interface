import React from "react";
import { CallIcon, ResetCallIcon } from "../../../Icons";
import { control } from "../../../Applications";
import styles from "./Controls.module.css";
export const Controls = () =>(
    <div className={styles.controls}>
        <div className={styles.controlsSideButtons}>
            <button className={styles.controlsSideButton}>
                <hr className={styles.controlsHr}></hr>
            </button>
            <button className={styles.controlsSideButton}>
                <CallIcon/>
            </button>
        </div>

        <div className={styles.controlsCentralButtons}>
            <button className={styles.controlsCentralVerticalButton} onClick={()=>control("left")}/>
            <div className={styles.controlsCentralHorizontalButtons}>
                <button className={styles.controlsCentralHorizontalButton} onClick={()=>control("up")}/>
                <button className={styles.controlsCentralHorizontalButton} onClick={()=>control("down")}/>
            </div>
            <button className={styles.controlsCentralVerticalButton} onClick={()=>control("right")}/>

        </div>

        <div className={styles.controlsSideButtons}>
            <button className={styles.controlsSideButton}>
                <hr className={styles.controlsHr}></hr>
            </button>
            <button className={styles.controlsSideButton}>
                <ResetCallIcon/>
            </button>
        </div>
    </div>
)