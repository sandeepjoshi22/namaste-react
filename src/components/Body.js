import { useEffect, useState } from "react";
import { restList } from "../utils/mockData.js";
import RestaurantCard from "./RestaurantCard.js";
import Shimmer from "./Shimmer.js";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestList, setFilteredRestList] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurants =
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ?? [];

    setRestaurantList(restaurants);
    setFilteredRestList(restaurants);
  };

  if (restaurantList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search-container">
        <div className="search">
          <input
            type="text"
            value={searchTxt}
            onChange={(e) => {
              setSearchTxt(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredList = restaurantList.filter((res) =>
                res?.info?.name?.toLowerCase().includes(searchTxt)
              );
              setFilteredRestList(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-rest-btn"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.info.avgRating > 4.2
            );
            setFilteredRestList(filteredList);
          }}
        >
          Filter by Rating
        </button>
      </div>
      <div className="cards-container">
        {filteredRestList.map((restaurant) => {
          return <RestaurantCard key={restaurant.info.id} data={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
