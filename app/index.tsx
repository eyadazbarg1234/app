import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useContext, useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { CreateUser, loginUser } from '@/res/API';
import Checkbox from 'expo-checkbox';
import ProductContext from '@/store/ProductContext';

const LoginScreen = () => {

  const { setUser } = useContext(ProductContext)
  const nav = useNavigation()
  const router = useRouter();
  const [loading, setloading] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [userName, setuserName] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setChecked] = useState(false);

  const handleLogin = () => {
    if (!phone || !password) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    console.log("test");

    const body = {
      phone: phone,
      password: password,
      userName: userName,
      email: email,
    };
    if (isChecked) {
      CreateUser(body).then((res) => {
        console.log("res", res);
        if (res.success) {
          //
          setUser(res.data)
          nav.replace("eyadss")
        } else {
          alert(" CreateUser in faild")
        }
      })
    } else {
      loginUser(body).then((res) => {
        console.log("res", res);
        if (res.success) {
          setUser(res.data)
          // console.log("res", res);
          nav.replace("eyadss")
        } else {
          alert(" log in faild")
        }
      })
    }
  }

  const createUserapi = () => {
    const body = {
      email: phone,
      phone: phone,
      password: password,
      username: phone

    };
    if (!isChecked) {
      loginUser(body)
        .then((response) => {
          if (response.success) {
            router.push('eyadss');
          } else {
            Alert.alert('Login Failed', 'Something went wrong. Please try again.');
          }
        })
        .catch((error) => {
          console.error('Login error:', error);
          Alert.alert('Error', 'Unable to login. Please check your connection and try again.');
        });
    } else {
      CreateUser(body)
        .then((response) => {
          if (response.success) {
            router.push('eyadss');
          } else {
            Alert.alert('Login Failed', 'Something went wrong. Please try again.');
          }
        })
        .catch((error) => {
          console.error('Login error:', error);
          Alert.alert('Error', 'Unable to login. Please check your connection and try again.');
        });
    }
  };

  const handleUser = () => {
    if (isChecked) {
      const create = CreateUser()
    }
    else {
      const login = loginUser()
    }

  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {isChecked ? 'Create an Account' : 'Login'}
      </Text>

      <TextInput
        placeholder="phone-number"
        style={styles.input}
        onChangeText={setPhone}
        value={phone}
      />
      {isChecked && (

        <TextInput
          placeholder={'Email'}
          style={styles.input}
          onChangeText={setEmail}
          value={email}
        />
      )}

      {isChecked && (

        <TextInput
          placeholder="userName"

          style={styles.input}
          onChangeText={setuserName}
          value={userName}
        />
      )}


      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        onChangeText={setPassword}
        value={password}
      />

      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={setChecked}
        color={isChecked ? '#4630EB' : undefined}
      />
      <Text style={styles.checkboxLabel}>
        {isChecked ? 'Already have an account? Login' : 'Create an account'}
      </Text>

      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>
          {isChecked ? 'Sign Up' : 'Login'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5', // Soft grey background
  },
  title: {
    fontSize: 28,
    fontWeight: '700', // Bolder text
    color: '#3d3d3d', // Dark grey for better contrast
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#dcdcdc', // Neutral grey border
    borderWidth: 1,
    borderRadius: 5, // Slightly rounded corners
    paddingHorizontal: 15,
    marginVertical: 10,
    backgroundColor: '#ffffff', // White input field
    fontSize: 16,
  },
  checkbox: {
    marginTop: 10,
  },
  checkboxLabel: {
    marginVertical: 10,
    fontSize: 15,
    color: '#555555', // Medium grey text
  },
  button: {
    backgroundColor: '#ff6b6b', // Vibrant coral red
    padding: 12,
    borderRadius: 5, // Slightly rounded button
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
    shadowColor: '#ff4c4c',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 4, // Shadow effect
  },
  buttonText: {
    color: '#ffffff', fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5, // Subtle spacing
  },
});