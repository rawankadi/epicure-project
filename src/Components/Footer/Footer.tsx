import React , { useState } from 'react'
import Contact from './Contact_us'
import SetWindowSize from '../../Helpers/SetWindowSize'
import { FooterContainer, FooterElements, FooterElement } from './styles';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Footer() {


       const Navigate= useNavigate();
       const windowSize = SetWindowSize();
       const [contactUs, setContactUs] = useState('Contact Us');
       const [termOfUse, setTermOfUse] = useState('Term Of Use');
       const [privacy, setPrivacy] = useState('Privacy Policy');

       const onContactBtnClicked=() =>{
              Navigate('/ContactUs');
       }
       const onTermBtnClicked=() =>{
              Navigate('/TermOfUse');
       }
       const onPrivacyBtnClicked=() =>{
              Navigate('/TermOfUse');
       }


        return (
       <FooterContainer>
            <FooterElements windowSize={windowSize}>
                   <FooterElement onClick={onContactBtnClicked}>{contactUs}</FooterElement>
                   <FooterElement onClick={onTermBtnClicked}>{termOfUse}</FooterElement>
                   <FooterElement onClick={onPrivacyBtnClicked}>{privacy}</FooterElement>
            </FooterElements>
       </FooterContainer>
)
}

