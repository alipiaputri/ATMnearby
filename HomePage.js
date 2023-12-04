import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomePage = () => {
  const navigation = useNavigation();

  const navigateToProfil = () => {
    // Ganti 'ProfilePage' dengan nama halaman profil yang sebenarnya
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ATM Nearby</Text>
      <Image
        source={require('./src/atm.png')} // Ganti dengan path menuju file logo Anda
        style={styles.logo}
      />

      <View style={styles.greetingContainer}>
        <Text style={styles.greeting}>
          Hi! Selamat datang{' '}
          <TouchableOpacity onPress={navigateToProfil}>
            <Text style={styles.linkText}>Alipia Putri</Text>
          </TouchableOpacity>
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.details}>Details</Text>
        <Text style={{lineHeight: 22, textAlign: 'justify', paddingRight: 4}}>
          Aplikasi "ATM Nearby" adalah aplikasi yang dirancang untuk membantu
          pengguna menemukan lokasi ATM terdekat dengan mudah. ATM Nearby
          menyediakan beberapa fitur utama, seperti Informasi Persebaran Lokasi
          ATM, Menambahkan Data Persebaran ATM, Navigasi ATM, dan Pencarian ATM.
          Berikut merupakan empat menu yang disediakan pada pengembangan
          aplikasi "ATM Nearby":
        </Text>
        <Text style={styles.menu}>Menu</Text>

        {/* Container untuk 4 buah icon fitur */}
        <View style={styles.featureContainer}>
          {/* Container baris pertama */}
          <View style={styles.featureRow}>
            <TouchableOpacity style={styles.featureItem}>
              <Image
                source={require('./src/map.png')} // Ganti dengan path menuju file ikon peta Anda
                style={{width: 50, height: 50, alignSelf: 'center'}} // Sesuaikan ukuran ikon sesuai kebutuhan
              />
              <Text style={{textAlign: 'justify', fontWeight: 'bold'}}>
                Map
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.featureItem}>
              <Image
                source={require('./src/add-pointer.png')} // Ganti dengan path menuju file ikon peta Anda
                style={{width: 50, height: 50, alignSelf: 'center'}} // Sesuaikan ukuran ikon sesuai kebutuhan
              />
              <Text style={{textAlign: 'justify', fontWeight: 'bold'}}>
                Add Data ATM
              </Text>
            </TouchableOpacity>
          </View>

          {/* Container baris kedua */}
          <View style={styles.featureRow}>
            <TouchableOpacity style={styles.featureItem}>
              <Image
                source={require('./src/list.png')} // Ganti dengan path menuju file ikon peta Anda
                style={{width: 50, height: 50, alignSelf: 'center'}} // Sesuaikan ukuran ikon sesuai kebutuhan
              />
              <Text style={{textAlign: 'justify', fontWeight: 'bold'}}>
                List Location ATM
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.featureItem}
              onPress={navigateToProfil}>
              <Image
                source={require('./src/user.png')} // Ganti dengan path menuju file ikon peta Anda
                style={{width: 50, height: 50, alignSelf: 'center'}} // Sesuaikan ukuran ikon sesuai kebutuhan
              />
              <Text style={{textAlign: 'justify', fontWeight: 'bold'}}>
                Profile
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 110,
    backgroundColor: 'white',
    paddingBottom: 100,
  },
  title: {
    paddingVertical: 12,
    paddingBottom: 10,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#00A9FF',
    shadowColor: '#000',
    borderBottomLeftRadius: 15, // Tumpulkan sudut kiri atas
    borderBottomRightRadius: 15, // Tumpulkan sudut kanan atas
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  greetingContainer: {
    flexDirection: 'column-reverse',
    marginHorizontal: 20,
    marginVertical: 7,
  },
  greeting: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'left',
    backgroundColor: 'white',
    shadowColor: '#000',
  },
  linkText: {
    color: '#FFA41B',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'left',
    backgroundColor: 'white',
    textDecorationLine: 'underline',
    shadowColor: '#000',
    marginVertical: -4,
  },
  card: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingEnd: 5,
    paddingBottom: 30,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#EEF5FF',
    shadowColor: '#000',
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 7,
    padding: 20,
  },
  details: {
    textAlign: 'left',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
    paddingBottom: 10,
  },
  menu: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
  featureContainer: {
    marginTop: 20,
  },
  featureRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  featureItem: {
    flex: 1,
    backgroundColor: '#FFE5B4',
    borderRadius: 8,
    padding: 15,
    marginHorizontal: 5,
    alignItems: 'center',
  },
});

export default HomePage;
