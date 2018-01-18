import {EMPLOYEE_UPDATE, EMPLOYEE_CREATE} from '../actions/types';

const INITIAL_STATE = {name: '', shift: '', phone: ''};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            //action.payload === {prop: 'name', value:'jane'}
            console.log(action)
            return {...state, [action.payload.prop]: action.payload.value};
        case EMPLOYEE_CREATE:
            return INITIAL_STATE

        default:
            return state;
    }
}