import React from "react";
import styled from "styled-components";


export const Container=styled.div`
width:100%;
text-align:center;
font-family: Helvetica Neue;
font-weight: 50;
`;

export const DivType=styled.p`
text-align:center;

`;


export const DishType=styled.div`
margin-top:2%;
display:flex;
justify-content: center;

`;

export const Spicy = styled.img`
    
width:13%;

`;
Spicy.defaultProps={
    src:'images/spicy.svg',
};
export const Vegan = styled.img`
    
width:13%;

`;
Vegan.defaultProps={
    src:'images/vegan.svg',
};
export const Vagitarian = styled.img`
   
   width:13%;

`;
Vagitarian.defaultProps={
    src:'images/vegitarian.svg',
};