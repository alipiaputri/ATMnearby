import React from 'react';
import mahasiswa from './data/mahasiswa.json';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';

const Getjsonfile = () => {
  return (
    <FlatList
      data={mahasiswa}
      renderItem={({item}) => (
        <View style={styles.card}>
          <View style={styles.avatar}>
            <Fontawesome5 name={item.icon} size={50} color={item.color} />
          </View>
          <View>
            <Text style={styles.cardtitle}>{item.nama}</Text>
            <Text>NIM: {item.nim}</Text>
            <Text>Kelas: {item.kelas}</Text>
            <Text>Jenis Kelamin: {item.jeniskelamin}</Text>
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    paddingVertical: 12,
    backgroundColor: '#333',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  avatar: {
    borderRadius: 100,
    width: 80,
  },
  cardtitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'row',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#FFFBF5',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginHorizontal: 20,
    marginVertical: 7,
  },
});

export default Getjsonfile;
