import React from 'react';
import {NavigationProp} from '@react-navigation/native';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export interface IRouterProps {
  navigation: NavigationProp<any, any>;
}



const Home = ({navigation}: IRouterProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>Home Screen</Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Main')}
        style={styles.button}>
        <Text style={styles.buttonText}>to Main</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  viewTitle: {marginTop: 20},
  title: {fontSize: 30, fontWeight: 'bold', color: '#20315f'},
  button: {
    backgroundColor: '#a1a1a1',
    padding: 20,
    width: '90%',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  buttonText: {fontWeight: 'bold', fontSize: 18, color: '#fff'},
});

export default Home;
