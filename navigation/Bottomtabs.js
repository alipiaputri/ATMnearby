import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Image, Text, View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App';
import {WebView} from 'react-native-webview';
import Getjsonfile from '../Getjsonfile';
import Countnumber from '../Countnumber';
import Callapi from '../Callapi';

const Tab = createBottomTabNavigator();
const myMap = require('../peta/map.html');

function HomeScreen() {
  return (
    <ScrollView>
      <View>
        <Text style={styles.title}>My Maps</Text>
        <View style={styles.listitem}>
          <Image source={require('../peta/peta1.png')} style={styles.image} />
          <Text style={styles.caption}>Peta Batas DAS Nanga Panda</Text>
        </View>
        <View style={styles.listitem}>
          <Image source={require('../peta/peta2.png')} style={styles.image} />
          <Text style={styles.caption}>Peta Orde Sungai Nanga Panda</Text>
        </View>
        <View style={styles.listitem}>
          <Image source={require('../peta/peta3.png')} style={styles.image} />
          <Text style={styles.caption}>
            Peta Kemiringan Lereng DAS Nanga Panda
          </Text>
        </View>
        <View style={styles.listitem}>
          <Image source={require('../peta/peta4.png')} style={styles.image} />
          <Text style={styles.caption}>Peta Perwilayahan DAS Nanga Panda</Text>
        </View>
      </View>
    </ScrollView>
  );
}
function MapsScreen() {
  return <WebView source={myMap} style={{margin: 5}} />;
}
function ProfileScreen() {
  return (
    <View>
      <Portofolio />
    </View>
  );
}
function MahasiswaScreen() {
  return (
    <View>
      <Getjsonfile />
    </View>
  );
}
function CountScreen() {
  return (
    <View>
      <Countnumber />
    </View>
  );
}
function ApiScreen() {
  return (
    <View>
      <Callapi />
    </View>
  );
}

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
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
          name="Maps"
          component={MapsScreen}
          options={{
            tabBarLabel: 'Maps',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="map" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="user" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Mahasiswa"
          component={MahasiswaScreen}
          options={{
            tabBarLabel: 'Mahasiswa',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="users" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Count"
          component={CountScreen}
          options={{
            tabBarLabel: 'Count',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="calculator" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Callapi"
          component={ApiScreen}
          options={{
            tabBarLabel: 'API',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="fire" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'stretch',
  },
  listitem: {
    padding: 10,
    alignItems: 'center',
  },
  caption: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default MyTabs;
