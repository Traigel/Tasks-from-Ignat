import React from 'react'
import s from './App.module.css'
import HW5 from '../../../p2-homeworks/h5-rrd-v6/HW5';
import styles from "../../../p2-homeworks/h12/HW12.module.css";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../p2-homeworks/h10/bll/store";

function App() {

    const theme = useSelector<AppStoreType, string>(store => store.themes.theme)

    return (
        <div className={`${s.App} ${styles[theme]} ${styles[theme + '-text']}`}>
            <HW5/>
        </div>
    )
}

export default App
