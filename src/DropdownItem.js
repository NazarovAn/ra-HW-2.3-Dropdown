import React from 'react'

export default function DropdownItem(props) {
  return (
    <li className={ props.active ? 'active' : '' } onClick={ (ev) => {
      ev.preventDefault();
      props.onClick(props.text);
    }}><a href='/'>{ props.text }</a></li>
  )
}
