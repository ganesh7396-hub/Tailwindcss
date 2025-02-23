import React from 'react'
import NavBarSection from './NavBarSection'
import HeroSection from './HeroSection'
import ContentSection from './ContentSection'
import FooterSection from './FooterSection'
import GallerySection from './GallerySection'

const LadndingPage = ({change}) => {
  return (
    <div>
        <NavBarSection change={change}/>
        <HeroSection/>
        <ContentSection/>
        <GallerySection/>
        <FooterSection/>      
    </div>
  )
}

export default LadndingPage
