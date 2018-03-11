import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios';

import { 
  FilterYears,
  FilterBrands,
  SearchBar,
  SelectBrandsBox,
  SelectYearsBox,
} from './components/InputSection';
import { PhoneLists } from './components/Phones';


class App extends Component {
  constructor() {
    super();
    this.state = {
      phones : [],
      brand: [],
      release_year: [],
      shownBrands: false,
      shownYears: false
    }
  }

  showBrandsCheckboxes = () => {
    this.setState({ shownBrands: !this.state.shownBrands })
  }

  showYearsCheckboxes = () => {
    this.setState({ shownYears: !this.state.shownYears })
  }

  filterType = e => {
    this.setState({ filter: e.target.value })
  }

  componentDidMount = async () => {
    try {
      const response = await axios.get('http://localhost:7777/phones');
      this.setState({ phones: response.data, pon: response.data })
    } catch(error) {
      console.error(error)
     }
  }

  multiFilter = (array, filters) => {
    if (filters.brand.length === 0) {
      array.forEach(phone => filters.brand.push(phone.brand))
    }
    if (filters.release_year.length === 0) {
      array.forEach(phone => filters.release_year.push(phone.release_year))
    }
  
    let filterKeys = Object.keys(filters);
    // filters all elements passing the criteria
    const filteredphones = array.filter((item) => 
      filterKeys.every((key) => 
        (filters[key].indexOf(item[key]) !== -1)));
    
    this.setState({ phones: filteredphones })
  }
  
  handleBrandsCheckbox =  (e) => {
    const brand =  [...this.state.brand]
    let indexOfBrand
    const oldArr = [...this.state.pon]
    const filtersByBrand = {
      brand : [],
      release_year : [...this.state.release_year] 
    }
    // check if the check box is checked or unchecked
    if (e.target.checked) {
      brand.push(e.target.value)
      this.setState({ brand: brand })
      filtersByBrand.brand = [...brand]
      this.multiFilter(oldArr, filtersByBrand)
    } else {                                                                                                                                                                                                                                                                                                     
      indexOfBrand = brand.indexOf(e.target.value)
      brand.splice(indexOfBrand, 1)
      this.setState({ brand: brand })
      filtersByBrand.brand = [...brand]
      this.multiFilter(oldArr, filtersByBrand)
    }
  }
  
  handleYearsCheckbox = e => {
    const release_year = [...this.state.release_year]
    let indexOfYear
    const oldArr = [...this.state.pon]
    const filtersByYear = {
      brand : [...this.state.brand],
      release_year : [] 
    }
    // check if the check box is checked or unchecked
    if (e.target.checked) {
      release_year.push(e.target.value)
      this.setState({ release_year: release_year })
      filtersByYear.release_year = [...release_year]
      this.multiFilter(oldArr, filtersByYear)
    } else {
      indexOfYear = release_year.indexOf(e.target.value)
      release_year.splice(indexOfYear, 1)
      this.setState({ release_year: release_year })
      filtersByYear.release_year = [...release_year]
      this.multiFilter(oldArr, filtersByYear)
    }
  }

  render() {
    const shownbrand = { display: this.state.shownBrands ? 'block' : 'none'  }
    const shownyears = { display: this.state.shownYears ? 'block' : 'none'  }
    const { brand, release_year } = this.state
    let { phones } = this.state

    // Filter on search typing
    // TODO : normalize incoming data with regex (remove space) and find matching type
    if (this.state.filter) {
      phones = phones.filter(phone => 
        phone.name.toLowerCase()
          .includes(this.state.filter.toLowerCase()))
    }

    return (
      <div>
        <InputSection>
          <SearchBar filterType={this.filterType} />
          <FlexColumn>
            <Wrapper>
              <SelectBrandsBox 
                showBrandsCheckboxes={this.showBrandsCheckboxes} 
                selectedbrands={brand} />
              <FilterBrands 
                handleBrandsCheckbox={this.handleBrandsCheckbox} 
                style={shownbrand} />
            </Wrapper>
            <Wrapper>
              <SelectYearsBox 
                showYearsCheckboxes={this.showYearsCheckboxes} 
                selectedyears={release_year}/>
              <FilterYears 
                handleYearsCheckbox={this.handleYearsCheckbox} 
                style={shownyears} />
            </Wrapper>
          </FlexColumn>
        </InputSection>
        <PhoneLists phones={phones} />  
      </div>
    );
  }
}

export default App;

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
`

const FlexColumn = styled.div`
  display: flex;
  width: 500px;
  margin: 0 auto;
`
const Wrapper = styled.div`
  flex: 0 0 300px;
  margin: 20px 5px;
`