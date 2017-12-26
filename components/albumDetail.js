import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Linking
} from 'react-native';

import Card from './card';
import CardSection from './cardSection';
import Button from './button';

const styles = {
  headerStyle: {
    textContainer: {
      flexDirection: "column",
      justifyContent: "space-around"
    },
    thumbnailStyle: {
      height: 50,
      width: 50
    },
    headerTextStyle: {
      fontSize: 18
    },
    thumbnailContainerStyle: {
      justifyContent: "center",
      alignContent: "center",
      marginLeft: 10,
      marginRight: 10
    }
  },
  bodyStyle: {
    imageStyle: {
      height: 300,
      flex: 1,
      width: null
    }
  }
}

export default class AlbumDetail extends Component {


  render() {
    return (
      <Card>

        <CardSection>
          <View style={ styles.headerStyle.thumbnailContainerStyle } >
            <Image
              style={ styles.headerStyle.thumbnailStyle }
              source={{ uri: this.props.album.thumbnail_image}} 
             />
          </View>
          <View style={styles.headerStyle.textContainer} >
            <Text style={ styles.headerStyle.headerTextStyle } >{this.props.album.title}</Text>
            <Text>{this.props.album.artist}</Text>
          </View>
        </CardSection>

        <CardSection>
          <Image 
            style={ styles.bodyStyle.imageStyle }
            source={{ uri: this.props.album.image }}
          />
        </CardSection>

        <CardSection>
          <Button onPress={() => Linking.openURL(this.props.album.url)}>
            Buy now
          </Button>
        </CardSection>

      </Card>
    );
  }
}
