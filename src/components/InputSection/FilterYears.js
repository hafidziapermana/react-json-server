import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'

export const FilterYears = ({ style, handleYearsCheckbox }) => {
  return(
    <Wrapper style={ style } >
      <Input
        type="checkbox" 
        id="2017"
        value={2017}
        defaultChecked={false}
        onChange={handleYearsCheckbox} />
      <label htmlFor="2017">2017</label>

      <Input 
        type="checkbox" 
        id="2016"
        value={2016}
        defaultChecked={false}
        onChange={handleYearsCheckbox} />
      <label htmlFor="2016">2016</label>

      <Input 
        type="checkbox" 
        id="2015"
        value={2015}
        defaultChecked={false}
        onChange={handleYearsCheckbox} />
      <label htmlFor="2015">2015</label>
      
      <Input 
        type="checkbox" 
        id="2014"
        value={2014}
        defaultChecked={false}
        onChange={handleYearsCheckbox} />
      <label htmlFor="2014">2014</label>
      
      <Input 
        type="checkbox" 
        id="2013"
        value={2013}
        defaultChecked={false}
        onChange={handleYearsCheckbox} />
      <label htmlFor="2013">2013</label>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  flex: 1 0 240px;
  border: black solid 1px;
  background-color: #dcdee2;
  position: absolute;
  width: 298px;
`

const Input = styled.input`
  display: none; 
  + label {
    display: block;
    position: relative;
    cursor: pointer;
    color: #777;
    line-height: 30px;
    padding-top: 3px;
    user-select: none;
  }

  + label:hover {
    background: #e1f0fc;
  }

  + label:hover,
    :checked + label {
      color: #1d1d1d;
    }

  + label:before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    background: #fff;
    box-sizing: border-box;
    border-radius: 3px; 
    border: 2px solid #777; 
    vertical-align: middle;
    margin: -4px 10px 0;
    transition: all .5s ease;
  }

  + label:after {
    content:"";
    display: block;
    position: absolute;
    top: 5px;
    left: 13px;
    width: 0;
    height: 6px;
    border-color: #a1aeb8;
    border-style: solid;
    border-width: 0;
  }

  :checked + label:after {
    width: 15px;
    border-color: #1d1d1d;
    border-width: 0 0 4px 4px;
    border-radius: 0 0 6px 0;
    transform: rotate(-50deg);
  }
`

FilterYears.propTypes = {
  handleYearsCheckbox: PropTypes.func,
  style: PropTypes.object
}