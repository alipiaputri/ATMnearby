import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
} from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import {SafeAreaView} from 'react-native-safe-area-context';

const ApiATM = () => {
  const jsonUrl =
    'https://script.google.com/macros/s/AKfycbyZofTSlFuMFRvXBr9R5p6_obvtD6Vi-CbXARWgbJWEQ4zGekVxV9cnnoA-1bCsWPBN8w/exec';
  const [isLoading, setLoading] = useState(true);
  const [dataUser, setDataUser] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(jsonUrl)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setDataUser(json);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  function refreshPage() {
    setLoading(true);
    fetch(jsonUrl)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setDataUser(json);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="500px" color="#3081d0" />
        </View>
      ) : (
        <>
          <Text style={styles.title}>ATM Nearby</Text>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search ATM..."
              onChangeText={text => setSearchTerm(text)}
              value={searchTerm}
            />
            <TouchableOpacity
              style={styles.searchIcon}
              onPress={() => console.log('Search pressed')}>
              <Fontawesome5 name="search" size={20} color="#3081d0" />
            </TouchableOpacity>
          </View>
          <FlatList
            data={dataUser.filter(item =>
              item.nama.toLowerCase().includes(searchTerm.toLowerCase()),
            )}
            onRefresh={refreshPage}
            refreshing={refresh}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <TouchableOpacity
                accessibilityRole="button"
                onPress={() => {
                  Linking.openURL(
                    `google.navigation:q=${item.latitude},${item.longitude}`,
                  );
                }}
                style={styles.linkContainer}>
                <View style={styles.card}>
                  <View style={styles.avatar}>
                    <Fontawesome5 name="landmark" size={50} color="#00A9FF" />
                  </View>
                  <View>
                    <Text style={styles.cardtitle}>{item.nama}</Text>
                    <Text style={styles.text}>{item.alamat}</Text>
                  </View>
                  <View style={styles.directionsIcon}>
                    <Fontawesome5 name="directions" size={20} color="#E14D2A" />
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 220,
    backgroundColor: 'white',
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
  avatar: {
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 3,
  },
  cardtitle: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingStart: 15,
    color: 'black',
    shadowOpacity: 0.4,
  },
  card: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: 10,
    paddingEnd: 5,
    paddingBottom: 10,
    borderRadius: 10,
    backgroundColor: '#EEF5FF',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 1.41,
    elevation: 2,
    marginHorizontal: 20,
    marginVertical: 3,
  },
  directionsIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    maxWidth: '80%',
    fontSize: 15,
    textAlign: 'left',
    paddingStart: 15,
  },
  linkContainer: {
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#3081d0',
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  searchIcon: {
    padding: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 400,
  },
});

export default ApiATM;
