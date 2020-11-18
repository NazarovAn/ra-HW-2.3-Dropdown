import React, { useState } from 'react'
import DropdownItem from './DropdownItem'

export default function DropdownList(props) {
  const listArr = ['Profile Information', 'Change Password', 'Become PRO', 'Help', 'Log Out'];
  const [activeItem, setActiveItem] = useState('Profile Information')
  return (
    <ul className='dropdown'>
      { listArr.map((item, index) => 
        <DropdownItem 
          text={ item } 
          active={ activeItem === item ? true : false }
          onClick={ ((item) => setActiveItem(item)) }
          key={ index }
        />) }
    </ul>
  )
}