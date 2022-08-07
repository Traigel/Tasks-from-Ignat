import React, {useState} from 'react'
import styles from './HW11.module.css'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import AlternativeSuperDoubleRange from "./common/alternativeSuperDoubleRange/AlternativeSuperDoubleRange";

function HW11() {

    const [value, setValue] = useState<[number, number]>([0, 100])

    const onChangeRangeHandler1 = (newValue: number) => {
        setValue([newValue, value[1]])
    }

    const onChangeRangeHandler2 = (newValue: [number, number]) => {
        setValue(newValue as [number, number])
    }

    // const onChangeRangeHandler3 = (min: number, max: number) => {
    //     setValue([min, max])
    // }

    return (
        <div>
            <hr/>
            homeworks 11 - material/mui

            {/*should work (должно работать)*/}

            <div>
                <div className={styles.value}>{value[0]}</div>
                <SuperRange
                    onChangeRange={onChangeRangeHandler1}
                    value={value[0]}
                />
            </div>

            <div style={{display: 'inline'}}>
                <div className={styles.value}>{value[0]}</div>
                <SuperDoubleRange
                    value={value}
                    onChangeRange={onChangeRangeHandler2}
                />
                <div className={styles.value}>{value[1]}</div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            homeworks 11 alternative - native
            <AlternativeSuperDoubleRange
                min={0}
                max={100}
                onChange={(min, max) => console.log(`min = ${min}, max = ${max}`)}
            />
            <hr/>
        </div>
    )
}

export default HW11
