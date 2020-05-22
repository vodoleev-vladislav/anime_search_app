import axios from "axios";

const BASE_URL = "https://kitsu.io/api/edge/anime";
const LIMIT = "page[limit]=12";
const PER_PAGE = 12;

export const getPopularTitles = async (page) => {
  const queryString = `${BASE_URL}?&page[offset]=${
    page * PER_PAGE
  }&${LIMIT}&sort=-averageRating`;
  console.log(queryString);
  const response = await axios.get(queryString);
  return response.data.data;
};

export const getTitlesByQuery = async (query, page) => {
  const response = await axios.get(
    `${BASE_URL}?page[offset]=${page * PER_PAGE}&${LIMIT}&filter[text]=${query}`
  );
  return response.data.data;
};
