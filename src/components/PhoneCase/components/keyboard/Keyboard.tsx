import React, {useContext} from "react";
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
import { KeyboardContext } from "../../../../MobilePhone";
import styles from "./Keyboard.module.css"


export const Keyboard = ()=>{
    const context = useContext(KeyboardContext);
    const addValue = context?.addValue;
    const handleClick = (value:string) => {
        addValue(value)
    }

    return (
        <div className={styles.keyboard}>
        <button className={styles.keyboardButton} onClick={()=>{handleClick("1")}}>
            <p className={styles.keyboardNumber}>1</p>
            <MicrophoneIcon className={styles.keyboardMicrophoneIcon}/>
        </button>
        <button className={styles.keyboardButton} onClick={()=>{handleClick("2")}}>
            <p className={styles.keyboardNumber}>2</p>
            <p className={styles.keyboardLetters}>ABC</p>
        </button>
        <button className={styles.keyboardButton} onClick={()=>{handleClick("3")}}>
            <p className={styles.keyboardNumber}>3</p>
            <p className={styles.keyboardLetters}>DEF</p>
        </button>
        <button className={styles.keyboardButton} onClick={()=>{handleClick("4")}}>
            <p className={styles.keyboardNumber}>4</p>
            <p className={styles.keyboardLetters}>GHI</p>
        </button>
        <button className={styles.keyboardButton} onClick={()=>{handleClick("5")}}>
            <p className={styles.keyboardNumber}>5</p>
            <p className={styles.keyboardLetters}>JKL</p>
        </button>
        <button className={styles.keyboardButton} onClick={()=>{handleClick("6")}}>
            <p className={styles.keyboardNumber}>6</p>
            <p className={styles.keyboardLetters}>MNO</p>
        </button>
        <button className={styles.keyboardButton} onClick={()=>{handleClick("7")}}>
            <p className={styles.keyboardNumber}>7</p>
            <p className={styles.keyboardLetters}>PQRS</p>
        </button>
        <button className={styles.keyboardButton} onClick={()=>{handleClick("8")}}>
            <p className={styles.keyboardNumber}>8</p>
            <p className={styles.keyboardLetters}>TUV</p>
        </button>
        <button className={styles.keyboardButton} onClick={()=>{handleClick("9")}}>
            <p className={styles.keyboardNumber}>9</p>
            <p className={styles.keyboardLetters}>WXYZ</p>
        </button>
        <button className={clsx(styles.keyboardButton, styles.keyboardLeftBottomButton)} onClick={()=>{handleClick("+")}}>
           <AsteriskIcon className={styles.keyboardAsteriskIcon}/>
           <RadioIcon className={styles.keyboardIcon}/>
           <PlusIcon className={styles.keyboardSmallIcon}/>
        </button>
        <button className={styles.keyboardButton} onClick={()=>{handleClick("0")}}>
            <p className={styles.keyboardNumber}>0</p>
            <WhitespaceIcon className={styles.keyboardIcon}/>
        </button>
        <button className={clsx(styles.keyboardButton, styles.keyboardRightBottomButton)} onClick={()=>{handleClick("-")}}>
            <p className={styles.keyboardNumber}>#</p>
            <ArrowUpIcon className={styles.keyboardIcon}/>
            <SoundOffIcon className={styles.keyboardSmallIcon}/>
        </button>
    </div>);
}