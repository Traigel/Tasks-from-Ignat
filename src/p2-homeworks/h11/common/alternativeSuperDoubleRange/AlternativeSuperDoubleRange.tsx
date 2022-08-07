import React, {useCallback, useEffect, useState, useRef} from "react";
import PropTypes from "prop-types";
import styles from './AlternativeSuperDoubleRange.module.css'

type AltSuperDoubleRangePropsType = {
    min: number
    max: number
    onChange: (min: number, max: number) => void
}

const AlternativeSuperDoubleRange = ({ min, max, onChange }: AltSuperDoubleRangePropsType) => {
    const [minVal, setMinVal] = useState(0);
    const [maxVal, setMaxVal] = useState(100);
    const minValRef = useRef(0);
    const maxValRef = useRef(100);
    const range = useRef<any>();

    // Convert to percentage
    const getPercent = useCallback(
        (value: number) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    // Set width of the range to decrease from the left side
    useEffect(() => {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxValRef.current);

        if (range.current) {
            // @ts-ignore
            range.current.style.left = `${minPercent}%`;
            // @ts-ignore
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [minVal, getPercent]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        const minPercent = getPercent(minValRef.current);
        const maxPercent = getPercent(maxVal);

        if (range.current) {
            // @ts-ignore
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [maxVal, getPercent]);

    // Get min and max values when their state changes
    useEffect(() => {
        onChange(minVal, maxVal);
    }, [minVal, maxVal, onChange]);

    return (
        <div className={styles.container}>
            <input
                type="range"
                min={min}
                max={max}
                value={minVal}
                onChange={(event) => {
                    const value = Math.min(Number(event.target.value), maxVal - 1);
                    setMinVal(value);
                    minValRef.current = value;
                }}
                className={`${styles.thumb} ${styles.thumbLeft}`}
                // @ts-ignore
                style={{  zIndex: minVal > max - 100 && "5" }}
            />
            <input
                type="range"
                min={min}
                max={max}
                value={maxVal}
                onChange={(event) => {
                    const value = Math.max(Number(event.target.value), minVal + 1);
                    setMaxVal(value);
                    maxValRef.current = value;
                }}
                className={`${styles.thumb} ${styles.thumbRight}`}
            />

            <div className={styles.slider}>
                <div className={styles.sliderTrack} />
                <div ref={range} className={styles.sliderRange}/>
                <div className={styles.sliderLeftValue}>{minVal}</div>
                <div className={styles.sliderRightValue}>{maxVal}</div>
            </div>
        </div>
    );
};

// MultiRangeSlider.propTypes = {
//     min: PropTypes.number.isRequired,
//     max: PropTypes.number.isRequired,
//     onChange: PropTypes.func.isRequired
// };

export default AlternativeSuperDoubleRange;
