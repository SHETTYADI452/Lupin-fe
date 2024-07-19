import { createSlice } from '@reduxjs/toolkit';
import { gql } from '@apollo/client';
import client from '../apollo/client';

const navbarSlice = createSlice({
  name: 'navbar',
  initialState: [],
  reducers: {
    setNavbar: (state, action) => action.payload,
  },
});

export const { setNavbar } = navbarSlice.actions;

export const fetchNavbar = () => async (dispatch) => {
  const { data } = await client.query({
    query: gql`
      query GetNavbar {
        navbars {
          data {
            id
            attributes {
              TabName
              Description
              Link
            }
          }
        }
      }
    `,
  });
  dispatch(setNavbar(data.navbars.data.map(nav => ({ id: nav.id, ...nav.attributes }))));
};

export default navbarSlice.reducer;
