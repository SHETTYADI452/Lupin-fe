import { createSlice } from '@reduxjs/toolkit';
import { gql } from '@apollo/client';
import client from '../apollo/client';

const carouselSlice = createSlice({
  name: 'carousel',
  initialState: [],
  reducers: {
    setCarousel: (state, action) => action.payload,
  },
});

export const { setCarousel } = carouselSlice.actions;

export const fetchCarousel = () => async (dispatch) => {
  const { data } = await client.query({
    query: gql`
      query GetCarousel {
        carousels {
          data {
            id
            attributes {
              Image {
                data {
                  attributes {
                    url
                  }
                }
              }
              Header
              ButtonText
              ButtonLink
            }
          }
        }
      }
    `,
  });
  dispatch(setCarousel(data.carousels.data.map(carousel => ({ id: carousel.id, ...carousel.attributes }))));
};

export default carouselSlice.reducer;
