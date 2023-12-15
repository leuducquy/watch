import React from 'react'
import {Product, FooterBanner, HeroBanner} from '../components/index';
import { client } from '../lib/client';

import SocialButton from '../components/SocialButton'


const Home = ({products, bannerData}) => {
  return (
    <div>
    <HeroBanner HeroBanner={bannerData.length && bannerData[0]}/>
    
    <div className='products-heading'>
      <h2>Latest Collection</h2>
      <p>nice pieces</p>
    </div>

    <div className='products-container'>
      {products?.map((product)=> <Product key={product._id} product={product}/>)}
    </div>

    <FooterBanner FooterBanner={bannerData.length && bannerData[0]}/>
    {/* <div class="fixed top-40 left-0 ">
            <SocialButton />
          </div> */}
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return{
    props: {products, bannerData}
  }
}

export default Home;
