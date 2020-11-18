import React from 'react'

export default function DropdownItem(props) {
  function handleClick(ev) {
    ev.preventDefault();
    props.onClick(props.text);
  }

  return (
    <li className={ props.active ? "active" : "" } onClick={ (ev) => handleClick(ev) }>
      <a href="/">{ props.text }</a>
    </li>
  )
}
