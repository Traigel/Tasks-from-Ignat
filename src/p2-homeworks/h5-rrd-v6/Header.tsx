import React, {useState} from 'react'
import styles from './HW5.module.css'
import {NavLink} from "react-router-dom";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

function Header() {

    const [taskItem, setTaskItem] = useState<boolean>(true)

    return (
        <div className={styles.header}>
            {taskItem ? <div className={styles.navLinkItems}>
                <NavLink
                    className={({isActive}) => isActive ? `${styles.activeLink}` : `${styles.link}`}
                    to={'/pre-junior'}
                >pre-junior</NavLink>

                <NavLink
                    className={({isActive}) => isActive ? `${styles.activeLink}` : `${styles.link}`}
                    to={'/junior'}
                >junior</NavLink>

                <NavLink
                    className={({isActive}) => isActive ? `${styles.activeLink}` : `${styles.link}`}
                    to={'/juniorPlus'}
                >juniorPlus</NavLink>
            </div> : ''}
            <div className={styles.buttonMenu}>
                {!taskItem ? 'Menu' : ''}
            </div>
        </div>
    )
}

export default Header
