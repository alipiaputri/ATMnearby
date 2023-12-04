import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {Card, Title, Paragraph, Avatar} from 'react-native-paper';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';

const ProfilePage = () => {
  const openLinkedIn = () => {
    Linking.openURL('https://www.linkedin.com/in/alipiaputri');
  };

  const openInstagram = () => {
    Linking.openURL('https://www.instagram.com/alipiaapr');
  };

  const openGithub = () => {
    Linking.openURL('https://github.com/alipiaputri');
  };

  return (
    <View style={styles.container}>
      {/* Header with Background Image */}
      <ImageBackground
        source={require('./src/backgroud-profile.png')}
        style={styles.header}
        imageStyle={styles.headerImage}></ImageBackground>

      {/* Card with Profile Information */}
      <Card style={styles.card}>
        {/* Profile Image */}
        <Avatar.Image
          size={100}
          source={require('./src/alipi.jpg')}
          style={styles.avatar}
        />
        {/* Profile Name and Bio */}
        <Title style={styles.profileName}>Alipia Putri Riyanti</Title>
        <Paragraph style={styles.profileBio}>Software Developer</Paragraph>
        <Card.Content>
          <Title style={styles.cardTitle}>Additional Info</Title>
          <Paragraph style={styles.Paragraph}>
            Halo! Saya adalah Alipia Putri Riyanti, mahasiswi semester 5 di
            jurusan Sistem Informasi Geografis, dan dengan antusias saya
            hadirkan aplikasi "ATM Nearby". Aplikasi ini tidak hanya memberikan
            informasi lokasi ATM, tetapi juga menyediakan fitur-fitur navigasi,
            pencarian, dan penambahan data ATM. Saya berharap aplikasi ini
            memberikan kemudahan bagi pengguna sehari-hari. Terima kasih atas
            dukungan dan kesempatannya!
          </Paragraph>
          <Paragraph style={styles.Paragraph}>
            Temukan saya di media sosial berikut:
          </Paragraph>
          <View style={styles.featureContainer}>
            {/* Container baris pertama */}
            <View style={styles.featureRow}></View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            {/* LinkedIn Icon */}
            <TouchableOpacity
              onPress={openLinkedIn}
              style={{marginHorizontal: 10}}>
              <Fontawesome5 name="linkedin" size={60} color="#0077b5" />
            </TouchableOpacity>

            {/* Instagram Icon */}
            <TouchableOpacity
              onPress={openInstagram}
              style={{marginHorizontal: 10}}>
              <Fontawesome5 name="instagram" size={60} color="#bc2a8d" />
            </TouchableOpacity>

            {/* Github Icon */}
            <TouchableOpacity
              onPress={openGithub}
              style={{marginHorizontal: 10}}>
              <Fontawesome5 name="github" size={60} color="black" />
            </TouchableOpacity>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 110,
    backgroundColor: 'white',
    paddingBottom: 100,
  },
  card: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#EEF5FF',
    shadowColor: '#000',
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: -10,
    paddingBottom: 40,
  },

  Paragraph: {
    textAlign: 'center',
    paddingBottom: 10,
  },

  cardTitle: {
    fontSize: 17,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 2,
    paddingHorizontal: 110,
    paddingTop: 5,
  },

  avatar: {
    backgroundColor: '#EEF5FF',
    marginTop: 'top',
    justifyContent: 'center',
    paddingHorizontal: 130,
    paddingTop: 30,
  },

  header: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    paddingHorizontal: 95,
    paddingTop: 20,
  },
  profileBio: {
    fontSize: 16,
    color: '#FFA41B',
    marginBottom: 10,
    paddingHorizontal: 110,
    paddingTop: 5,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  icon: {
    marginHorizontal: 20,
  },
});

export default ProfilePage;
