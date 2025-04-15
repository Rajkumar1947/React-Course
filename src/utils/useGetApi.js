import { useQuery } from "@tanstack/react-query";
import axiosHelper from "./axiosHelper"; // Ensure correct import

const fetchData = async (url, onSuccess, onError, rest) => {
  try {
    const res = await axiosHelper.get(url, {
      id: `test_1`
    });
    if (onSuccess) onSuccess(res);
    return res;
  } catch (error) {
    if (onError) onError(error);
    return error;
  }
};

// ✅ Custom Hook
function useGetAPI(url, params = {}, formatter = (data) => data) {
  const { onerror, onSuccess, onError, ...rest } = params;

  return useQuery({
    queryKey: ["getById", url, params], // ✅ Dynamic key prevents cache conflicts
    queryFn: () => fetchData(url, onSucc, onError, rest), // ✅ Directly call `axiosHelper.get()`
    select: formatter, // ✅ Apply optional formatter
    ...rest, // ✅ Pass extra options like `enabled`, `staleTime`, etc.
  });
}

export default useGetAPI;
