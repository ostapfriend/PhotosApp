// reducers.js
const initialState = {
  photos: [],
  favoritePhotos: [],
  isLoading: false,
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PHOTOS_SUCCESS':
      return {
        ...state,
        photos: action.payload,
        isLoading: false,
        error: null,
      };
    case 'FETCH_PHOTOS_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case 'LIKE_DISLIKE_PHOTO':
      const likedPhoto = state.photos.find((photo) => photo.id === action.payload);
      if (!likedPhoto) return state;

      if (!likedPhoto.liked) {
        likedPhoto.liked = true;
        return {
          ...state,
          favoritePhotos: [...state.favoritePhotos, likedPhoto],
        };
      }

      if (likedPhoto.liked) {
        likedPhoto.liked = false;
        return {
          ...state,
          favoritePhotos: [...state.favoritePhotos, likedPhoto],
        };
      };
      break;
    default:
      return state;
  }
};

export default rootReducer;
