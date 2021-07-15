import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Payment from '../screens/Payment/Payment';
import Header from '../components/Header';

const Stack = createStackNavigator();

class Navigation extends Component {
  constructor() {
    super();
    this.state = {};
    this.s = require('../styles');
  }
  MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white',
    },
  };
  render() {
    return (
      <NavigationContainer 
      // theme={this.MyTheme}
      >
        <Stack.Navigator
          screenOptions={{headerStyle: {backgroundColor: '#335997'}}}>
          <Stack.Screen
            name="Payment"
            component={Payment}
            options={{header: props => <Header title="Payment Details" />}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigation;
