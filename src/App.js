import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import { stations } from './store/stations';
import { getGray } from './utils/theme';
import Header from './components/Header';
import Footer from './components/Footer';
import FmCard from './components/FmCard';

export const App = () => {
  const [selectedStation, setStation] = useState('');

  const handleStationPress = name => {
    if (selectedStation !== name) {
      setStation(name);
    } else {
      setStation('');
    };
  };

  return (
    <View style={styles.appContainer}>
      <Header />
      <ScrollView style={styles.body}>
        {stations.map(station => (
          <FmCard
            key={station.name}
            icon={station.icon}
            name={station.name}
            fm={station.fm}
            selectedStation={selectedStation}
            onPress={handleStationPress}
          />
        ))}
      </ScrollView>
      <Footer station={selectedStation} />
    </View>
  )
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  body: {
    flex: 1,
    backgroundColor: getGray(),
  }
});
