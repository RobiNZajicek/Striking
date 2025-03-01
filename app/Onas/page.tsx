import React from 'react'
import OnasAbove from '@/components/Onas/OnasAbove'
import Treneri from '@/components/Onas/Treneri/Treneri'
import ReviewsCarousel from '@/components/Onas/ReviewsCarousel/ReviewsCarousel'
const Onas = () => {
  return (
    <div>
        <OnasAbove/>
        <Treneri/>
        <ReviewsCarousel/>
    </div>
  )
}

export default Onas