import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  userLogin = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        return alert('Successfully Login');
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return alert(errorMessage);
      });
  };

  userSignUp = (email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        return alert('User Added Successfully');
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        return alert(errorMessage);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/barter.png')} style={styles.image} />
        <Text style={styles.title}>Barter</Text>
        <View style={styles.buttonContainer}>
          <Text
            style={{
              color: '#ff5722',
              fontSize: 18,
              fontWeight: 'bold',
              marginLeft: 15,
            }}>
            EMAIL ID
          </Text>
          <View style={{ alignItems: 'center' }}>
            <TextInput
              style={styles.loginBox}
              keyboardType="email-address"
              onChangeText={(text) => {
                this.setState({
                  email: text,
                });
              }}
            />
          </View>
          <Text
            style={{
              color: '#ff5722',
              fontSize: 18,
              fontWeight: 'bold',
              marginLeft: 15,
            }}>
            PASSWORD
          </Text>
          <View style={{ alignItems: 'center' }}>
            <TextInput
              style={styles.loginBox}
              secureTextEntry={true}
              onChangeText={(text) => {
                this.setState({
                  password: text,
                });
              }}
            />
          </View>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
              style={[styles.button, { marginBottom: 10 }]}
              onPress={() => {
                this.userLogin(this.state.email, this.state.password);
              }}>
              <Text
                style={{ color: '#ff5722', fontSize: 18, fontWeight: 'bold' }}>
                LOGIN
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.userSignUp(this.state.email, this.state.password);
              }}>
              <Text
                style={{ color: '#ff5722', fontSize: 18, fontWeight: 'bold' }}>
                SIGN UP
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe0b2',
    margin: 10,
  },
  title: {
    fontSize: 60,
    fontWeight: '300',
    fontFamily: 'AvenirNext-Heavy',
    color: '#ff9800',
    alignSelf: 'center',
  },
  loginBox: {
    width: 300,
    height: 35,
    borderBottomWidth: 1.5,
    borderColor: '#ffab91',
    fontSize: 20,
    marginBottom: 20,
    marginTop: 5,
  },
  button: {
    width: '70%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#ffff',
    elevation: 10,
  },
  buttonContainer: {
    flex: 1,
  },
  image: {
    width: 250,
    height: 150,
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 50,
    shadowOpacity: 0.3,
  },
});
