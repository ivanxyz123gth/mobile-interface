import * as React from "react"
import { Link } from "react-router-dom";
import clsx from "clsx";

import styles from "./ApplicationPoint.module.css";

interface ApplicationPointProps {
    icon: React.FC;
    name: string;
    path: string;
    isActive?: boolean;
}

export const ApplicationPoint: React.FC<ApplicationPointProps> = ({icon, name, path, isActive = false}) => (
  <Link className={styles.applicationPointLink} to={path}>
    <div className={clsx(styles.applicationPoint, isActive && styles.applicationPointActive )}>
      <p className={styles.applicationPointName}>
        {name}
      </p>
      {icon}
    </div>
  </Link>
)