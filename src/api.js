// Base URL
const baseURL = 'https://api.rawg.io/api/';

// Getting the month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  return month < 10 ? `0${month}` : month;
};

// Getting the day
const getCurrentDay = () => {
  const day = new Date().getDay() + 1;
  return day < 10 ? `0${day}` : day;
};

// Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
// eslint-disable-next-line no-unused-vars
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular Games
const popularGames = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

// eslint-disable-next-line import/prefer-default-export
export const popularGamesURL = () => `${baseURL}${popularGames}`;
