import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import loader from '../../assets/images/loader.gif'
import {AppStoreType} from "./bll/store";
import {useSelector} from 'react-redux/es/hooks/useSelector';
import {useDispatch} from 'react-redux/es/hooks/useDispatch';
import {loadingAC} from "./bll/loadingReducer";

function HW10() {
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            <div style={{margin: '10px', height: '50px'}}>
                {loading
                    ? (
                        <div style={{marginLeft: '15px'}}>
                            <img style={{width: '50px', height: '50px'}} src={loader} alt="loader"/>
                        </div>
                    ) : (
                        <div style={{paddingTop: '12px'}}>
                            <SuperButton onClick={setLoading}>set loading...</SuperButton>
                        </div>
                    )
                }
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
