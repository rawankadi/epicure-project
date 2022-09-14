import React from 'react'
import { BodyCards, CardImg, Cards, IconImg, Name } from './style'
import Slider from "react-slick";
import { useSelector } from 'react-redux';

// import { CardDishs } from '../../../../../interfaces/Dish';


export default function DishsCards() {

  const dishs = useSelector((state:any) => state.dishs.value);


  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1
  }


  return (
    <Cards>
    SIGNAURE DISH OF: <br/><br/>
    <Slider {...settings}>
    {dishs.map((dish:any, key:number, index:number)=>(
        // (index < 3) &&
        <BodyCards>
          <CardImg src={dish.ImgURL} alt=''/>
            <Name>{dish.name}</Name>
            <Name>{dish.DishType}</Name>
            <IconImg src={dish.signature} alt=''/>
            <Name>{dish.price}₪</Name>
        </BodyCards>
    ))}
    </Slider>
  </Cards>

    // <Cards>
    //   SIGNAURE DISH OF: <br/>
    //   <Slider {...settings}>
    //   {CardDishs.map((Dish)=>(
    //       <BodyCards>
    //         <CardImg src={Dish.ImgURL} alt=''/>
    //           <Name>{Dish.name}</Name>
    //           <Name>{Dish.DishType}</Name>
    //           <IconImg src={Dish.signature} alt=''/>
    //           <Name>{Dish.price}₪</Name>
    //       </BodyCards>
    //   ))}
    //   </Slider>
    // </Cards>
  )
}
