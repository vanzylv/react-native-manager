import React, {Component} from 'react';
import {Picker, Text} from 'react-native'
import {Card, CardSection, Input, Button} from "./common/";
import {connect} from 'react-redux';
import {employeeUpdate, employeeCreate} from '../actions/EmployeeActions'


class EmployeeCreate extends Component {

    onButtonPress() {
        const {name, phone, shift} = this.props;
        this.props.employeeCreate({name, phone, shift});
    }

    render() {
        return (
            <Card>

                <CardSection>
                    <Input
                        onChangeText={text => this.props.employeeUpdate({prop: 'name', value: text})} label="Name"
                        placeholder="Jane" value={this.props.name}/>
                </CardSection>

                <CardSection>
                    <Input
                        onChangeText={text => this.props.employeeUpdate({prop: 'phone', value: text})}
                        label="Phone" placeholder="555-555-555" value={this.props.phone}/>
                </CardSection>

                <CardSection style={{flexDirection: 'column'}}>
                    <Text style={style.pickerStyle}>Shift</Text>
                    <Picker

                        selectedValue={this.props.shift}
                        onValueChange={day => this.props.employeeUpdate({prop: 'shift', value: day})}
                    >
                        <Picker.Item label="Monday" value="Monday"/>
                        <Picker.Item label="Tuesday" value="Tuesday"/>
                        <Picker.Item label="Wednesday" value="Wednesday"/>
                        <Picker.Item label="Thursday" value="Thursday"/>
                        <Picker.Item label="Friday" value="Friday"/>
                        <Picker.Item label="Saturday" value="Saturday"/>
                        <Picker.Item label="Sunday" value="Sunday"/>
                    </Picker>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        )

    }
}

const style = {
    pickerStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};

mapStateToProps = (state) => {

    console.log(state)

    const {name, phone, shift} = state.employeeForm;

    return {name, phone, shift}
};

export default connect(mapStateToProps, {employeeUpdate, employeeCreate})(EmployeeCreate);
