/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default function RegistrationScreen({navigation}) {
  const [nama, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [alamat, setAlamat] = useState('');

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{flex: 1, width: '100%'}}
        keyboardShouldPersistTaps="always">
        <Text style={styles.title}>REGISTER</Text>

        <Text style={styles.label}>Username :</Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setName(text)}
          value={nama}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />

        <Text style={styles.label}>E-mail :</Text>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setEmail(text)}
          value={email}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Phone :</Text>
        <TextInput
          style={styles.input}
          placeholder="Phone"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setPhone(text)}
          value={phone}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Alamat :</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          placeholder="Alamat"
          onChangeText={(text) => setAlamat(text)}
          value={alamat}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />

        <View style={{alignItems: 'flex-end', marginRight: 30}}>
          <TouchableOpacity
            style={styles.buttonSubmit}
            onPress={() => onFooterLinkPress()}>
            <Text style={styles.buttonSearch}>Submit</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('List')}>
            <Text style={styles.buttonTitle}>List</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Form Register')}>
            <Text style={styles.buttonTitle}>Registrasi</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 40,
    marginTop: 7,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 20,
    marginTop: 30,
    fontWeight: 'bold',
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
  },
  button: {
    flex: 1,
    backgroundColor: '#3366FF',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 50,
    height: 60,
    width: 200,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonSubmit: {
    backgroundColor: '#DB2C3E',
    height: 40,
    width: 100,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSearch: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
