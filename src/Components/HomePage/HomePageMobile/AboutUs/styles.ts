import React from 'react';
import styled from 'styled-components'


export const Aboutus = styled.div`
    width: 100%;
    align-items: left;
    font-family: Helvetica Neue;
    font-style: thin;
    letter-spacing: 2.14px;
    font-weight: 50;

    `;

export const Pragraph = styled.p`
    font-color:black;
    font-weight: 200;
    font-size: 14px;
    line-height: 28px;
    align: Left;
    vertical-align: Top;
`;

export const Title = styled.h4`
    position: relative;
    font-weight: 700;
    margin-bottom: 15px;
`;

export const LogoImg = styled.img`
    width: 20%;
    height: 20%;
    margin:5%;
`;
LogoImg.defaultProps={
    src:'images/LogoImg.svg',
};
export const Appstore = styled.img`
    width: 35%;
    height: 25%;
    margin:2%;

`;
Appstore.defaultProps={
    src:'images/AppStore.jpg',
};
export const Googleplay = styled.img`
    width: 35%;
    height: 25%;
    margin:2%;

`;
Googleplay.defaultProps={
    src:'images/GooglePlay.jpg',
};
