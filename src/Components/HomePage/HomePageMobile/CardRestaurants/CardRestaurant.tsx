import React, { Component, useState } from 'react'
import {Cards, CardImg,Name, ResDiv} from './style';
import Slider from "react-slick";
// import { AllRestaurants } from '../../../../interfaces/Resturants';
import { useSelector } from 'react-redux';



export default function CardRestaurants() {

  const restaurants = useSelector((state:any) => state.restaurants.value);


  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1
  }
  
  return (
    <Cards>
    POPULAR RESTURANT IN EPICURE <br/><br/>
    <Slider {...settings}>
      {restaurants.map((restaurant:any, key:number, index:number)=>(
        // (index < 3) &&
        <ResDiv>
          <CardImg src={restaurant.URLImage} alt=''/>
          <Name>{restaurant.name}</Name>
          <Name>{restaurant.ChefName}</Name>
        </ResDiv>
      
      ))}
    </Slider>
  </Cards>

    // <Cards>
    //   POPULAR RESTURANT IN EPICURE <br/>
    //   <Slider {...settings}>
    //     {AllRestaurants.map((restaurant)=>(
    //         <ResDiv>
    //           <CardImg src={restaurant.URLImage} alt=''/>
    //           <Name>{restaurant.name}</Name>
    //           <Name>{restaurant.ChefName}</Name>
    //         </ResDiv>
    //     ))}
    //   </Slider>
    // </Cards>
  )
}
