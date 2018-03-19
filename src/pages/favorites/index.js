import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import FavoriteItem from './components/FavoriteItem';

import styles from './styles';

export default class Favorites extends Component {
  static navigationOptions = {
    title: 'Meus favoritos',
  };

  state = {
    favorites: [{
      owner: {
        avatar_url: 'https://avatars1.githubusercontent.com/u/24914645?s=200&v=4',
      },
      name: 'Foo',
      description: 'bar lorem ipsum',
    }],
  };

  renderList = () => (
    <FlatList
      data={this.state.favorites}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => <FavoriteItem favorite={item} />}
    />
  )

  render() {
    return (
      <View style={styles.container}>
        {
          !this.state.favorites.length
            ? <Text style={styles.empty}>Nenhum favorito adicionado</Text>
            : this.renderList()
        }
      </View>
    );
  }
}
