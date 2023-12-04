import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Image, Text, View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App';
import {WebView} from 'react-native-webview';
//import Getjsonfile from '../Getjsonfile';
//import Countnumber from '../Countnumber';
import Callapi from '../Callapi';
import ApiATM from '../ApiATM';
import ProfilePage from '../Profile';
import HomePage from '../HomePage';

const Tab = createBottomTabNavigator();
const myMap = require('../peta/map.html');

// Form input dari github pages
const formInput = 'https://alipiaputri.github.io/pgpbl-reactnative12/';

//Peta web dari github page
const petaWeb = 'https://alipiaputri.github.io/pgpbl-reactnative12/map.html';

function HomeScreen() {
  return (
    <View>
      <HomePage />
    </View>
  );
}
function MapsScreen() {
  return <WebView source={{uri: petaWeb}} />;
}
function UserScreen() {
  return (
    <View>
      <ProfilePage />
    </View>
  );
}
function AddDataScreen() {
  return <WebView source={{uri: formInput}} />;
}
function ListDataScreen() {
  return (
    <View>
      <ApiATM />
    </View>
  );
}

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#00A9FF', // Ganti dengan warna yang diinginkan
            borderTopLeftRadius: 15, // Tumpulkan sudut kiri atas
            borderTopRightRadius: 15, // Tumpulkan sudut kanan atas
          },
          tabBarActiveTintColor: '#FFA41B', // Ganti dengan warna teks tab yang aktif
          tabBarInactiveTintColor: 'white', // Ganti dengan warna teks tab yang tidak aktif
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Map"
          component={MapsScreen}
          options={{
            tabBarLabel: 'Map',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="map-marked-alt" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Add Data"
          component={AddDataScreen}
          options={{
            tabBarLabel: 'Add Data',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="plus-circle" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="List Data"
          component={ListDataScreen}
          options={{
            tabBarLabel: 'List ATM',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="list-alt" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={UserScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="user-circle" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    paddingVertical: 12,
    color: '#3081d0',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 7,
  },
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'stretch',
  },
  listitems: {
    padding: 20,
    alignItems: 'center',
  },
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    color: '#3081d0',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 7,
    padding: 20,
    backgroundColor: '#fff',
  },
});

export default MyTabs;
