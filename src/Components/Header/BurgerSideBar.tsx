import React from "react"
import { useNavigate } from "react-router-dom"
import Footer from "../Footer/Footer";
import { Menu, Sidebar, Element } from "./styles";



export default function BurgerSideBar() {
    const navigate = useNavigate();
    const NavAllRes =() => {navigate('/allRestaurants')}

  return (
    <Sidebar>
            <Menu>
                <Element onClick={NavAllRes}>Restaurants</Element>
                <Element>Chef</Element><br/>
           </Menu>
            <Footer/>
    </Sidebar>
   
  )
}
