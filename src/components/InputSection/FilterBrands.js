import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

export const FilterBrands = ({ style, handleBrandsCheckbox }) => {
  return(
      <Wrapper style={style} >
        <Input 
          type="checkbox" 
          id="Samsung"
          value="Samsung" 
          defaultChecked={false}
          onChange={handleBrandsCheckbox} />
        <label htmlFor="Samsung">Samsung</label>

        <Input 
          type="checkbox" 
          id="Apple"
          value="Apple"
          defaultChecked={false}
          onChange={handleBrandsCheckbox} />
        <label htmlFor="Apple">Apple</label>

        <Input 
          type="checkbox" 
          id="Lenovo"
          value="Lenovo"
          defaultChecked={false}
          onChange={handleBrandsCheckbox} />
        <label htmlFor="Lenovo">Lenovo</label>
        
        <Input 
          type="checkbox" 
          id="Xiaomi"
          value="Xiaomi"
          defaultChecked={false}
          onChange={handleBrandsCheckbox} />
        <label htmlFor="Xiaomi">Xiaomi</label>
        
        <Input 
          type="checkbox" 
          id="LG"
          value="LG"
          defaultChecked={false}
          onChange={handleBrandsCheckbox} />
        <label htmlFor="LG">LG</label>
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

FilterBrands.propTypes = {
  handleBrandsCheckbox: PropTypes.func,
  style: PropTypes.object
}