import React from 'react'
import CustomButton from '../components/CustomButton'
import CustomCard from '../components/CustomCard'
import bluebottle from '../Assets/Images/bluebottle.jpg'
import pinkpen from '../Assets/Images/pinkpen.jpg'
import blackcup from '../Assets/Images/blackcup.jpg'


const Products = () => {
  return (
    <div>
        
        <h1> This is the Products Page</h1>
        <marquee>Products Page</marquee>
        <img src={bluebottle} />
        <CustomCard name='Water Bottle' mrp='600' qty='pack of 2' />
        <CustomButton />
    </div>
  )
}

export default Products