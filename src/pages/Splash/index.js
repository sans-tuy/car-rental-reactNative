import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => navigation.replace('MainApp'), 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>BCR</Text>
        <Text style={styles.title}>Binar Car Rental</Text>
      </View>
      <View style={styles.bottom}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={require('../../assets/icon/mobil.png')}
          />
        </View>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#091B6F',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  top: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  bottom: {
    backgroundColor: '#D3D9FD',
    height: '20%',
    borderTopLeftRadius: 60,
    position: 'relative',
  },
  image: {
    width: undefined,
    height: undefined,
    flex: 1,
    resizeMode: 'contain',
  },
  imageWrapper: {
    width: 360,
    height: 208,
    position: 'absolute',
    top: -88,
    left: 7,
  },
});
