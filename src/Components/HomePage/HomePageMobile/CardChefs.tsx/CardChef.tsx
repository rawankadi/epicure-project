import React from 'react'
import Slider from 'react-slick';
import { ResDiv,Cards } from '../CardRestaurants/style';
import { CardImg, Name, DishImg, Body, ChefName, NameBg} from './style';
import { useSelector } from 'react-redux';


export default function ChefsOfTheWeek() {

  const chef = useSelector((state:any) => state.chefs.value);



  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1
  }
  return (
    <Cards>
    CHEF OF THE WEEK <br/><br/>
           
            {chef.map((chef:any, key:number)=>(
            <Body>
                <CardImg src={chef.PicturURL} alt=''/>
                <NameBg>
                <ChefName>{chef.name}</ChefName>
                </NameBg>
                <Name>{chef.description}</Name>
                {/* <Slider {...settings}>
                  {chef.restaurants.map((restaurant:any,  key:number)=>(
                    <ResDiv>
                      <DishImg src={restaurant.URLImage} alt=''/>
                      <Name>{restaurant.name}</Name>
                    </ResDiv>
                  ))}
                </Slider> */}
            </Body>)
            )}
             
    
  </Cards>

    // <Cards>
    //   CHEF OF THE WEEK <br/>
    //          <Body>
    //             <CardImg src={chefOfTheWeek.PicturURL} alt=''/>
    //               <ChefName>{chefOfTheWeek.name}</ChefName>
    //               <Name>{chefOfTheWeek.description}</Name>
    //           </Body>
    //   <Slider {...settings}>
    //   {chefOfTheWeek.restaurants.map((rest)=>(
    //     <ResDiv>
    //       <DishImg src={rest.resImage} alt=''/>
    //       <Name>{rest.name}</Name>
    //     </ResDiv>
    //   ))}
    //   </Slider>
    // </Cards>
  )
}
