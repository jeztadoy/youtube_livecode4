import React, { Component } from 'react'
import { View } from 'react-native'
import styles from '../utils/Styles';
import ListVideo from '../components/ListVideo'
import * as firebase from 'firebase'

class FavoriteScreen extends Component {

  static navigationOptions = {
    title: 'Favorites'
  }

  constructor() {
    super()
    this.state = {
      favorites: []
    }
  }

  componentDidMount() {
    firebase.database().ref('favorites/').on('value', snapshot => {
      const favorites = snapshot.val()
      this.setState({ favorites: favorites })
    })
  }

  render() {
    const favorites = this.state.favorites ? Object.keys(this.state.favorites).map(key => {
      return {
        key: key,
        fav: this.state.favorites[key]
      }
    }) : []

    console.log(favorites)

    return (
      <View style={styles.favContainer}>
        <FlatList
          inverted
          data={favorites}
          renderItem={({ item }) =>
            <Text>{item.fav.title}</Text>}
          keyExtractor={item => item.id}
		  
        />
      </View>
    )
  }
}

export default FavoriteScreen
