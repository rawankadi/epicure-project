import { configureStore } from '@reduxjs/toolkit';
import ChefSlicer from './Components/HomePage/Reducer/ChefSlicer';
import DishSlicer from './Components/HomePage/Reducer/DishSlicer';
import RestaurantSlicer from './Components/HomePage/Reducer/RestaurantSlicer';
import searchBarSlicer from './Components/HomePage/Reducer/searchBarSlicer';
// const serviceApi = createServiceApi('/some/url');

export default configureStore({
  reducer: {

    restaurants: RestaurantSlicer,
    dishs: DishSlicer,
    chefs: ChefSlicer,
    searchBar: searchBarSlicer,
  },
  // middleware: getDefaultMiddleware =>
  // getDefaultMiddleware()
})

