import axios from "axios";

const BASE_URL = "https://kitsu.io/api/edge/anime";
const PER_PAGE = 10;
// const LIMIT = `page[limit]=${PER_PAGE}`;
const LIMIT = "";

export const getPopularTitles = async (page) => {
  // const queryString = `${BASE_URL}?&page[offset]=${
  //   page * PER_PAGE
  // }&${LIMIT}&sort=-averageRating`;
  const queryString = `${BASE_URL}?&page[offset]=${
    page * PER_PAGE
  }&sort=-averageRating`;
  const response = await axios.get(queryString);
  const hasNextPage = response.data.links.last !== queryString;
  console.log("RETURNING NEW PAGE!!!!!!!!!", "page is", page);
  return { animelist: response.data.data, hasNextPage };
};

export const getTitlesByQuery = async (query, page) => {
  const queryString = `${BASE_URL}?page[offset]=${
    page * PER_PAGE
  }&${LIMIT}&filter[text]=${query}`;
  const response = await axios.get(queryString);
  const hasNextPage = response.data.links.last !== queryString;
  console.log("RETURNING NEW PAGE!!!!!!!!!", "page is", page);
  // console.log(response.data.links.last);
  // console.log(queryString);
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
