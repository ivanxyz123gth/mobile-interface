import React from "react";
import clsx from "clsx";
import {
  WhitespaceIcon,
  RadioIcon,
  AsteriskIcon,
  PlusIcon, 
  ArrowUpIcon,
  SoundOffIcon,
  MicrophoneIcon } 
from "../../../Icons";
import { addValueToExpression, setExpression } from "../../../../slices";
import { useKeyBoardStateManage } from "./hooks/use-keyboard-state-manage";
import styles from "./Keyboard.module.css"


export const Keyboard: React.FC = ()=> {
    const { buttonNumberFunc, buttonGridFunc, buttonAsteriskFunc } = useKeyBoardStateManage();
    return (
        <div className={styles.keyboard}>
        <button className={styles.keyboardButton} onClick={()=> buttonNumberFunc("1")}>
            <p className={styles.keyboardNumber}>1</p>
            <MicrophoneIcon className={styles.keyboardMicrophoneIcon}/>
        </button>
        <button className={styles.keyboardButton} onClick={()=> buttonNumberFunc("2")}>
            <p className={styles.keyboardNumber}>2</p>
            <p className={styles.keyboardLetters}>ABC</p>
        </button>
        <button className={styles.keyboardButton} onClick={()=> buttonNumberFunc("3")}>
            <p className={styles.keyboardNumber}>3</p>
            <p className={styles.keyboardLetters}>DEF</p>
        </button>
        <button className={styles.keyboardButton} onClick={()=> buttonNumberFunc("4")}>
            <p className={styles.keyboardNumber}>4</p>
            <p className={styles.keyboardLetters}>GHI</p>
        </button>
        <button className={styles.keyboardButton} onClick={()=> buttonNumberFunc("5")}>
            <p className={styles.keyboardNumber}>5</p>
            <p className={styles.keyboardLetters}>JKL</p>
        </button>
        <button className={styles.keyboardButton} onClick={()=> buttonNumberFunc("6")}>
            <p className={styles.keyboardNumber}>6</p>
            <p className={styles.keyboardLetters}>MNO</p>
        </button>
        <button className={styles.keyboardButton} onClick={()=> buttonNumberFunc("7")}>
            <p className={styles.keyboardNumber}>7</p>
            <p className={styles.keyboardLetters}>PQRS</p>
        </button>
        <button className={styles.keyboardButton} onClick={()=> buttonNumberFunc("8")}>
            <p className={styles.keyboardNumber}>8</p>
            <p className={styles.keyboardLetters}>TUV</p>
        </button>
        <button className={styles.keyboardButton} onClick={()=> buttonNumberFunc("9")}>
            <p className={styles.keyboardNumber}>9</p>
            <p className={styles.keyboardLetters}>WXYZ</p>
        </button>
        <button className={clsx(styles.keyboardButton, styles.keyboardLeftBottomButton)} onClick={()=> buttonAsteriskFunc()}>
           <AsteriskIcon className={styles.keyboardAsteriskIcon}/>
           <RadioIcon className={styles.keyboardIcon}/>
           <PlusIcon className={styles.keyboardSmallIcon}/>
        </button>
        <button className={styles.keyboardButton} onClick={()=> buttonNumberFunc("0")}>
            <p className={styles.keyboardNumber}>0</p>
            <WhitespaceIcon className={styles.keyboardIcon}/>
        </button>
        <button className={clsx(styles.keyboardButton, styles.keyboardRightBottomButton)} onClick={()=> buttonGridFunc()}>
            <p className={styles.keyboardNumber}>#</p>
            <ArrowUpIcon className={styles.keyboardIcon}/>
            <SoundOffIcon className={styles.keyboardSmallIcon}/>
        </button>
    </div>);
}