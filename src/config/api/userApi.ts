import { getEnvVariables } from "../helpers/getEnvVariables";

import axios from "axios";

const { VITE_USER_API_URL } = getEnvVariables();

const userApi = axios.create({
  baseURL: VITE_USER_API_URL,
});

export { userApi };
