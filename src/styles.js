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
  },
  titleText: {
    textAlignVertical: 'center',
    marginBottom: 3,
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
  minusIcon: {margin:5, alignSelf:'center'},
});
