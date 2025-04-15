import Restaurent from "./Restaurent";
import { useEffect, useState } from "react";
import { API } from "../../utils/constants";
import axios from "axios";
import Shimmer from "./Shimmer";
import useFetchData from "../../utils/useFetchData";

export default Body = () => {
  const [restaurents, setRestaurents] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  // console.log("data from custom hook...", data);
  const fetchData = async () => {
    const response = await axios.get(API);
    const foundCard = response?.data?.data?.cards?.find(
      (card) =>
        card?.card?.card?.gridElements?.infoWithStyle?.restaurants !== undefined
    );
    setRestaurents(
      foundCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
    );
    setFilterData(
      foundCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
    );
  };

  if (filterData.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="p-4 m-4 w-full bg-gray-100 flex flex-wrap">
        <input
          type="text"
          className="w-[400px] rounded-lg p-4 m-4"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="px-4 py-2 m-4 bg-gray-600 font-bold
          text-white rounded-lg text-xl"
          onClick={() => {
            console.log(restaurents);
            let searchData = restaurents.filter((res) =>
              res.info.name.includes(searchText)
            );
            return setFilterData(searchData);
          }}
        >
          Search
        </button>
        <button
          className="px-4 py-2 m-4 bg-purple-500 font-bold
          text-white rounded-lg text-xl"
          onClick={() => {
            const filterData = restaurents.filter(
              (res) => res.info.avgRaiting > 4
            );
            setRestaurents(filterData);
          }}
        >
          Fiter Top Restarents
        </button>
      </div>
      <div className="flex flex-wrap w-full bg-gray-100">
        {filterData.map((restaurent) => (
          <Restaurent key={restaurent.info.id} data={restaurent} />
        ))}
        {/* <Restaurent resList={resList[0]} /> */}
      </div>
    </div>
  );
};
