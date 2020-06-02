import axios from "axios";

const BASE_URL = "https://kitsu.io/api/edge/anime";
const PER_PAGE = 10;

export const getPopularTitles = async (page) => {
  const queryString = `${BASE_URL}?&page[offset]=${
    page * PER_PAGE
  }&sort=-averageRating`;
  const response = await axios.get(queryString);
  const hasNextPage = response.data.data.length !== 0;
  return { animelist: response.data.data, hasNextPage };
};

export const getTitlesByQuery = async (query, page) => {
  const queryString = `${BASE_URL}?page[offset]=${
    page * PER_PAGE
  }&filter[text]=${query}`;
  const response = await axios.get(queryString);
  const hasNextPage = response.data.data.length !== 0;
  return { animelist: response.data.data, hasNextPage };
};

export const getTitleById = async (id) => {
  const queryString = `${BASE_URL}/${id}`;
  try {
    const response = await axios.get(queryString);
    return { ...response.data.data };
  } catch (error) {
    return error.response.data;
  }
};
