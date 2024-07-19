import { createSlice } from '@reduxjs/toolkit';
import { gql } from '@apollo/client';
import client from '../apollo/client';

const metricsSlice = createSlice({
  name: 'metrics',
  initialState: [],
  reducers: {
    setMetrics: (state, action) => action.payload,
  },
});

export const { setMetrics } = metricsSlice.actions;

export const fetchMetrics = () => async (dispatch) => {
  const { data } = await client.query({
    query: gql`
      query GetMetrics {
        metrics {
          data {
            id
            attributes {
              Title
              Value
            }
          }
        }
      }
    `,
  });
  dispatch(setMetrics(data.metrics.data.map(metric => ({ id: metric.id, ...metric.attributes }))));
};

export default metricsSlice.reducer;
