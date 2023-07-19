import axios from 'axios';

export const likeDislikePhoto = (photoId) => ({
  type: 'LIKE_DISLIKE_PHOTO',
  payload: photoId,
});

export const fetchPhotos = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/photos?albumId=1');
      const photos = response.data;
      dispatch({
        type: 'FETCH_PHOTOS_SUCCESS',
        payload: photos,
      });
    } catch (error) {
      dispatch({
        type: 'FETCH_PHOTOS_FAILURE',
        payload: error.message,
      });
    }
  };
};


