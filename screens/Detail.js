import React, { Component } from 'react'
import { View, Text, WebView, TouchableOpacity, Image, Alert } from 'react-native'
import styles from '../utils/Styles'
import { connect } from 'react-redux'
import * as firebase from 'firebase'

class DetailScreen extends Component {

  static navigationOptions = {
    title: 'Detail'
  }
 
  constructor() {
    super()
    this.state = {
      isMore: false,
      user: {}
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user: user })
      } else {
        this.props.navigation.navigate('Auth')
      }
    })
  }

  _addFavorite(video) {
    const { user } = this.state
    const newFavKey = firebase.database().ref().child('favorites').push().key
    const fav = { video: video, user_id: user.uid, displayName: user.displayName }
    firebase.database().ref('favorites/').update({
      [newFavKey]: fav
    })

    Alert.alert('Success', 'Video has been added to favorite')
  }

  render() {
    let { videos } = this.props.videos

    return (
      <View style={styles.detailContainer}>
        <View style={styles.webViewContainer}>
          <WebView
            javaScriptEnabled={true}
            domStorageEnabled={true}
            source={{ uri: `https://www.youtube.com/embed/${videos[0].id}` }}
          />
        </View>
        <Text style={styles.detailTitle}>{videos[0].title}</Text>
        <Text style={{ fontWeight: 'bold' }}>Description</Text>
        {
          !this.state.isMore ? <Text
            numberOfLines={3}
            style={styles.detailDescription}>{videos[0].description}</Text> : <Text
              style={styles.detailDescription}>{videos[0].description}</Text>
        }
        <TouchableOpacity
          style={{ marginBottom: 5 }}
          onPress={() => this.setState({ isMore: !this.state.isMore })}
        >
          <Text style={{ fontWeight: 'bold' }}>{!this.state.isMore ? 'More' : 'Less'}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.favButton}
          onPress={() => this._addFavorite(videos[0])}
        >
          <Text style={styles.favText}>Add Favorite</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = state => ({ videos: state.videos })

export default connect(mapStateToProps)(DetailScreen)
