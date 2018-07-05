import React, { Component } from 'react'
import { View, TouchableOpacity, Text, TextInput, TouchableHighlight, Alert } from 'react-native'
import * as firebase from 'firebase'
import styles from '../utils/Styles'
import messages from '../utils/Messages'
import { getVideos, searchVideos } from '../store/action'
import { connect } from 'react-redux'
import ListVideo from '../components/ListVideo';

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'UTube',
      headerRight: (
        <TouchableOpacity
          onPress={navigation.getParam('signOut')}>
          <Text style={{ padding: 10, color: '#fff' }}>
            SignOut
          </Text>
        </TouchableOpacity>
      ), 
      headerLeft: (
        <TouchableOpacity
          onPress={(navigation.getParam('favPage'))}>
          <Text style={{ padding: 10, color: '#fff' }}>
            Favorites
          </Text>
        </TouchableOpacity>
      )
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      query: '',
      user: {}
    }
  }

  componentDidMount() {
    this.props.getVideos()
    this.props.navigation.setParams({ signOut: this._signOut, favPage: this._favPage })
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user: user })
      } else {
        this.props.navigation.navigate('Auth')
      }
    })
  }

  _favPage() {
    this.props.navigation.navigate('Favorite')
  }

  _signOut() {
    firebase.auth().signOut()
      .then(() => {
        Alert.alert('Success', messages.SIGN_OUT)
        this.props.navigation.navigate('Auth')
      })
      .catch(err => console.log(err))
  }

  _getVideo(id) {
    this.props.navigation.navigate('Detail', { id: id })
  }

  _searchVideo() {
    this.props.searchVideos(this.state.query)
  }

  render() {
    const { videos } = this.props.videos

    return (
      <View style={styles.homeContainer}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.inputSearch}
            onChangeText={text => this.setState({ query: text })}
            placeholder="Search video"
            autoCapitalize="none"
            value={this.state.query}
          />
          <TouchableHighlight
            style={styles.buttonSearch}
            onPress={() => this._searchVideo()}>
            <Text style={styles.textSearch}>Search</Text>
          </TouchableHighlight>
        </View>
        <ListVideo videos={videos} nav={this.props.navigation} />
      </View>
    )
  }
}

const mapStateToProps = state => ({ videos: state.videos })

export default connect(mapStateToProps, { getVideos, searchVideos })(HomeScreen)
