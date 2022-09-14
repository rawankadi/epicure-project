import React from 'react'
import { Aboutus, Appstore, Googleplay, LogoImg, Pragraph, Title } from './styles';

export default function AboutUs() {
  return (
    <Aboutus>
            <LogoImg/><br/>
            <Appstore/><br/>
            <Googleplay/>
           
        <Title>About Us</Title>
        <Pragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non 
        eu ipsum. Cras porta malesuada eros, eget blandit
        turpis suscipit at.  Vestibulum sed massa in magna sodales porta.  Vivamus elit urna, 
        dignissim a vestibulum.
        </Pragraph>
        <Pragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no
        eu ipsum. Cras porta malesuada eros.
        </Pragraph>
    </Aboutus>
  )
}
