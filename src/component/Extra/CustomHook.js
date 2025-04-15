import React from "react";
import useGetAPI from "../../utils/useGetApi";

const CustomHook = () => {
  const { data, loading, error } = useGetAPI({
    allDataUrl: "https://jsonplaceholder.typicode.com/todos/1",
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Fetched API Data</h2>
      {data}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default CustomHook;
