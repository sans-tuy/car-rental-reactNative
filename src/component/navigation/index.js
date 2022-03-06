import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';

const Navigasi = ({
  onAkun,
  onDaftar,
  onHome,
  Home,
  Daftar,
  Akun,
  text1,
  text2,
  text3,
}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onHome} style={styles.iconWrapper}>
        <Image style={styles.icon} source={Home} />
        <Text style={text1}>Home</Text>
      </Pressable>
      <Pressable onPress={onDaftar} style={styles.iconWrapper}>
        <Image style={styles.icon} source={Daftar} />
        <Text style={text2}>Daftar Mobil</Text>
      </Pressable>
      <Pressable onPress={onAkun} style={styles.iconWrapper}>
        <Image style={styles.icon} source={Akun} />
        <Text style={text3}>Akun</Text>
      </Pressable>
    </View>
  );
};

export default Navigasi;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    borderWidth: 0.3,
    borderColor: '#8A8A8A',
    shadowColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 10,
  },
  icon: {
    width: 24,
    height: 24,
    flex: 1,
    resizeMode: 'contain',
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
