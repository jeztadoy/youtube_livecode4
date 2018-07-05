import React, { Component } from 'react'
import { FlatList, TouchableWithoutFeedback, View } from 'react-native'
import Video from './Video'
import { connect } from 'react-redux'
import { showVideo } from '../store/action'

class ListVideo extends Component {
  getVideo(id) {
    this.props.nav.navigate('Detail')
    this.props.showVideo(id)
  }

  render() {
    const { videos } = this.props
    return (
      <FlatList
        inverted
        data={videos}
        renderItem={({ item }) =>
          <TouchableWithoutFeedback
            onPress={() => this._getVideo(item.id)}
            useForeground = {false}>
            <View>
              <Video video={item} />
            </View>
          </TouchableWithoutFeedback>
        }
        keyExtractor={item => item.id}
      />
    )
  }
}

export default connect(null, { showVideo })(ListVideo)
