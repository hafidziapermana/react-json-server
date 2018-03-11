import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { PhoneItem } from './PhoneItem';

export const PhoneLists = ({ phones }) => {
  return(
    <PhoneGrid>
      { 
        phones.length === 0 ? 
        <NotFound>Not Found</NotFound>
        : phones.map(phone => <PhoneItem key={phone.id} {...phone} />)
      }
    </PhoneGrid>
  )
}

const PhoneGrid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  border: 1px slid red;
`

const NotFound = styled.div`
  margin: 150px auto;
  font-size: 30px;
  font-style: bold;
`

PhoneLists.propTypes = {
  phones: PropTypes.array
}