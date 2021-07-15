'use strict';
import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
  //HEADER
  headerTitle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 17,
    // fontWeight:'bold'
  },
  headerContainer: {
    backgroundColor: '#335997',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIcon: {
    left: 10,
    position: 'absolute',
  },
  //SCREEN
  titleListContainer: {
    height: 50,
    alignItems: 'center',
    paddingHorizontal: 110,
    alignContent: 'center',
    backgroundColor: 'white',
  },
  titleText: {
    textAlignVertical: 'center',
    marginBottom: 3,
    fontSize: 15,
    margin: 5,
  },
  indexText: {
    color: 'white',
    position: 'absolute',
    textAlignVertical: 'center',
    margin: 5,
  },
  indexContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  minusIcon: {margin: 5, alignSelf: 'center'},
  //DETAIL PESANAN
  detailContainer: {backgroundColor: 'white', marginTop: 2, padding: 15},
  hotel: {
    width: '100%',
    padding: 5,
    height: 75,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    flexDirection: 'row',
  },
  hotelImage: {height: '100%', width: '100%', borderRadius: 10, flex: 1},
  hotelDetail: {
    height: '100%',
    width: '100%',
    flex: 4,
    paddingLeft: 15,
    paddingVertical: 5,
  },
  hotelName: {color: '#335997', fontSize: 12, fontWeight: 'bold'},
  hotelPhrase: {color: 'grey', fontSize: 11, marginTop: 5},
  checkIn: {flexDirection: 'row', marginTop: 10},
  tanggal: {textAlign: 'right', color: 'grey', fontSize: 10, flex: 1},
  orenCon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 3,
  },
  orenText: {color: '#FF8238', marginLeft: 7, fontSize: 12},

  //DETAIL PEMESAN
  pemesanContainer: {
    backgroundColor: 'white',
    marginTop: 2,
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  pemesan: {
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 5,
    height: 75,
    marginTop: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    flexDirection: 'row',
  },
  kiri: {
    flex: 5,
  },
  kanan: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  email: {
    color: 'grey',
    fontSize: 12,
    marginTop: 4,
  },
  email: {
    color: 'grey',
    fontSize: 12,
    marginTop: 4,
  },
  textBiru: {
    color: '#335997',
    textDecorationLine: 'underline',
  },

  radioForm: {
    marginTop: 10,
  },

  //DATA TAMU
  tamuContainer: {backgroundColor: 'white', padding: 15, paddingTop: 5, maxHeight:200},
  namaTamu: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 10,
    width: '100%',
    height: 37,
    marginTop: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  textUbahTamu: {
    color: '#335997',
    textDecorationLine: 'underline',
    paddingVertical: 5,
    paddingBottom: 20,
    paddingHorizontal: 15,
    textAlign: 'right',
    backgroundColor: 'white',
  },

  // Modal

  modalContentContainer: {
    padding: 15,
    maxHeight:"80%"

  },

  modalTitle: {
    fontWeight: 'bold',
    color: '#335997',
    fontSize: 17,
  },
  modalTamuContainer: {
    width: '100%',
    height: 45,
    marginTop: 5,
    flexDirection: 'row',
  },
  genderContainer: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flex: 6,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 10,
    marginHorizontal: 7,
    paddingLeft: 10,
  },
  deleteIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  simpanButton: {
    backgroundColor: '#FF8136',
    width: '90%',
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
  },
  tambah: {
    color: '#FF8238',
    fontSize: 12,
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginTop: 20,
  },
});
