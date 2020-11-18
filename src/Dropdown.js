import React, { useState } from 'react'
import DropdownList from './DropdownList'

export default function Dropdown() {
  const [visibility, setVisibility] = useState('');
  return (
    <div className={`dropdown-wrapper ${ visibility === '' ? '' : 'open' }`}>
      <button className="btn" onClick={ () => visibility === '' ? setVisibility('open') : setVisibility('')}>
        <span>Account Settings</span>
        <i className="material-icons">public</i>
      </button>
      <DropdownList visibility={ visibility } />
    </div>
  )
}
