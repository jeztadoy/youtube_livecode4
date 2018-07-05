import React, { Component } from 'react'
import { View, TextInput, TouchableHighlight, Text, Alert, TouchableOpacity } from 'react-native'
import * as firebase from 'firebase'
import styles from '../utils/Styles';
import messages from '../utils/Messages'

const config = {
  apiKey: "AIzaSyAj3ksJN25RDDCa4FxN43KQOiB8p1-3WtA",
  authDomain: "utube-6f790.firebaseapp.com",
  databaseURL: "https://utube-6f790.firebaseio.com",
}

firebase.initializeApp(config)

class LoginScreen extends Component {
  static navigationOptions = {
    title: 'UTube'
  }

  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errorMessage: ''
    }
  }

  _login = () => {
    let { email, password } = this.state
    if (!email) {
      this.setState({
        errorMessage: messages.EMAIL_BLANK
      })
    } else if (!password) {
      this.setState({
        errorMessage: messages.PASSWORD_BLANK
      })
    } else {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
          this.setState({ errorMessage: '' })
          this.props.navigation.navigate('Home')
          Alert.alert('Success', messages.WELCOME_UTUBE)
        })
        .catch(err => {
          this.setState({ errorMessage: err.message })
        })
    }
  }
 
  render() {
    return (
      <View style={styles.loginContainer}>
        <View style={styles.formContainer}>
          <TextInput
            placeholder={messages.EMAIL_FILL}
            onChangeText={(text) => this.setState({ email: text })}
            keyboardType="email-address"
            textContentType="emailAddress"
            autoCapitalize="none"
            style={styles.inputEmail}
          />
          <TextInput
            placeholder={messages.PASSWORD_FILL}
            onChangeText={(text) => this.setState({ password: text })}
            secureTextEntry={true}
            style={styles.inputPassword}
          />
          {
            this.state.errorMessage ? <Text style={styles.errorMessage}>{this.state.errorMessage}</Text> : ''
          }
        </View>
        <TouchableHighlight
          onPress={() => this._login()}
          style={styles.buttonLogin}>
          <Text style={styles.textLogin}>Login</Text>
        </TouchableHighlight>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <Text>
            Don't have account?
          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Register')}>
            <Text style={{ marginLeft: 5, color: '#ef2f4f', fontWeight: 'bold' }}>Register here.</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default LoginScreen
