import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const CardMobil = props => {
  return (
    <View style={styles.cardWrapper}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{marginRight: 20}}>
          <Image source={require('../../assets/icon/mobil_kecil.png')} />
        </View>
        <View>
          <Text style={{marginBottom: 5}}>Daihatsu Xenia</Text>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flexDirection: 'row',
                marginRight: 20,
                alignItems: 'center',
              }}>
              <Image source={require('../../assets/icon/fi_users.png')} />
              <Text style={{fontSize: 9, color: '#8A8A8A', marginLeft: 4}}>
                4
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={require('../../assets/icon/fi_briefcase.png')} />
              <Text style={{fontSize: 9, color: '#8A8A8A', marginLeft: 4}}>
                2
              </Text>
            </View>
          </View>
          <Text style={{color: '#5CB85F', marginTop: 5}}>RP 230.000</Text>
        </View>
      </View>
    </View>
  );
};

export default CardMobil;

const styles = StyleSheet.create({
  cardWrapper: {
    borderWidth: 0.25,
    height: 98,
    marginHorizontal: 16,
    marginTop: 12,
    borderColor: '#8A8A8A',
    padding: 10,
    borderRadius: 5,
  },
});
