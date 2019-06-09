import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import { getOrange, getNeutral } from '../utils/theme';
import { backArrow, switchIcon } from '../images';

const onBackClick = () => {
  console.log('Back button was clicked');
}
const onSwitchClick = () => {
  console.log('Switch button was clicked');
}

const Header = () => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onBackClick}>
      <Image style={styles.styledImage} source={backArrow} />
    </TouchableOpacity>
    <Text style={styles.styledText}>STATIONS</Text>
    <TouchableOpacity onPress={onSwitchClick}>
      <Image style={styles.styledImage} source={switchIcon} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  styledImage: {
    height: 24,
    width: 20,
  },
  styledText: {
    color: getNeutral(),
    fontSize: 20,
    fontWeight: '700',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: getOrange(),
  }
})

export default Header;
