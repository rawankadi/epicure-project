import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Navigate, useNavigate } from 'react-router-dom';
import { BurgerIcon, RightIcons, Logo, NavBar,  BagIcon, SignIcon, SearchIcon, Btn, Title, HeaderElement, DesktopRightIcons, DesktopNavBar } from './styles'
import BurgerSideBar from './BurgerSideBar';
import { useDispatch, useSelector } from "react-redux";
import { setSearchBar } from '../HomePage/Reducer/searchBarSlicer';
import SearchBar from './SearchBar'
import EmptyBag from './EmptyBag';
import SetWindowSize from '../../Helpers/SetWindowSize';





export default function Header() {


  const Navigate= useNavigate();
  const onContactBtnClicked=() => {
    Navigate('/HomePage');
}
  const [burgerSideBar, setSidebar] = useState(false);
  const showSidebar =() => {
    setSidebar(!burgerSideBar);
  }

  const [emptyBag, setEmptyBag] = useState(false);
  const showEmptyBag =() => {
    setEmptyBag(!emptyBag);
  }
  
  const dispatch = useDispatch();
  const searchBar = useSelector((state:any) => state.searchBar.value);

  const [Restaurant, setRestaurant] = useState('Restaurant');
  const [Chef, setChef] = useState('Chef');

  const onChefBtnClicked=() =>{
    Navigate('/Chef');
}
const onRestaurantBtnClicked=() =>{
       Navigate('/Restaurant');
}
const windowSize = SetWindowSize();

if(windowSize <= 600){
  return (
    <NavBar>
          <BurgerIcon>
            <FontAwesomeIcon onClick={showSidebar} icon={burgerSideBar ? faClose : faBars}/>
          </BurgerIcon><br/>
          <Btn onClick={onContactBtnClicked}>
            <Logo/>
          </Btn>
            <RightIcons>
              {/* <Btn onClick={()=> setOpenSearchBar(!openSearchBar)}> {openSearchBar? <Close/> : <SearchIcon/> }</Btn> */}
              <Btn onClick={()=>dispatch(setSearchBar(true))}> <SearchIcon/></Btn>
                <Btn> 
                  <SignIcon />
                </Btn>
                <Btn onClick={showEmptyBag}><BagIcon/></Btn>
            </RightIcons>
        {emptyBag && <EmptyBag/>}
        {searchBar && <SearchBar/>}
        {burgerSideBar && (<BurgerSideBar/>)}
    </NavBar>
  );
}
else{
  return(
    <DesktopNavBar>
          <Btn onClick={onContactBtnClicked}>
            <Logo/>
          </Btn>
          <Title>EPICURE</Title>
          <HeaderElement onClick={onRestaurantBtnClicked}>{Restaurant}</HeaderElement>
          <HeaderElement onClick={onChefBtnClicked}>{Chef}</HeaderElement>
            <DesktopRightIcons>
              <Btn onClick={()=>dispatch(setSearchBar(true))}> <SearchIcon/></Btn>
                <Btn> 
                  <SignIcon />
                </Btn>
                <Btn onClick={showEmptyBag}><BagIcon/></Btn>
            </DesktopRightIcons>
        {emptyBag && <EmptyBag/>}
        {searchBar && <SearchBar/>}
        {burgerSideBar && (<BurgerSideBar/>)}
    </DesktopNavBar>
  );
}
}
