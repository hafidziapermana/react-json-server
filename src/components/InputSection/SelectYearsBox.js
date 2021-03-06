import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const SelectYearsBox = ({ selectedyears, showYearsCheckboxes }) => {
  return(
    <div> 
      <Status>
        {
          selectedyears.length === 0 ?
          <Choice>All Years</Choice>
          : selectedyears.map(choice => <Choice key={choice} >{choice}</Choice> )
        }
      </Status>
      <Select onClick={showYearsCheckboxes} >
        <select>
          <option>
            Years 
          </option>
        </select>
        <div></div>
      </Select>
    </div>
  )
}

const Select = styled.div`
  position: relative;
    
    select {
      width: 100%;
      font-weight: bold;
      height: 40px;
    }

    div {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
`

const Status = styled.div`
  height: 30px;
  display: flex;
`

const Choice = styled.span`
  margin-right: 10px;
`

SelectYearsBox.propTypes = {
  selectedyears: PropTypes.array,
  showYearsCheckboxes: PropTypes.func
}