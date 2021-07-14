import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/MaterialIcons';

class SlideTitle extends Component {
  constructor() {
    super();
    this.state = {
      title: [
        {title: 'Detail Pesanan'},
        {title: 'Bayar Pesanan'},
        {title: 'Konfirmasi Pesanan'},
      ],
    };
    this.s = require('../../../styles');
  }
  render() {
    return (
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEnabled={true}
          contentContainerStyle={this.s.titleListContainer}
          data={this.state.title}
          renderItem={({item, index}) => {
            return (
              <>
                <View style={this.s.indexContainer}>
                  <Icon2 name="circle" size={30} color="#335997" />
                  <Text style={this.s.indexText}>{index+1}</Text>
                </View>
                <Text style={this.s.titleText}>{item.title}</Text>
                {index<this.state.title.length-1&&(<Icon name="minus" color="#335997" size={23} style={this.s.minusIcon}/>)}
                
              </>
            );
          }}
          keyExtractor={item => item.title}
        />
      </View>
    );
  }
}

export default SlideTitle;
