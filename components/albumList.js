import React, { Component } from 'react';
import {
  Text,
  ScrollView
} from 'react-native';

import AlbumDetail from './albumDetail';

export default class AlbumList extends Component {


    state = {
        data: ""
    };
    
    componentWillMount() {
      fetch("http://rallycoding.herokuapp.com/api/music_albums")
        .then((res) => res.json())
        .then((resJSON) => {
            this.setState({ data: resJSON });
        })
    }
    
    renderAlbums() {
        return this.state.data.map((album) => <AlbumDetail key={album.title} album={album} />)
        // return <Text> {this.state.data.length} </Text>
    }

  render() {
    return (
      <ScrollView>
        {(this.state.data.length != 0)?this.renderAlbums(): <Text>"Loading"</Text>}
      </ScrollView>
    );
  }
}
