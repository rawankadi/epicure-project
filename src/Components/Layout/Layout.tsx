import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact_us from '../Footer/Contact_us'
import Footer from '../Footer/Footer'
import PrivacyPolicy from '../Footer/PrivacyPolicy'
import TermOfUse from '../Footer/TermOfUse'
import Header from '../Header/MobileHeader'
import HomePage from '../HomePage/HomePage'
import Restaurants from '../Restaurants/RestaurantsPage'

export default function Layout() {
  return (
    <BrowserRouter>
        <Header/><br/>
        <Routes>
            <Route path='' element={<HomePage/>}/>
            <Route path='/ContactUs' element={<Contact_us/>} />
            <Route path='/TermOfUse' element={<TermOfUse/>} />
            <Route path='/Privacy' element={<PrivacyPolicy/>} />
            <Route path='/AllRestaurants' element={<Restaurants/>} />
            <Route path='/HomePage' element={<HomePage/>}/>
        </Routes><br/>
        <Footer/>
    </BrowserRouter>
  )
}
