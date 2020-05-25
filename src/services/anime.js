import axios from "axios";

const BASE_URL = "https://kitsu.io/api/edge/anime";
const PER_PAGE = 12;
const LIMIT = `page[limit]=${PER_PAGE}`;

export const getPopularTitles = async (page) => {
  const queryString = `${BASE_URL}?&page[offset]=${
    page * PER_PAGE
  }&${LIMIT}&sort=-averageRating`;
  const response = await axios.get(queryString);
  const hasNextPage = response.data.links.last !== queryString;
  console.log("RETURNING NEW PAGE!!!!!!!!!", "page is", page);
  return { animelist: response.data.data, hasNextPage };
};

// export const getTitlesByQuery = async (query, page) => {
//   const response = await axios.get(
//     `${BASE_URL}?page[offset]=${page * PER_PAGE}&${LIMIT}&filter[text]=${query}`
//   );
//   return response.data.data;
// };
