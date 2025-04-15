import axios from "axios";

const axiosHelper = async (uri, params = {}) => {
  const response = await axios.get(uri, { params });
  console.log("reponse is ", response.data);
  return response.data;
};

export default axiosHelper;
