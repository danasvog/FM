import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { getGray, COLOR_TYPES } from '../utils/theme';
import { plus, minus } from '../images';

const FmCard = ({ icon, name, fm, onPress, selectedStation }) => (
  <View style={styles.container}>
    {selectedStation === name ? (
      <View style={styles.fmCard}>
        <TouchableOpacity>
          <Image style={styles.actionButton} source={minus} />
        </TouchableOpacity>
        <Image style={styles.fmIcon} source={icon} />
        <TouchableOpacity>
          <Image style={styles.actionButton} source={plus} />
        </TouchableOpacity>
      </View>
    ) : null}
    <TouchableOpacity onPress={() => onPress(name)}>
      <View style={styles.fmRow}>
        <Text style={styles.fmName}>{name}</Text>
        <Text style={styles.fmNumber}>{fm}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  fmCard: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  fmRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: getGray(COLOR_TYPES.light),
    paddingTop: 20,
    paddingBottom: 20,
  },
  actionButton: {
    height: 30,
    width: 30,
  },
  fmIcon: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  fmName: {
    color: getGray(COLOR_TYPES.light),
    fontSize: 26,
  },
  fmNumber: {
    color: getGray(COLOR_TYPES.light),
    fontSize: 26,
    fontWeight: '800',
  },
})

export default FmCard;
