import React from 'react';
import Link from 'next/link';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import Cart from './Cart';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {

  const {showCart, setShowcart, totalQuantities} = useStateContext();

  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href="/ ">POCKETWATCH</Link>
      </p>

      <button type='button' className='cart-icon' onClick={()=> setShowcart(true)}>
        <AiOutlineShoppingCart/>
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>

      {showCart && <Cart/>}
    </div>
  )
}

export default Navbar;