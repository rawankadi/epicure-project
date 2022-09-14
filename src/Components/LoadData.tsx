import { useDispatch } from "react-redux";
import { ChefsURL, DishsURL, RestaurantsURL } from "./Constans/Constans";
import FetchData from "./FetchData";
import { setChefs } from "./HomePage/Reducer/ChefSlicer";
import { setDishs } from "./HomePage/Reducer/DishSlicer";
import { setRestaurants } from "./HomePage/Reducer/RestaurantSlicer";

export async function useFetchAndLoadData() {

    const dispatch = useDispatch();

    const restaurantsResponse = await FetchData(RestaurantsURL);
    dispatch(setRestaurants(restaurantsResponse));
    const chefsResponse = await FetchData(ChefsURL);
    dispatch(setChefs(chefsResponse));
    const dishsResponse = await FetchData(DishsURL);
    dispatch(setDishs(dishsResponse));
}