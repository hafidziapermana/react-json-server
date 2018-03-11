import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'

export const PhoneItem = ({ name, description, release_year, brand }) => {
  return(
    <Phone>
      <div>
        <h1>{name}</h1>
        <p>{description}</p>
        <h2>{brand}</h2>
        <h3>{release_year}</h3>
      </div>
    </Phone>
  )
}

const Phone = styled.li`
  margin: 10px;
  text-align: center;
  background-color: #dcdee2;
  list-style-type: none;
  flex: 0 1 calc(25% - 20px);
  
  :hover, :active, :focus {
    background-color: #667896;
    display: inline-block;
    vertical-align: middle;
    transition-duration: 0.3s;
    transition-property: box-shadow, transform;
    box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
    transform: scale(1.1);
  }
  div {
    padding: 10px;
  }
`

PhoneItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  release_year: PropTypes.string,
  brand: PropTypes.string
}