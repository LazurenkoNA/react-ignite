const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_GAMES':
      return { ...state };
    default:
      return { ...state };
  }
};

// ACTION CREATOR
// eslint-disable-next-line no-unused-vars
const fetchGames = (userData) => {
  return {
    type: 'FETCH_GAMES',
  };
};

export default gamesReducer;
