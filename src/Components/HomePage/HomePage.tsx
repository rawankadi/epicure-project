import React from 'react'
import AboutUs from './HomePageMobile/AboutUs/AboutUs'
import ChefsOfTheWeek from './HomePageMobile/CardChefs.tsx/CardChef';
import SignatureDishOf from './HomePageMobile/Dishs/DishsCards/DishsCards';
import SearchBar from './HomePageMobile/SearchBar/SearchBar'
import SignatureOfDishes from './HomePageMobile/Dishs/SignatureDishs/SignatureOfDishes';
import CardRestaurants from './HomePageMobile/CardRestaurants/CardRestaurant';
import CardChef from './HomePageMobile/CardChefs.tsx/CardChef';
import AllRestaurants from './HomePageMobile/AllRestaurantBtn/AllRestaurants';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function HomePage() {
  
    // const notify = () =>{ toast("Input somthing!");}
  

  return (
    <div>
      {/* <button onClick={notify}>Notify!</button>
      <input></input> */}
      <ToastContainer />

        <SearchBar /><br/>
        <CardRestaurants/>
        <AllRestaurants/><br/>
        <SignatureDishOf/>
        <AllRestaurants/><br/>
        <SignatureOfDishes/>
        <CardChef/><br/>
        <AllRestaurants/><br/>
        <AboutUs/>
        
    </div>
  )
}

