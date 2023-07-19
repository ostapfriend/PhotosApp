import React, { useEffect, useState } from 'react';
import { View , StyleSheet, FlatList, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPhotos, likeDislikePhoto } from '../redux/actions';
import { Photo } from "../components/Photo";
import globalStyles from '../globalStyles';
import { Ionicons } from "@expo/vector-icons";
import CustomTextInput from "../components/CustomTextInput";

const PhotosScreen = () => {
  const photos = useSelector((state) => state.photos);
  const favorites = useSelector((state) => state.favoritePhotos);
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  const handleLikeDislikePhoto = (photoId) => {
    dispatch(likeDislikePhoto(photoId));
  };

  const renderPhoto = ({ item }) => {
    const isLiked = favorites.some((photo) => photo.id === item.id && item.liked);

    return (
        <Photo item={item} isLiked={isLiked} handleActionWithPhotoId={handleLikeDislikePhoto}>
          <Ionicons
              name={isLiked ? 'heart' : 'heart-outline'}
              size={24}
              color={isLiked ? 'black' : 'grey'}
          />
        </Photo>
    );
  };

  const handleSearchTextChange = (text) => {
    setSearchText(text)
  };

  const filterPhotosByTitle = (photos, searchText) => {
    if (!searchText) {
      return photos;
    }

    const lowerSearchText = searchText.toLowerCase();
    return photos.filter(photo => photo.title.toLowerCase().includes(lowerSearchText));
  };

  const filteredPhotos = filterPhotosByTitle(photos, searchText);

  return (
      <View style={globalStyles.container}>
          <CustomTextInput value={searchText} onChangeText={handleSearchTextChange} />
          <FlatList
              data={filteredPhotos}
              renderItem={renderPhoto}
              keyExtractor={(item) => item.id.toString()}
              contentContainerStyle={globalStyles.scrollContainer}
          />
      </View>
  );
};

export default PhotosScreen;
