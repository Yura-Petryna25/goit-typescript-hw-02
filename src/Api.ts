import axios from "axios";
import { FetchImagesResponse } from "./App";

const API_KEY = "xogukwWm43rc-tClyvOsCzhzsWQ_H4UPfTt3TY43qls";
const BASE_URL = "https://api.unsplash.com/search/photos";

export const fetchImages = async (
  query: string,
  page: number
): Promise<FetchImagesResponse> => {
  const response = await axios.get<FetchImagesResponse>(BASE_URL, {
    params: {
      query,
      page,
      per_page: 12,
      client_id: API_KEY,
    },
  });
  return response.data;
};
