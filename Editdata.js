import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, StyleSheet, Button, Alert} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {SafeAreaView} from 'react-native-safe-area-context';

const Callapi = () => {
  fetch(`http://10.0.2.2:3000/mahasiswa/${selectedUser.id}`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(json => {
      console.log(json);
      alert('Data tersimpan');
      setName('');
      setNim('');
      setKelas('');
      setJeniskelamin('');
      setColor('');
      setIcon('');
      refreshPage();
      FlatList.refresh();
    });
};

const selectItem = item => {
  setSelectedUser(item);
  setName(item.name);
  setNim(item.nim);
  setKelas(item.kelas);
  setJeniskelamin(item.jeniskelamin);
  setColor(item.color);
  setIcon(item.icon);
};

const submit = () => {
  const data = {
    name: name,
    nim: nim,
    kelas: kelas,
    jeniskelamin: jeniskelamin,
    color: color,
    icon: icon,
  };

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
    fetch(jsonUrl)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setDataUser(json);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }

  function deleteData(id) {
    fetch(jsonUrl + '/' + id, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        alert('Data terhapus');
        refreshPage();
      });
  }

  return (
    <SafeAreaView>
      <View>
        {isLoading ? (
          <View style={{alignItems: 'center', marginTop: 20}}>
            <Text style={styles.cardtitle}>Loading...</Text>
          </View>
        ) : (
          <View>
            <ScrollView>
              <View>
                <Text style={styles.title}>Edit Data Mahasiswa</Text>
                <View style={styles.form}>
                  <TextInput
                    placeholder="Nama"
                    value={name}
                    onChangeText={value => setName(value)}
                  />
                  <TextInput
                    placeholder="NIM"
                    value={nim}
                    onChangeText={value => setNim(value)}
                  />
                  <TextInput
                    placeholder="Kelas"
                    value={kelas}
                    onChangeText={value => setKelas(value)}
                  />
                  <TextInput
                    placeholder="Jenis Kelamin"
                    value={jeniskelamin}
                    onChangeText={value => setJeniskelamin(value)}
                  />
                  <TextInput
                    placeholder="Warna (HEX)"
                    value={color}
                    onChangeText={value => setColor(value)}
                  />
                  <TextInput
                    placeholder="Icon (Fontawesome 5)"
                    value={icon}
                    onChangeText={value => setIcon(value)}
                  />
                  <Button title="Edit" style={styles.button} onPress={submit} />
                </View>
              </View>
              <View style={styles.devider}></View>
              <FlatList
                style={{marginBottom: 10}}
                data={dataUser}
                onRefresh={() => {
                  refreshPage();
                }}
                refreshing={refresh}
                keyExtractor={({id}, index) => id}
                renderItem={({item}) => (
                  <View>
                    <TouchableOpacity onPress={() => selectItem(item)}>
                      <View style={styles.card}>
                        <View style={styles.avatar}>
                          <FontAwesome5
                            name={item.icon}
                            size={50}
                            color={item.color}
                          />
                        </View>
                        <View>
                          <Text style={styles.cardtitle}>{item.name}</Text>
                          <Text>{item.nim}</Text>
                          <Text>{item.kelas}</Text>
                          <Text>{item.jeniskelamin}</Text>
                        </View>
                        <View
                          style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'flex-end',
                          }}>
                          <FontAwesome5 name={'edit'} size={20} />
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
              />
            </ScrollView>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Callapi;
const styles = StyleSheet.create({
  title: {
    paddingVertical: 13,
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
    backgroundColor: 'white',
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
