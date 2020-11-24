import { DATA_PLAN, DATA_PLAN_ERROR } from '../actions/types';

const initialState = {
    plan: [],
    loading: true,
    error: {}
}


export default function(state = initialState, action){
    const { type, payload } = action;
    switch (type) {
        case DATA_PLAN:
            return{
                ...state,
                plan: payload,
                loading: false
            }
        case DATA_PLAN_ERROR: 
            return{
                ...state,
                error: payload,
                loading: false,
                plan: null
            }
        default:
            return state;
    }
}