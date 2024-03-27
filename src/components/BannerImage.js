import React from 'react'
import startingLine from '../assets/starting_line.jpg'

export default function BannerImage() {
  
  return (
    <div className='flex items-center justify-center'>
        <img src={startingLine} alt='Main banner image' style={{width:1900, height:300}}/>
    </div>
  )
}
