import React from 'react'
import Link from 'next/link';

import { urlFor } from '../lib/client';


const HeroBanner = ({HeroBanner}) => {
  return (
    <div className='hero-banner-container'>
        <div className='hero-banner-wrapper'>
            <p className='beats-solo'>{HeroBanner.smallText}</p>
            <h3>{HeroBanner.midText}</h3>
            <h1>{HeroBanner.largeText1}</h1>
            <img src={urlFor(HeroBanner.image)} alt=""  className='hero-banner-image'/>
            
                
                    <button type='button'>{HeroBanner.buttonText}</button>
                
                <div className='desc'>
                    <p>{HeroBanner.desc}</p>
                </div>
            
        </div>

    </div>
  )
}

export default HeroBanner