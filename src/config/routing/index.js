import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../pages/Home';
import Akun from '../../pages/Akun';
import DaftarMobil from '../../pages/DaftarMobil';
import Splash from '../../pages/Splash';
import Navigasi from '../../component/navigation';

function HomeScreen({navigation}) {
  return (
    <Home
      onAkun={() => navigation.navigate('Akun')}
      onDaftar={() => navigation.navigate('DaftarMobil')}
      onHome={() => navigation.navigate('Home')}
    />
  );
}

function AkunScreen({navigation}) {
  return (
    <Akun
      onAkun={() => navigation.navigate('Akun')}
      onDaftar={() => navigation.navigate('DaftarMobil')}
      onHome={() => navigation.navigate('Home')}
    />
  );
}

function DaftarMobilScreen({navigation}) {
  return (
    <DaftarMobil
      onAkun={() => navigation.navigate('Akun')}
      onDaftar={() => navigation.navigate('DaftarMobil')}
      onHome={() => navigation.navigate('Home')}
    />
  );
}

function SplashScreen({navigation}) {
  return <Splash navigation={navigation} />;
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DaftarMobil"
        component={DaftarMobilScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Akun"
        component={AkunScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const Routing = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="MainApp"
          component={MainApp}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routing;
