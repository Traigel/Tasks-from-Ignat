import React, {ChangeEvent, useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {RequestsAPI} from "./api";
import loader from '../../assets/images/loader.gif'

export const Request = function () {

    const [checked, setChecked] = useState<boolean>(false)
    const [messages, setMessages] = useState<string>('...')
    const [loading, setLoading] = useState<boolean>(false)

    const onClickHandler = () => {
        setLoading(true)
        RequestsAPI.postTest(checked)
            .then(res => {
                console.log(res)
                setMessages(`${res.data.errorText}: ${res.data.info}`)
            })
            .catch(err => {
                console.log(err)
                setMessages(`${err.response.data.errorText}: ${err.response.data.info}`)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const onChangeHandler = (value: ChangeEvent<HTMLInputElement>) => {
        setChecked(value.currentTarget.checked)
    }

    return (
        <div style={{margin: '20px'}}>

            <SuperButton disabled={loading} onClick={onClickHandler}>Request</SuperButton>
            <SuperCheckbox checked={checked} onChange={onChangeHandler} style={{margin: '0 20px'}}/>
            <div style={{margin: '20px', height: '50px'}}>
                {loading
                    ? <img style={{width: '50px', height: '50px', marginLeft: '80px'}} src={loader} alt="loader"/>
                    : messages
                }
            </div>

        </div>
    );
}