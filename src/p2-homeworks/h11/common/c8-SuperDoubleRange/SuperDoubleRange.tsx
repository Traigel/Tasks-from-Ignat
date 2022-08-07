import {Box} from '@mui/material'
import Slider from '@mui/material/Slider'
import React from 'react'

type SuperDoubleRangePropsType = {
    onChangeRange: (value: [number, number]) => void
    value: [number, number]
    width?: number
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value, width,
        // min, max, step, disable, ...
    }
) => {

    const handleChange = (event: Event, newValue: number | number[]) => {
        onChangeRange && onChangeRange(newValue as [number, number]);
    };

    return (
        <div style={{display: 'inline-block'}}>
            <Box width={width ? width : 300}>
                <Slider
                    getAriaLabel={() => 'Range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                />
            </Box>
        </div>

    )
}

export default SuperDoubleRange
