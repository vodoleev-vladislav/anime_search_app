import axios from "axios";

const BASE_URL = "https://kitsu.io/api/edge/anime";
const LIMIT = "page[limit]=12";

export const getPopularTitles = async () => {
  const response = await axios.get(`${BASE_URL}?sort=-averageRating&${LIMIT}`);
  return response.data.data;
};
