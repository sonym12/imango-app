import { createSlice } from "@reduxjs/toolkit";

export const photosSlice = createSlice({
  name: "photos",
  initialState: {
    photos: [
      {
        url: 'http://s3',
        likes: {
          count: 10,
          users: [
            {
              name: 'A',
              liked_at: 'Date'
            }
          ]
        },
        comments: {
          count: 10,
          users: [
            {
              name: 'A',
              comment: 'string',
              liked_at: 'Date'
            }
          ]
        }
      }
    ],
    isVisible: true
  },

  reducers: {
    photosShow: (state, action) => {
      state.photos = action.payload;
    },

    photosHide: (state) => {
      state.photos = null;
    },
  },
});

export const { photosShow, photosHide } = photosSlice.actions;

export const selectPhotos = (state) => state.photos;

export default photosSlice.reducer;
