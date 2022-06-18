import React from 'react'
import styles from './HW5.module.css'
import {NavLink} from "react-router-dom";

function Header() {

    return (
        <div className={styles.navLinkItems}>react homeworks:
            <div className={styles.slide}>
                <div className={styles.toggle}>Menu</div>
                <div className={styles.box}>
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
                </div>
            </div>
        </div>
    )
}

export default Header
