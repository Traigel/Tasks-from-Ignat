import React from "react";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import styles from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC} from "./bll/themeReducer";

const themes: string[] = ['white', 'blue', 'yellow', 'dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(store => store.themes.theme)
    const dispatch = useDispatch()

    const onChangeCallback = (newTheme: string) => dispatch(changeThemeAC(newTheme))

    return (
        <div className={styles[theme]}>
            <hr/>
            <div>
                <span className={styles[theme + '-text']}>
                    homeworks 12
                </span>
            </div>
            <div className={styles.item}>
                <SuperSelect
                    options={themes}
                    value={theme}
                    onChangeOption={onChangeCallback}
                />
            </div>
            {/*should work (должно работать)*/}
            {/*SuperSelect tor SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
