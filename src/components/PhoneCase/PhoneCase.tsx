import React from "react";
import { Keyboard, Controls } from "./components";
import { NokiaLogoIcon } from "../Icons";
import styles from "./PhoneCase.module.css";
import clsx from 'clsx';

export const PhoneCase = ({children}) => (
    <div className={styles.phoneCase}>
       <div className={styles.phoneCaseSecondFrame}>
          <div className={styles.phoneCaseScreenPanel}>
            <div className={styles.phoneCaseDecorationElemWrapper}>
                 <span className={clsx(styles.phoneCaseCircle, styles.phoneCaseCamera)}/>
                 <span className={styles.phoneCaseSpeaker}/>
                 <span className={clsx(styles.phoneCaseCircle, styles.phoneCaseLantern)}/>
             </div>
             <NokiaLogoIcon className={styles.phoneCaseNokiaLogo}/>
             <div className={styles.phoneCaseDisplay}>
               {children}
             </div>
          </div>
          <Controls/>
          <Keyboard/>
       </div>
    </div>
)
