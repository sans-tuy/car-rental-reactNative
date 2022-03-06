import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import Navigasi from '../../component/navigation';

const Akun = ({onAkun, onDaftar, onHome}) => {
  const uri = {
    Akun: require('../../assets/icon/fi_user_active.jpg'),
    Home: require('../../assets/icon/fi_home.jpg'),
    Daftar: require('../../assets/icon/fi_list.jpg'),
    text1: {
      fontSize: 12,
      color: '#8A8A8A',
    },
    text2: {
      fontSize: 12,
      color: '#8A8A8A',
    },
    text3: {
      fontSize: 12,
      color: 'blue',
    },
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>Akun</Text>
        </View>
        <View style={styles.imageWrapper}>
          <Image source={require('../../assets/icon/register.jpg')} />
          <Text style={styles.text}>
            Upss kamu belum memiliki akun. Mulai buat akun agar transaksi di BCR
            lebih mudah
          </Text>
          <Pressable
            style={styles.button}
            onPress={() => alert('Maaf Fitur Belum Tersedia')}>
            <Text style={styles.textButton}>Register</Text>
          </Pressable>
        </View>
      </View>
      <View>
        <Navigasi
          Akun={uri.Akun}
          Daftar={uri.Daftar}
          Home={uri.Home}
          text1={uri.text1}
          text2={uri.text2}
          text3={uri.text3}
          onAkun={onAkun}
          onDaftar={onDaftar}
          onHome={onHome}
        />
      </View>
    </View>
  );
};

export default Akun;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    paddingLeft: 16,
    marginTop: 20,
  },
  imageWrapper: {
    alignItems: 'center',
    // backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontWeight: '300',
    textAlign: 'center',
  },
  textButton: {
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#5CB85F',
    width: 81,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    marginTop: 16,
  },
});
