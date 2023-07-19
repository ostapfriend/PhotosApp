import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import globalStyles from '../globalStyles';

import {Photo} from "../components/Photo";

const FavoritesScreen = () => {
  const favoritePhotos = useSelector((state) =>
      state.photos.filter((photo) => photo.liked)
  );

  const renderPhoto = ({ item }) => {
    return (
        <Photo item={item} />
    )
  };

  return (
      <View style={globalStyles.container}>
        {favoritePhotos.length === 0 ? (
            <View>
              <Text>No favorite photos...</Text>
            </View>
        ) : (
            <FlatList
                data={favoritePhotos}
                renderItem={renderPhoto}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={globalStyles.scrollContainer}
            />
        )}
      </View>
  );
};

export default FavoritesScreen;
