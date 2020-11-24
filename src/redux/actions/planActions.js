import axios from 'axios';

import { DATA_PLAN, DATA_PLAN_ERROR} from './types'

export const getPlans = () => async dispatch =>{
    
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authentication': process.env.REACT_APP_TOKEN
        }
    }
    try {
        const res = await axios.get('https://api.bondeyglobal.com/admin/getUsersData', config)
        dispatch({
            type: DATA_PLAN,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: DATA_PLAN_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status}
        })
    }
}