import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
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
        <TouchableOpacity 
        onPress={this.props?.onPress}
        style={this.s.headerIcon}>
          <Icon
            color="white"
            name="chevron-left"
            size={30}
          />
        </TouchableOpacity>
        <Text style={this.s.headerTitle}>{this.props?.title}</Text>
      </View>
    );
  }
}

export default Header;
