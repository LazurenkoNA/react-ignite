import axios from 'axios';
import { gameDetailsURL, gameScreenshotsURL } from '../api';

const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: 'LOADING_DETAILS',
  });

  const detailData = await axios.get(gameDetailsURL(id));
  const screenshotsData = await axios.get(gameScreenshotsURL(id));

  dispatch({
    type: 'GET_DETAIL',
    payload: {
      game: detailData.data,
      screen: screenshotsData.data,
    },
  });
};

export default loadDetail;
