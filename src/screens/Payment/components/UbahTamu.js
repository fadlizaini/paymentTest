import React, {Component} from 'react';
import {
  Text,
  View,
  Modal,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import Header from '../../../components/Header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Picker} from '@react-native-picker/picker';

class UbahTamu extends Component {
  constructor(props) {
    super(props);
    this.state = {tamu: props.tamu};
    this.s = require('../../../styles');
  }

  render() {
    return (
      <Modal
        visible={this.props?.visible}
        setVisible={this.props?.setVisible}
        title={'Tambah Data Tamu'}>
        <Header onPress={this.props.setVisible} />
        <View style={this.s.modalContentContainer}>
          <Text style={this.s.modalTitle}>Data Tamu</Text>
          <FlatList
            scrollEnabled={true}
            data={this.state.tamu}
            contentContainerStyle={this.s.tamuList}
            keyExtractor={(item,index)=>index}
            renderItem={({item, index}) => (
              <View key={index} style={this.s.modalTamuContainer}>
                <View key={index} style={this.s.genderContainer}>
                  <Picker
                    selectedValue={item.gender}
                    dropdownIconColor="#335997"
                    itemStyle={{color: '#335997'}}
                    style={{height: '100%', width: 105}}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({
                        tamu: [
                          ...this.state.tamu.slice(0, index),
                          {...item, gender: itemValue},
                          ...this.state.tamu.slice(index + 1),
                        ],
                      })
                    }
                    mode="dropdown">
                    <Picker.Item label="Tn." value="male" />
                    <Picker.Item label="Ny." value="female" />
                  </Picker>
                </View>
                <View style={this.s.inputContainer}>
                  <TextInput
                    style={{fontSize: 15, color: '#335997'}}
                    onChangeText={text =>
                      this.setState({
                        tamu: [
                          ...this.state.tamu.slice(0, index),
                          {...item, name: text},
                          ...this.state.tamu.slice(index + 1),
                        ],
                      })
                    }
                    value={item.name}
                  />
                </View>
                <TouchableOpacity
                  style={this.s.deleteIcon}
                  onPress={() =>
                    this.setState(...this.state.tamu.splice(index, 1))
                  }>
                  <Icon name="delete" size={33} color={'red'} />
                </TouchableOpacity>
              </View>
            )}></FlatList>
       
          <TouchableOpacity
            onPress={() =>
              this.setState({
                tamu: [...this.state.tamu, {gender: 'male', name: ''}],
              })
            }>
            <Text style={this.s.tambah}>+ Tambah Data Tamu</Text>
          </TouchableOpacity>
          
        </View>
        <TouchableOpacity
            style={this.s.simpanButton}
            onPress={() => {
              this.props.updateTamu(this.state.tamu);
              this.props.setVisible(false);
            }}>
            <Text style={this.s.headerTitle}>Simpan</Text>
          </TouchableOpacity>
      </Modal>
    );
  }
}

export default UbahTamu;
