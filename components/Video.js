import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import styles from '../utils/Styles'

const Video =(props)=> {

  const { title, thumbnails: {medium: { url }}} = props.video

  return (
    <View style={styles.itemContainer}>
      <Image
        source={{ uri: url }}
        style={styles.itemThumbnail} />
      <Text style={styles.itemTitle}>{title}</Text>
    </View>
  )
}

export default Video
