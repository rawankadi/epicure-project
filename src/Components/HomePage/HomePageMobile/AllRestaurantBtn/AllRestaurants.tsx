import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Alldiv, Arow } from './style'

export default function AllRestaurants() {

  const Navigate= useNavigate();
  const onContactBtnClicked=() =>{
    Navigate('/AllRestaurants');
}

  return (
    <Alldiv onClick={onContactBtnClicked}>All Restaurants<Arow/></Alldiv>
  )
}
