import * as React from "react";
import * as ReactDOM from 'react-dom/client'
import { MobilePhone } from './MobilePhone'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MobilePhone />
  </React.StrictMode>,
)
