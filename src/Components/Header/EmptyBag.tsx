import React from 'react'
import { BagDiv, BagImg, Menu, SElement } from './styles';
import { useDispatch } from "react-redux";

export default function EmptyBag() {

    const dispatch = useDispatch();


  return (
    <BagDiv>
        <Menu>
            <BagImg/><br/><br/>
            <SElement>Your bag is empty</SElement>
        </Menu>

    </BagDiv>
  )
}
