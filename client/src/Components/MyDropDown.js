import React, { useState } from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'

const MyDropDown = ({ items, title, handleChange }) => {
  const [text, setText] = useState(title)

  return (
    <DropdownButton id="dropdown-basic-button" title={text}>
      {items.map((item, index) => {
        return (
          <Dropdown.Item
            onClick={() => {
              setText(item)
              handleChange(item)
            }}
          >
            {item}
          </Dropdown.Item>
        )
      })}
    </DropdownButton>
  )
}

export default MyDropDown
