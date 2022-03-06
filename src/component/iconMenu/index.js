import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const IconMenu = props => {
  return (
    <View style={styles.menuWrapper}>
      <View style={styles.container}>
        <Image style={styles.icon} source={props.url} />
      </View>
      <Text style={styles.text}>{props.title} </Text>
    </View>
  );
};

export default IconMenu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DEF1DF',
    height: 56,
    width: 56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
  menuWrapper: {
    justifyContent: 'center',
    maxWidth: 65,
  },
  text: {
    fontSize: 10,
    fontFamily: 'Helvetica',
    fontWeight: '300',
    textAlign: 'center',
    marginTop: 5,
  },
});
