import React from 'react'
import { urlFor } from '../lib/client'
import Link from 'next/link'

const FooterBanner = ({FooterBanner}) => {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <p>{FooterBanner.discount}</p>
          <p>{FooterBanner.largeText1}</p>
          <p>{FooterBanner.largeText2}</p>
          <p>{FooterBanner.saletime}</p>

        </div>
        <div className='right'>
          <p>{FooterBanner.desc}</p>
          <Link href={`/product/${FooterBanner.product}`}>
            <button type='button'>{FooterBanner.buttonText}</button>
          </Link>
        </div>
        <img className='footer-banner-image' src={urlFor(FooterBanner.image)} alt="" />
      </div>
    </div>
  )
}

export default FooterBanner