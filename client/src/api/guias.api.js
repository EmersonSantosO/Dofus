import axios from "axios";

export const getAllGuias = () => {
  return axios.get("http://127.0.0.1:8000/guias/api/v1/guias/");
};
