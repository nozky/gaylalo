import React from 'react'
import './categories.scss'
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineShopping } from 'react-icons/ai';

const Categories = () => {
  return (
    <>
      <ul>
        <li>CATEGORIES</li>
        <li>DESIGNERS</li>
        <li>ARTICLES</li>
        <li>DELIVERY & RETURNS</li>
        <li>NEWSLETTER</li>
      </ul>
      <div className='icons'>
        <i><AiOutlineSearch/></i>
        <i><AiOutlineHeart/></i>
        <i><AiOutlineShopping/></i>
      </div>
    </>
  )
}

export default Categories
