import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Navigasi from '../../component/navigation';
import CardMobil from '../../component/cardMobil';

const DaftarMobil = ({onAkun, onDaftar, onHome}) => {
  const uri = {
    Akun: require('../../assets/icon/fi_user.jpg'),
    Home: require('../../assets/icon/fi_home.jpg'),
    Daftar: require('../../assets/icon/fi_list_active.jpg'),
    text1: {
      fontSize: 12,
      color: '#8A8A8A',
    },
    text2: {
      fontSize: 12,
      color: 'blue',
    },
    text3: {
      fontSize: 12,
      color: '#8A8A8A',
    },
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>DaftarMobil</Text>
        </View>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.contentContainer}>
          <CardMobil />
          <CardMobil />
          <CardMobil />
          <CardMobil />
          <CardMobil />
        </ScrollView>
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

export default DaftarMobil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
  },
  scroll: {
    marginTop: 10,
  },
  contentContainer: {
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    paddingLeft: 16,
    marginTop: 20,
  },
});
