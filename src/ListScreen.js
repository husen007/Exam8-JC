import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const ListScreen = ({navigation}) => {
  const [label, setLabel] = useState('');
  const [keyword, setKeyword] = useState('');

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <Text style={styles.label}>Search By :</Text>
        <Picker
          mode={'dropdown'}
          style={styles.input}
          selectedValue={label}
          onValueChange={(value) => setLabel(value)}>
          <Picker.Item label="Name" value="Name" />
          <Picker.Item label="E-mail" value="E-mail" />
          <Picker.Item label="Phone" value="Phone" />
          <Picker.Item label="Address" value="Address" />
        </Picker>
        <Text style={styles.label}>Keyword :</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          onChangeText={(text) => setKeyword(text)}
          value={keyword}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <View style={{alignItems: 'flex-end', marginRight: 30}}>
          <TouchableOpacity
            style={styles.buttonSubmit}
            onPress={() => onRegisterPress()}>
            <Text style={styles.buttonSearch}>Search</Text>
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
};

export default ListScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  input: {
    height: 50,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    marginVertical: 5,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 5,
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 7,
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
  buttonSearch: {
    color: 'white',
    fontSize: 15,
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
});
