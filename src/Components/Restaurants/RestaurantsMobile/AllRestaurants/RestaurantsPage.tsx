import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Name, Btn, Information, PagesName, Picture, Resdiv, Restaurants, SlideColumn } from './styles'



export default function RestaurantPage() {
  const restaurants = useSelector((state:any) => state.restaurants.value);
  // console.log(restaurants);

  return (
    <div>
    <Resdiv>
      <PagesName>RESTAURANTS</PagesName>
      <SlideColumn>
        <Btn><PagesName>All</PagesName></Btn>
        <Btn><PagesName>New</PagesName></Btn>
        <Btn><PagesName>Most Popular</PagesName></Btn>
        <Btn><PagesName>Open Now</PagesName></Btn>
      </SlideColumn>
      </Resdiv><br/>
    {restaurants.map((restaurant:any, key:number)=> (
      <Restaurants key={key}>
        <Information>
         <Picture src={restaurant.URLImage}/>
            <Name> {restaurant.name}</Name>
            <Name> {restaurant.chefName}</Name>
         </Information>
      </Restaurants> 
      
    
   ))}
  </div>
  );
    
  
}
