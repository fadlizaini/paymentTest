import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import Moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class DetailPesanan extends Component {
  constructor() {
    super();
    this.s = require('../../../styles');
  }

  render() {
    Moment.locale('us');
    // console.log('detailll', this.props.detail);
    return (
      <View style={this.s.detailContainer}>
        <Text>Detail Pesanan</Text>
        <View style={this.s.hotel}>
          <Image
            style={this.s.hotelImage}
            source={{
              uri: 'https://pix10.agoda.net/hotelImages/5817296/0/835eb8b2bf5880a4e9dc3e5bb7f0669e.jpg?s=300x300',
            }}
          />
          <View style={this.s.hotelDetail}>
            <Text style={this.s.hotelName}>
              {this.props.detail?.bh_chosen_hotel_param.hotel_name}
            </Text>
            <Text style={this.s.hotelPhrase}>
              {this.props.detail?.bh_chosen_hotel_room.room_grade}
            </Text>
            <Text style={this.s.hotelPhrase}>
              {this.props.detail?.bh_chosen_hotel_room.meal_code}
            </Text>
          </View>
        </View>
        <View style={this.s.checkIn}>
          <Text>Check-In</Text>
          <Text style={this.s.tanggal}>
            {Moment(this.props.detail?.bh_chosen_hotel_param.check_in).format('DD MMMM yyy')}
          </Text>
        </View>
        <View style={this.s.checkIn}>
          <Text>Check-Out</Text>
          <Text style={this.s.tanggal}>
            {Moment(this.props.detail?.bh_chosen_hotel_param.check_out).format('DD MMMM yyy')}
          </Text>
        </View>
        <View style={this.s.orenCon}>
          <Icon name="cash-refund" color="#FF8238" size={18}/>
         <Text style={this.s.orenText}>Dapat direfund jika dibatalkan</Text>
        </View>
      </View>
    );
  }
}

export default DetailPesanan;
