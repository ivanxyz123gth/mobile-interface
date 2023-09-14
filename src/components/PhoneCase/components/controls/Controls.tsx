import React from "react";
import { useControlsStateManage } from "./hooks";
import { useSelector } from "react-redux";
import { CallIcon, ResetCallIcon } from "../../../Icons";

import styles from "./Controls.module.css";

export const Controls: React.FC = () => {

    const { centralBottomButtonFunc,
            centralLeftButtonFunc,
            centralRightButtonFunc, 
            centralTopButtonFunc, 
            linkToApp, 
            enterButtonFunc, 
            backButtonFunc} = useControlsStateManage();

    const appOpen = useSelector((state: any)=> state.appOpen)

    console.log(appOpen)

    return (
    <div className={styles.controls}>
        <div className={styles.controlsSideButtons}>
            <a href={linkToApp()} className={styles.controlsLink}>
              <button className={styles.controlsSideButton} onClick={()=> enterButtonFunc()}>
                 <hr className={styles.controlsHr}></hr>
              </button>
            </a>
            <button className={styles.controlsSideButton}>
              <CallIcon />
            </button>
        </div>
        <div className={styles.controlsCentralButtons}>
            <button className={styles.controlsCentralVerticalButton} onClick={()=> centralLeftButtonFunc()}/>
            <div className={styles.controlsCentralHorizontalButtons}>
                <button className={styles.controlsCentralHorizontalButton} onClick={()=> centralBottomButtonFunc()}/>
                <button className={styles.controlsCentralHorizontalButton} onClick={()=> centralTopButtonFunc()}/>
            </div>
            <button className={styles.controlsCentralVerticalButton} onClick={()=>centralRightButtonFunc()}/>
        </div>
        <div className={styles.controlsSideButtons}>
            <a href="/">
              <button className={styles.controlsSideButton} onClick={()=>backButtonFunc()}>
                <hr className={styles.controlsHr}></hr>
              </button>
            </a>
            <button className={styles.controlsSideButton}>
                <ResetCallIcon/>
            </button>
        </div>
    </div>
)}