import { useQuery } from "@tanstack/react-query";
import axiosHelper from "./axiosHelper";

const fetchData = async (url, formatter, onError, onSuccess, rest) => {
  try {
    const response = await axiosHelper(url, rest); // Await API call
    if (onSuccess) {
      console.log("CAll success");
      onSuccess(response); // Call onSuccess if provided
    }
    return formatter ? formatter(response) : response;
  } catch (error) {
    if (onError) onError(error); // Call onError if provided
    return error; // Ensure error is properly thrown
  }
};

const useFetchData = (key, url, formatter = (data) => data, params = {}) => {
  const { onError, onSuccess, ...rest } = params;

  return useQuery({
    queryKey: [key],
    queryFn: () => fetchData(url, formatter, onError, onSuccess, rest),
    staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
    refetchOnWindowFocus: false, // Prevent refetching on window focus
  });
};

export default useFetchData;
