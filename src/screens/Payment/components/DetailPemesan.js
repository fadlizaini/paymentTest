import React, {Component} from 'react';
import {Text, View} from 'react-native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

class DetailPemesan extends Component {
  constructor() {
    super();
    this.state = {
      radio_props: [
        {label: 'saya memesan untuk diri sendiri', value: 0},
        {label: 'saya memesan untuk orang lain', value: 1},
      ],
      selected: 0,
    };
    this.s = require('../../../styles');
  }

  render() {
    return (
      <View style={this.s.pemesanContainer}>
        <Text>Detail Pemesan</Text>
        <View style={this.s.pemesan}>
          <View style={this.s.kiri}>
            <Text>{this.props.data?.name}</Text>
            <Text style={this.s.email}>{this.props.data?.email}</Text>
            <Text style={this.s.email}>{this.props.data?.phone}</Text>
          </View>
          <View style={this.s.kanan}>
            <Text style={this.s.textBiru}>Ubah</Text>
          </View>
        </View>
        <View style={this.s.radioForm}>
          <RadioForm animation={true}>
            {this.state.radio_props.map((obj, i) => (
              <RadioButton labelHorizontal={true} key={i}>
                {/*  You can set RadioButtonLabel before RadioButtonInput */}
                <RadioButtonInput
                  obj={obj}
                  index={i}
                  borderWidth={1}
                  isSelected={this.state.selected === i}
                  buttonSize={12}
                  buttonOuterSize={17}
                  onPress={() => this.setState({selected: i})}
                  buttonInnerColor={'#335997'}
                  buttonOuterColor={'#335997'}
                />
                <RadioButtonLabel
                  obj={obj}
                  index={i}
                  labelHorizontal={true}
                  labelWrapStyle={{}}
                  labelStyle={{fontSize:11}}
                />
              </RadioButton>
            ))}
          </RadioForm>
        </View>
      </View>
    );
  }
}

export default DetailPemesan;
