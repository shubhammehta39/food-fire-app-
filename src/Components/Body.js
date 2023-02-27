import { swiggy_api_URL } from "../constants";
import { useEffect, useState } from "react"; /* This is named export */
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer"; /* This is default export */

const Body = () => {

    const [searchText, setSearchText] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        getRestaurants();
    }, []);

    function filterData(searchText, restaurants) {
        const filterData = restaurants.filter(() =>
            restaurants?.data?.name.toLowerCase().includes(searchText.toLowerCase())
        );
        return filterData;
    }

    async function getRestaurants() {
        try {
            const data = await fetch(swiggy_api_URL);
            const json = await data.json();
            setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
            setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        } catch (error) {
            console.log(error);
        }
    }

    const searchData = (searchText, restaurants) => {
        if (searchText !== "") {
            const data = filterData(searchText, restaurants);
            setFilteredRestaurants(data);
            setErrorMessage("");
            if (data.length === 0) {
                setErrorMessage("No Restaurants found");
            }
        } else {
            setErrorMessage("");
            setFilteredRestaurants(restaurants);
        }
    };

    if (!allRestaurants) return null;

    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="search a restaurant"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                ></input>
                <button className="search-btn"
                    onClick = {() => {
                        searchData(searchText, allRestaurants);
                    }} >
                    search
                </button>
            </div>
            {errorMessage && <div className="error-container">{errorMessage}</div>}

            {allRestaurants?.length === 0 ? (
                <Shimmer />
            ) : (

                <div className="restaurant-list">
                    {filteredRestaurants.map((restaurant) => {
                        return (
                            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
                        );
                    })}
                </div>
            )}
        </>
    );
};

export default Body;