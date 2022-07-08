import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IRouterProps} from '../Home'

const Main = ({navigation}: IRouterProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>Main Screen</Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.button}>
        <Text style={styles.buttonText}>to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
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

export default Main;
