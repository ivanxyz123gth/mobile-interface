import React from "react";
import { APPLICATIONS } from "./data";
import { ApplicationPoint } from "./components";
import type { RootState } from '../../store';
import { useSelector } from 'react-redux';

import styles from "./Menu.module.css";

export const Menu: React.FC = () => {
  const appNumber = useSelector((state: RootState) => state.appNumber);

  return (
    <div className={styles.menu}>
      {APPLICATIONS.map(({name, path, icon}, index) => (
        <ApplicationPoint name={name} key={index} icon={icon} path={path} isActive={index === appNumber - 1}/>
      ))}
    </div>
    );
}