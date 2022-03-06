import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import IconMenu from '../../component/iconMenu';
import CardMobil from '../../component/cardMobil';
import Navigasi from '../../component/navigation';

const Home = ({onAkun, onDaftar, onHome}) => {
  const uri = {
    Akun: require('../../assets/icon/fi_user.jpg'),
    Home: require('../../assets/icon/fi_home_active.jpg'),
    Daftar: require('../../assets/icon/fi_list.jpg'),
    text1: {
      fontSize: 12,
      color: 'blue',
    },
    text2: {
      fontSize: 12,
      color: '#8A8A8A',
    },
    text3: {
      fontSize: 12,
      color: '#8A8A8A',
    },
  };
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.top}>
            <View style={styles.subTop}>
              <View>
                <Text style={{fontSize: 12}}>Hi, Sanusi</Text>
                <Text style={{fontWeight: 'bold'}}>Surabaya, East Java</Text>
              </View>
              <Image source={require('../../assets/icon/profile.png')} />
            </View>
            <View style={styles.bannerWrapper}>
              <Image
                style={styles.banner}
                source={require('../../assets/icon/Banner.jpg')}
              />
            </View>
          </View>
          <View style={styles.bottom}>
            <View style={{alignItems: 'center'}}>
              <View style={styles.menuWrapper}>
                <IconMenu
                  title="Sewa Mobil"
                  url={require('../../assets/icon/fi_truck.png')}
                />
                <IconMenu
                  title="Oleh - oleh"
                  url={require('../../assets/icon/fi_box.png')}
                />
                <IconMenu
                  title="Penginapan"
                  url={require('../../assets/icon/fi_key.png')}
                />
                <IconMenu
                  title="Wisata"
                  url={require('../../assets/icon/fi_camera.png')}
                />
              </View>
            </View>

            <Text style={styles.titleScroll}>Daftar Mobil Pilihan</Text>
            <CardMobil />
            <CardMobil />
            <CardMobil />
            <CardMobil />
            <CardMobil />
          </View>
        </View>
      </ScrollView>
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

export default Home;

const styles = StyleSheet.create({
  top: {
    backgroundColor: '#D3D9FD',
    height: '15%',
    position: 'relative',
  },
  bottom: {
    backgroundColor: 'white',
    marginTop: 80,
    marginBottom: 80,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  menuWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  titleScroll: {
    fontWeight: 'bold',
    marginTop: 20,
    paddingHorizontal: 15,
  },
  scroll: {
    marginTop: 10,
    width: '100%',
    height: '38%',
    marginBottom: 0,
  },
  subTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  banner: {
    width: undefined,
    height: undefined,
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  bannerWrapper: {
    width: '90%',
    height: 120,
    position: 'absolute',
    left: 20,
    bottom: -60,
  },
});
