import React from 'react';
import { getGray, getOrange, COLOR_TYPES } from '../utils/theme';
import { View, Text, StyleSheet } from 'react-native';

const Footer = ({ station }) => (
  <View style={styles.container}>
    {station ? <Text style={styles.title}>CURRENTLY PLAYING</Text> : null}
    {station ? <Text style={styles.content}>{station}</Text> : null}
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    height: 100,
    paddingBottom: 30,
    paddingTop: 10,
    alignItems: 'center',
    backgroundColor: getGray(COLOR_TYPES.dark),
    borderTopWidth: 1,
    borderTopColor: getGray(COLOR_TYPES.light),
  },
  title: {
    color: getOrange(COLOR_TYPES.dark),
    fontSize: 18,
    fontWeight: '600',
  },
  content: {
    color: getGray(COLOR_TYPES.light),
    fontSize: 28,
  },
})

export default Footer;
