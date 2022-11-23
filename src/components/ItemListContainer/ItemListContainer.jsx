import React from 'react'
import './itemListContainer.css';

export default function ItemListContainer(greeting) {
  return (
    <div className='box'>
    <div>{greeting.text}</div>
    </div>
  )
}
