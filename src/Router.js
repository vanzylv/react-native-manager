import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import {Actions} from 'react-native-router-flux';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene initial key="login" component={LoginForm} title="Please log in"/>
                </Scene>
                <Scene key="main">
                    <Scene
                        rightTitle="Add"
                        onRight={() => Actions.employeeCreate()}
                        key="employeeList"
                        component={EmployeeList}
                        title="Employee List"
                        initial
                    />

                    <Scene
                        key="employeeCreate"
                        title="Create Employee"
                        component={EmployeeCreate}
                    />

                    <Scene
                        key="employeeEdit"
                        title="Edit employee"
                        component={EmployeeEdit}
                    />

                </Scene>

            </Scene>
        </Router>
    )
};

export default RouterComponent;