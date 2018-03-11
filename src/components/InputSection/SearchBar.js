import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'

export const SearchBar = ({ filterType }) => {
  return(
    <SearchForm>
      <InputForm onChange={filterType} type="text" placeholder="Search Phone Name"/>
        <a href="#nolink">
          <SearchIcon class="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"/>
        </a>
    </SearchForm>
  )
}

const SearchIcon = styled.img`
  position: relative;
  float: right;
  width: 75px;
  height: 75px;
  top: -62px;
  right: -45px;
`
const InputForm = styled.input`
  margin: 0 auto;
  width: 100%;
  height: 45px;
  padding: 0 20px;
  font-size: 1rem;
  border: 1px solid #D0CFCE;
  outline: none;
  &:focus{
    border: 1px solid #008ABF;
    transition: 0.35s ease;
    color: #008ABF;    
   }   
`

const SearchForm = styled.form`
  width: 490px;
  height: 47px;
  display: block;
  margin: 0 auto;
`

SearchBar.propTypes = {
  filterType: PropTypes.func
}
