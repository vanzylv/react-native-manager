import {combineReducers} from 'redux';
import AuthReducer from "./AuthReducer";
import EmpoyeeFormReducer from './EmployFormReducer'

export default combineReducers(
    {
        auth: AuthReducer,
        employeeForm: EmpoyeeFormReducer
    }
);