import { useMutation } from "@tanstack/react-query";
import axiosHelper from "./axiosHelper";

const fetchData = async (url, formatter, onError, onSuccess, rest) => {
  try {
    const response = await axiosHelper(url, rest); // Await API call
    if (onSuccess) onSuccess(response); // Call onSuccess if provided
    return formatter ? formatter(response) : response;
  } catch (error) {
    if (onError) onError(error); // Call onError if provided
      return error; // Ensure error is properly thrown
  }
};

const useFetchData = (key, url, formatter = (data) => data, params = {}) => {
  const { onError, onSuccess, ...rest } = params;
   return useMutation({
      mutationFn: (data) => axiosHelper.post(url, data),
        ...params
    })
};

export default useFetchData;
