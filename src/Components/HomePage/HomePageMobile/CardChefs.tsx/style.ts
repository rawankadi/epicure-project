import React from "react";
import styled from 'styled-components'


export const Body = styled.div`
margin-bottom:10%;
padding-bottom:5%;
`;


export const Name = styled.p`
justify-content:start;
display:flex;
font-style: Thin;
font-size: 14px;
line-height: 28px;
vertical-align: Top;
letter-spacing: 1.25px;
`;

export const ChefName=styled.p`
font-family: Helvetica;
font-weight: 600;
margin-top: 0%;
line-height: 47px;
letter-spacing: 2.25px;
`
export const NameBg=styled.div`
width: 100%;
height: 10%;
margin-top: -15%;
position: absolute;
background-color: #ffffff80 !important;
text-align: center !important;
`

export const CardImg = styled.img`
    width: 100%;
    height: 50%;
`;
CardImg.defaultProps={
    src:'images/Yossi.svg',
};
 export const DishImg =styled.img`
 width: 100%;
 height:60% !important;
 `;

