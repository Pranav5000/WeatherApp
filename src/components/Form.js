import React from 'react'
import { ArrowTooltip } from './ArrowTooltip'
import gps from '../images/gps.png'
import 'react-toastify/dist/ReactToastify.css';
import Autosuggest from 'react-autosuggest';
import { highlight } from './Helper'
import cities from 'cities.json';
import './Form.css';

import { MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBBtn} from 'mdbreact'

import countries from 'i18n-iso-countries'
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

const sectionStyle = {
    background: '#747d8c',
    opacity: '0.52',
    width: '90%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height:'99%',
    position:'absolute',
    filter:'blur(2.2px)'
    }; 

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase(); 
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : cities.filter(data =>
    data.name.toLowerCase().slice(0, inputLength) === inputValue
  ).slice(0,4);
};
 
// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion.
const getSuggestionValue = suggestion => suggestion.name
 
const renderSuggestion = suggestion => 
(
  
  <table>
        <tbody >
          <ArrowTooltip title={suggestion.name + ', ' + countries.getName(suggestion.country,"en")} placement="top">
          <tr className="table-row">
          <td style={{ width: '88%' }} dangerouslySetInnerHTML=
          {highlight(suggestion.name, suggestion.value)}></td>
          <td style={{ width: '12%' }}>{suggestion.country}</td>
        </tr>
          </ArrowTooltip>
        </tbody>
      </table>
);

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: [] 
    };
  }
 
  onChange = (event, { newValue}) => {
    this.setState({
      value: newValue,
    });
  };
 
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };
 
  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  onSuggestionSelected = (event, {suggestion}) => {
    const isSuggestion = true
    this.props.getWeather(suggestion, isSuggestion)
  }

  onClick = (e) => {
    e.preventDefault()
    const value = e.target.value
    const isSuggestion = false
    this.props.getWeather(value, isSuggestion)
  }


  render(){
    const { value, suggestions} = this.state;
 
    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Search City...',
      value,
      onChange: this.onChange
    };

    return (

      <div>  
 <MDBContainer style={{height: '480px', marginTop: '20px'}}>
 <MDBRow>
 <MDBCol>
 <MDBCard  style={sectionStyle}></MDBCard>
 <MDBCard style={{zIndex:'1', background: 'none'}}>
 <MDBCardBody>
 <MDBCardHeader style={{background: '#e0f7fa', opacity:'0.6', borderRadius: '10px',
    fontFamily: 'Josefin Sans'}}>
      <h3 className="my-3 text-center" style={{color: '#535c68'}}>
         Weather Finder
      </h3>
    </MDBCardHeader>
    <br/>    
 <form>
      <div width="100%">
        <div style={{width:'90%', display:'inline-block'}}>
<Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        onSuggestionSelected={this.onSuggestionSelected}
/>
        </div>
        <ArrowTooltip title="Track Location" placement="top">
          <span style={{width:'10%', display:'inline-block', cursor:'pointer'}} 
            onClick={this.props.fetchWeather}>
            <img src={gps} width="25px" height="25px" />
          </span>
        </ArrowTooltip>  
      </div>
      <br/>
  
      <div className="text-center mt-4">
      
        <MDBBtn
          className="mb-3 btn-block"
          type="submit"
          value={inputProps.value} 
          onClick={e => this.onClick(e)}
          style={{background: '#e0f7fa', opacity:'0.6', 
                  borderRadius: '10px',fontFamily: 'Josefin Sans',
                 boxShadow: '0 8px 6px -6px black'}}
        >
          Search Weather
        </MDBBtn>
        </div>
      </form>
      </MDBCardBody>
  </MDBCard>
  </MDBCol>
  </MDBRow>
  </MDBContainer>
  </div>
    )
  }
}

export default Form;
