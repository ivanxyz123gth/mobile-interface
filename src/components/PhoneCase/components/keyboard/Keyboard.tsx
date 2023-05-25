import React from "react";
import {
  WhitespaceIcon,
  RadioIcon,
  AsteriskIcon,
  PlusIcon, 
  ArrowUpIcon,
  SoundOffIcon,
  MicrophoneIcon } 
from "../../../Icons";
import clsx from "clsx";
import styles from "./Keyboard.module.css"
export const Keyboard = ()=>(
    <div className={styles.keyboard}>
        <button className={styles.keyboardButton}>
            <p className={styles.keyboardNumber}>1</p>
            <MicrophoneIcon className={styles.keyboardMicrophoneIcon}/>
        </button>
        <button className={styles.keyboardButton}>
            <p className={styles.keyboardNumber}>2</p>
            <p className={styles.keyboardLetters}>ABC</p>
        </button>
        <button className={styles.keyboardButton}>
            <p className={styles.keyboardNumber}>3</p>
            <p className={styles.keyboardLetters}>DEF</p>
        </button>
        <button className={styles.keyboardButton}>
            <p className={styles.keyboardNumber}>4</p>
            <p className={styles.keyboardLetters}>GHI</p>
        </button>
        <button className={styles.keyboardButton}>
            <p className={styles.keyboardNumber}>5</p>
            <p className={styles.keyboardLetters}>JKL</p>
        </button>
        <button className={styles.keyboardButton}>
            <p className={styles.keyboardNumber}>6</p>
            <p className={styles.keyboardLetters}>MNO</p>
        </button>
        <button className={styles.keyboardButton}>
            <p className={styles.keyboardNumber}>7</p>
            <p className={styles.keyboardLetters}>PQRS</p>
        </button>
        <button className={styles.keyboardButton}>
            <p className={styles.keyboardNumber}>8</p>
            <p className={styles.keyboardLetters}>TUV</p>
        </button>
        <button className={styles.keyboardButton}>
            <p className={styles.keyboardNumber}>9</p>
            <p className={styles.keyboardLetters}>WXYZ</p>
        </button>
        <button className={clsx(styles.keyboardButton, styles.keyboardLeftBottomButton)}>
           <AsteriskIcon className={styles.keyboardAsteriskIcon}/>
           <RadioIcon className={styles.keyboardIcon}/>
           <PlusIcon className={styles.keyboardSmallIcon}/>
        </button>
        <button className={styles.keyboardButton}>
            <p className={styles.keyboardNumber}>0</p>
            <WhitespaceIcon className={styles.keyboardIcon}/>
        </button>
        <button className={clsx(styles.keyboardButton, styles.keyboardRightBottomButton)}>
            <p className={styles.keyboardNumber}>#</p>
            <ArrowUpIcon className={styles.keyboardIcon}/>
            <SoundOffIcon className={styles.keyboardSmallIcon}/>
        </button>
    </div>
)