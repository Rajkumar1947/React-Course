import Restaurent from "./Restaurent";
import { useEffect, useState } from "react";
import { API } from "../../utils/constants";
import axios from "axios";
import Shimmer from "./Shimmer";

export default Body = () => {
  const [restaurents, setRestaurents] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(API);
    const foundCard = response.data.data.cards.find(
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
      <div className="search-container">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
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
          className="filter-btn"
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
      <div className="restaurant-list">
        {filterData.map((restaurent) => (
          <Restaurent key={restaurent.info.id} data={restaurent} />
        ))}
        {/* <Restaurent resList={resList[0]} /> */}
      </div>
    </div>
  );
};
