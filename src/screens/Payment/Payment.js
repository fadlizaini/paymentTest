import React, {Component} from 'react';
import {View, Alert, Text, TouchableOpacity} from 'react-native';
import SlideTitle from './components/SlideTitle';
import servicePayment from '../../services/servicePayment';
import DetailPesanan from './components/DetailPesanan';
import DetailPemesan from './components/DetailPemesan';
import DataTamu from './components/DataTamu';
import UbahTamu from './components/UbahTamu';
class Payment extends Component {
  constructor() {
    super();
    // this.getPayment = this.getPayment.bind(this);
    this.state = {
      detail: {},
      tamu: [{gender: 'male', name: 'Fadli'}],
      visible: false,
    };
    this.s = require('../../styles');
  }
  getPayment = () => {
    servicePayment
      .getPayment()
      .then(response => {
        this.setState({detail: response.data.values.data.hotel_booking_detail});
        // this.getImage(
        //   JSON.parse(
        //     response.data.values.data.hotel_booking_detail.bh_hotel_images,
        //   ),
        // );
        console.log(JSON.stringify(response.data.values.data, null, 2));
      })
      .catch(e => {
        Alert.alert('Error', e.response.data.message);
      });
  };

  updateTamu = e => {
    this.setState({tamu: e});
  };

  getImage = uri => {
    // console.log("uri gambar",uri);
    servicePayment
      .getImage(uri[0].Thumbnail)
      .then(r => {
        console.log('gambaaar', r.data);
      })
      .catch(e => {
        // Alert.alert('Error get gambar', e.response.data.message);
        // console.log(e.response);
      });
  };
  componentDidMount() {
    this.getPayment();
  }

  render() {
    return (
      <View>
        <SlideTitle />
        <DetailPesanan
          images={this.state.detail.bh_hotel_images}
          detail={this.state.detail.bh_chosen_hotel_obj}
        />
        <DetailPemesan
          data={this.state.detail.bh_passenger_obj?.bh_contact_user}
        />
        <DataTamu tamu={this.state.tamu} />
        <TouchableOpacity onPress={() => this.setState({visible: true})}>
          <Text style={this.s.textUbahTamu}>Ubah Data Tamu</Text>
        </TouchableOpacity>
        <UbahTamu
          updateTamu={this.updateTamu}
          tamu={this.state.tamu}
          visible={this.state.visible}
          setVisible={() => this.setState({visible: false})}
        />
      </View>
    );
  }
}

export default Payment;
