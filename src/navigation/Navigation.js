import 'react-native-gesture-handler';
import React , {Component}from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Payment from '../screens/Payment/Payment';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../components/Header';


const Stack = createStackNavigator();

class Navigation extends Component {
  constructor() {
    super();
    this.state = {};
    this.s = require('../styles');
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{headerStyle:{backgroundColor:'#335997',}}}
        >
          <Stack.Screen
            name="Payment"
            component={Payment}
            options={{header:props=><Header title='Payment Details'/>}}
          
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigation;
