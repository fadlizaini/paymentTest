import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


class Header extends Component {
  constructor() {
    super();
    this.state = {};
    this.s = require('../styles');
  }
  render() {
    return (
      <View style={this.s.headerContainer}>
        <Icon color='white' name='chevron-left' size={30} style={this.s.headerIcon}/>
        <Text style={this.s.headerTitle}>{this.props?.title}</Text>
      </View>
    );
  }
}

export default Header;
