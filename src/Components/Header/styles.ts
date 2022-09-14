import React from "react";
import styled from "styled-components";


export const NavBar = styled.div`
    margin:0%;
   width: 100%;
   display: flex;
   flex-direction: row;
   justify-content: space-between;

 `;
 export const DesktopNavBar = styled.div`
 margin-left:10%;
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;

`;

export const Title=styled.p`
margin-top: 2.8%;
`

export const HeaderElement = styled.button`
    font-family:'Times New Roman', Times, serif;
    font-size: medium;
    font-weight: 200;
    background:none;
    border:none;
    margin:3%;
    padding:0;
    cursor: pointer;
`;

 export const BurgerIcon = styled.div`
   width: 60%;
   display:flex;
   justify-content: left;
 `;
 export const Btn = styled.button`
margin-right:2% ;
 background:none;
 border:none;
 max-width:50%;
 `

 export const Logo = styled.img`
    width: 100%;
    height: 100%;
    display:flex;
    justify-content: center;
`;
Logo.defaultProps={
    src:'images/Logo.svg',
};

export const SearchIcon = styled.img`
    right: 25%;


`;
SearchIcon.defaultProps={
   src:'images/searchIcon.svg',
};

export const Close = styled.img`
    position:absolute;
    margin-right:10%;
    top: 0%;

`;
Close.defaultProps={
   src:'images/CloseIcon.svg',
};

export const SignIcon = styled.img`
    width: 100%;
    align-items:right;
    margin-left:10%;

`;
SignIcon.defaultProps={
    src:'images/signIcon.svg',
};

export const BagIcon = styled.img`
    width: 100%;
    align-items:right;
    margin-left:10%;
   
`;
BagIcon.defaultProps={
    src:'images/bagIcon.svg',
};

export const BagImg = styled.img`
    width: 10%;
    height: 10%;
    margin-left: 45%;
    margin-top: 10%;
   
`;
BagImg.defaultProps={
    src:'images/bagIcon.svg',
};
export const DesktopRightIcons = styled.div`
    margin-left: 30%;
    width: 40%;
    display: flex;
   flex-direction: row;
   /* justify-content: space-between; */
    `;

 export const RightIcons = styled.div`
    width: 40%;
    display: flex;
   flex-direction: row;
    margin-left:20%;
   justify-content: space-between;
    `;

export const Sidebar=styled.div`
margin-top:10%;
width: 100%;
height: 55%;
position:absolute;
display:inline-block;
flex-direction: column;
background-color:white;
`;


export const SearchDiv=styled.div`
margin-top:0%;
width: 100%;
height: 55%;
position:absolute;
display:inline-block;
flex-direction: column;
background-color:white;
`;
export const BagDiv=styled.div`
margin-top:10%;
width: 100%;
height: 48%;
position:absolute;
display:inline-block;
flex-direction: column;
background-color:white;
`;


export const SElement=styled.p`
margin-top: 0%;
font-family: Helvetica Neue;
font-style: Thin;
font-size: 16px;
line-height: 20px;
text-align: Center;
vertical-align: Top;
letter-spacing: 1.97px;
`

export const Menu=styled.div`

`;

export const Element=styled.p`
font-family: Helvetica Neue;
font-style: Thin;
font-size: 22px;
line-height: 100%;
align-items: Left;
`

export const InputBox=styled.div`
margin-left:10%;
border-style: groove;
width:80%;
height:25%;
`;
