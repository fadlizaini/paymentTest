import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

class DataTamu extends Component {
  constructor() {
    super();
    this.s = require('../../../styles');
  }

  render() {
    return (
      <View style={this.s.tamuContainer}>
        <Text>Data Tamu</Text>

        {/* {this.props.tamu?.map((item, index) => (
          <View style={this.s.namaTamu}>
            <Icon name={item.gender} size={20} style={{marginRight: 15}} />
            <Text>{item.gender==="male"?"Tn.":"Ny."} {item.name}</Text>
          </View>
        ))} */}
        <FlatList
        scrollEnabled={true}
          data={this.props.tamu}
          contentContainerStyle={this.s.tamuList}
          renderItem={({item, index}) => (
            <View key={index} style={this.s.namaTamu}>
              <Icon name={item.gender} size={20} style={{marginRight: 15}} />
              <Text>
                {item.gender === 'male' ? 'Tn.' : 'Ny.'} {item.name}
              </Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

export default DataTamu;
