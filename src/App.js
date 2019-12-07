import React from 'react';
import './App.css';
import Weather from './components/Weather';
import Form from './components/Form'; 
// Day Weather
import light_drizzle_img from './images/weather/Light_Drizzle.gif'
import drizzle_img from './images/weather/Drizzle.gif'
import scattered_clouds_img from './images/weather/Scattered_Clouds.gif'
import broken_clouds_img from './images/weather/Broken_Clouds.gif'
import clear_sky_img from './images/weather/Clear_Sky.gif'
import few_clouds_img from './images/weather/Few_Clouds.gif'
import overcast_clouds_img from './images/weather/Overcast_Clouds.gif'
import snowfall_img from './images/weather/Snowfall.gif'
import heavy_snowfall_img from './images/weather/Heavy_Snowfall.gif'
import haze from './images/weather/Haze.gif'
import mist_img from './images/weather/Mist.gif'
import freezing_rain_img from './images/weather/Freezing_Rain.gif'
import light_rain_img from './images/weather/Light_Rain.gif'
import heavy_rain_img from './images/weather/Heavy_Rain.gif'
import moderate_rain_img from './images/weather/Moderate_Rain.gif'
import thunderstorm_img from './images/weather/Thunderstorm.gif'
import rain_img from './images/weather/Rain.gif'
import smoke_img from './images/weather/Smoke.gif'
import light_snowfall_img from './images/weather/Light_Snowfall.gif'
import shower_rain_img from './images/weather/Shower_Rain.gif'
// Night Weather
import thunderstorm_night_img from './images/weather-night/Thunderstorm_Night.gif'
import clearsky_night_img from './images/weather-night/Clear_Sky_Night.gif'
import few_clouds_night_img from './images/weather-night/Few_Clouds_Night.gif'
import overcast_clouds_night_img from './images/weather-night/Overcast_Clouds_Night.gif'
import scattered_clouds_night_img from './images/weather-night/Scattered_Clouds_Night.gif'
import broken_clouds_night_img from './images/weather-night/Broken_Clouds_Night.gif'
import light_snowfall_night_img from './images/weather-night/Light_Snowfall_Night.gif'
import heavy_snowfall_night_img from './images/weather-night/Heavy_Snowfall_Night.gif'
import snowfall_night_img from './images/weather-night/Snowfall_Night.gif'
import shower_rain_night_img from './images/weather-night/Shower_Rain_Night.gif'
import smoke_night_img from './images/weather-night/Smoke_Night.gif'
import haze_night_img from './images/weather-night/Haze_Night.gif'
import mist_night_img from './images/weather-night/Mist_Night.gif'
import heavy_rain_night_img from './images/weather-night/Heavy_Rain_Night.gif'
import moderate_rain_night_img from './images/weather-night/Moderate_Rain_Night.gif'
import light_rain_night_img from './images/weather-night/Light_Rain_Night.gif'
import light_drizzle_night_img from './images/weather-night/Light_Drizzle_Night.gif'
import drizzle_night_img from './images/weather-night/Drizzle_Night.gif'
import rain_night_img from './images/weather-night/Rain_Night.gif'
import freezing_rain_night_img from './images/weather-night/Freezing_Rain_Night.gif'

import Spinner from './components/Spinner'
import { ToastContainer, toast, Slide, Zoom, Flip, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DailyHourly from './components/forecast/DailyHourly';
import SunriseSunset from './components/forecast/SunriseSunset';
import Github from './components/Github';
import MadeWithLove from './components/MadeWithLove';
import moment from 'moment-timezone'

// weatherbit 
const API_KEY3 = process.env.REACT_APP_WEATHER_API_KEY

//ipgeolocation
const API_KEY2 = process.env.REACT_APP_LOCATION_API_KEY

const IP_LOCATION = `https://api.ipgeolocation.io/astronomy?apiKey=${API_KEY2}`

// weatherbit current, daily and hourly forecast
const CURRENT_API = `https://api.weatherbit.io/v2.0/current?`

const FORECAST_API = `https://api.weatherbit.io/v2.0/forecast/daily?`

const HOURLY_API = `https://api.weatherbit.io/v2.0/forecast/hourly?`

const sectionStyle = {
  background:'inherit',
  opacity: '0.42',
  filter: 'blur(1.2px)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position:'absolute',
  background: '#747d8c',
  boxShadow: '2rem 0 1rem 0 rgba(255,255,255,0.05)',
  border: '3px solid transparent' 
  };

class App extends React.Component  { 
  constructor(props) {
    super(props);
    
    this.state = {
      isLoading: true,
      lat: '',
      lon: '',
      city: '',
      country: '',
      humidity: '',
      temp: '',
      wind: '',
      description: '',
      maxTemp: '',
      minTemp: '',
      precip: '',
      pressure: '',
      hourlyforecast: '',
      error: '',
      sunrise: '',
      sunset: '',
      moonrise: '',
      moonset: '',
      today:'',
      timezone:''
    }
  }

  componentDidMount = async () => {
      // Tracking the location and 
      // Setting the state of latitude and longitude values
      navigator.geolocation.getCurrentPosition(async (position) => {
        this.setState({
          lat:  position.coords.latitude.toFixed(3),
          lon: position.coords.longitude.toFixed(3)
        }, () => {
            this.fetchWeather()
        })
        
      },
      (error) => {
        toast.error(`${error.message}`,{
          autoClose: 3000
        });
    },
      {
        enableHighAccuracy: true,
        timeout: 50000,
        maximumAge: 1000
      })      
  }

  getWeather = async (suggestionOrValue, isSuggestion) => {
    if(isSuggestion) { 
      const city = suggestionOrValue.name;
      const country = suggestionOrValue.country;

      try {
        // 1. weatherbit current data
        const api_call4 = await fetch(`https://api.weatherbit.io/v2.0/current?` + 
        `city=${city}&country=${country}&key=${API_KEY3}`)
        const data4 = await api_call4.json();
  
        // 2. weatherbit forecast data
        const api_call3 = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily` + 
        `?city=${city}&country=${country}&days=6&key=${API_KEY3}`)
        const data3 = await api_call3.json();

        // 3. weatherbit hourly data
        const api_call2 = await fetch(`https://api.weatherbit.io/v2.0/forecast/hourly` + 
        `?city=${city}&country=${country}&hours=10&key=${API_KEY3}`)
        const data2 = await api_call2.json();
  
        // 4. iplocation -> sunrise,sunset,moonrise and moonset
        const api_call = await fetch(`${IP_LOCATION}&lat=${data4.data[0].lat}&long=${data4.data[0].lon}`)
        const data = await api_call.json();
        
        if(city) {
        this.setState({
          temp: data4.data[0].temp,
          city: data4.data[0].city_name,
          country: data4.data[0].country_code,
          humidity: data4.data[0].rh,
          wind: data4.data[0].wind_spd,
          description: data4.data[0].weather.description,
          pressure: data4.data[0].pres,
          error: "",
          precip: data3.data[0].pop,
          forecastdays: data3.data,
          hourlyforecast: data2.data,
          today: data4.data[0].ts,
          timezone: data4.data[0].timezone,        
          maxTemp: data3.data[0].max_temp,
          minTemp: data3.data[0].min_temp,
          sunrise: data.sunrise,
          sunset: data.sunset,
          moonrise: data.moonrise,
          moonset: data.moonset,
          isLoading: false
        }, () => {
          localStorage.setItem('weather2', JSON.stringify(this.state))
        })
      } else if(city === '') {
        this.setState({
          temp: this.state.temp,
          city: this.state.city,
          country: this.state.country,
          humidity: this.state.humidity,
          wind: this.state.wind,
          description: this.state.description,
          pressure: this.state.pressure,
          forecastdays: this.state.forecastdays,
          hourlyforecast: this.state.hourlyforecast,
          today: this.state.today,
          timezone: this.state.timezone,
          precip: this.state.precip,
          maxTemp: this.state.maxTemp,
          minTemp: this.state.minTemp,
          sunrise: this.state.sunrise,
          sunset: this.state.sunset,
          moonrise: this.state.moonrise,
          moonset: this.state.moonset,
          error: toast.error("City cannot be empty",{
            autoClose: 3000
          })
        })
        
      } 
      }
      
      catch {
        toast.error('No Data Received', {
          autoClose: 3000
        })
      }
  
      localStorage.getItem('weather2')
    } 
    else {
      const city = suggestionOrValue;
      
      try {
        // 1. weatherbit current data
        const api_call4 = await fetch(`https://api.weatherbit.io/v2.0/current?` + 
        `city=${city}&key=${API_KEY3}`)
        const data4 = await api_call4.json();
  
        // 2. weatherbit forecast data
        const api_call3 = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily` + 
        `?city=${city}&days=6&key=${API_KEY3}`)
        const data3 = await api_call3.json();
  
        // 3. weatherbit hourly data
        const api_call2 = await fetch(`https://api.weatherbit.io/v2.0/forecast/hourly` + 
        `?city=${city}&hours=10&key=${API_KEY3}`)
        const data2 = await api_call2.json();
  
        // 4. iplocation -> sunrise,sunset,moonrise and moonset
        const api_call = await fetch(`${IP_LOCATION}&lat=${data4.data[0].lat}&long=${data4.data[0].lon}`)
        const data = await api_call.json();
        
        if(city) {
        this.setState({
          temp: data4.data[0].temp,
          city: data4.data[0].city_name,
          country: data4.data[0].country_code,
          humidity: data4.data[0].rh,
          wind: data4.data[0].wind_spd,
          description: data4.data[0].weather.description,
          pressure: data4.data[0].pres,
          error: "",
          precip: data3.data[0].pop,
          forecastdays: data3.data,
          hourlyforecast: data2.data,
          today: data4.data[0].ts,
          timezone: data4.data[0].timezone,        
          maxTemp: data3.data[0].max_temp,
          minTemp: data3.data[0].min_temp,
          sunrise: data.sunrise,
          sunset: data.sunset,
          moonrise: data.moonrise,
          moonset: data.moonset,
          isLoading: false
        }, () => {
          localStorage.setItem('weather2', JSON.stringify(this.state))
        })
      } else if(city === '') {
        this.setState({
          temp: this.state.temp,
          city: this.state.city,
          country: this.state.country,
          humidity: this.state.humidity,
          wind: this.state.wind,
          description: this.state.description,
          pressure: this.state.pressure,
          forecastdays: this.state.forecastdays,
          hourlyforecast: this.state.hourlyforecast,
          today: this.state.today,
          timezone: this.state.timezone,
          precip: this.state.precip,
          maxTemp: this.state.maxTemp,
          minTemp: this.state.minTemp,
          sunrise: this.state.sunrise,
          sunset: this.state.sunset,
          moonrise: this.state.moonrise,
          moonset: this.state.moonset,
          error: toast.error("City cannot be empty",{
            autoClose: 3000
          })
        })
        
      } 
      }
      
      catch {
        toast.error('No Data Received', {
          autoClose: 3000
        })
      }
      localStorage.getItem('weather2')
    }    
  }

  fetchWeather = async () => {
  const {lat, lon} = this.state

  // Current Weather
  fetch(`${CURRENT_API}lat=${lat}&lon=${lon}&key=${API_KEY3}`)
  .then(res => res.json()).then(responseJson => {
    try {
    this.setState({
    city: responseJson.data[0].city_name,
    country: responseJson.data[0].country_code,
    temp: responseJson.data[0].temp,
    wind: responseJson.data[0].wind_spd, 
    humidity: responseJson.data[0].rh,
    pressure: responseJson.data[0].pres,
    description: responseJson.data[0].weather.description,
    today: responseJson.data[0].ts,
    timezone: responseJson.data[0].timezone,
    isLoading: false, 
    }, () => {
      
      localStorage.setItem('weather', JSON.stringify(this.state))
    })
    } catch {
      toast.error('Error Code 429')
    }
    
  });

  // Sunrise, Sunset, Moonrise and Moonset
  fetch(`${IP_LOCATION}&lat=${lat}&long=${lon}`)
  .then(res => res.json()).then(responseJson => {
    try {
      this.setState({
        sunrise: responseJson.sunrise,
        sunset: responseJson.sunset,
        moonrise: responseJson.moonrise,
        moonset: responseJson.moonset,
      })
    
    } catch {
      toast.error('No Data Received')
    }
    
  });

  // Forecast Weather - Daily
  fetch(`${FORECAST_API}lat=${lat}&lon=${lon}&days=6&key=${API_KEY3}`)
  .then(res => res.json()).then(responseJson => {
    try {
      this.setState({
      forecastdays: responseJson.data,
      precip: responseJson.data[0].pop,
      maxTemp: responseJson.data[0].max_temp,
      minTemp: responseJson.data[0].min_temp,
      isLoading: false 
      } , () => {
        localStorage.setItem('weather', JSON.stringify(this.state))
      })
    } catch {
      toast.error('Too many requests')
    }
    
  });

  // Forecast Weather - Hourly
  fetch(`${HOURLY_API}lat=${lat}&lon=${lon}&hours=10&key=${API_KEY3}`)
  .then(res => res.json()).then(responseJson => {
    try {
      this.setState({
        hourlyforecast: responseJson.data,
        isLoading: false
      }, () => {
        localStorage.setItem('weather', JSON.stringify(this.state))
      })
      
    } catch {
      toast.error('Please wait some time')
    }
               
  }); 

  }

  render() {
    const {isLoading, forecastdays, hourlyforecast, precip} = this.state;
    const sunriseTime = this.state.sunrise.slice(0,5)
    const sunsetTime = this.state.sunset.slice(0,5)
    const time  = moment.tz(this.state.timezone).format('HH:mm')

    return (
    <React.Fragment> 
      <div className="container" style={{marginTop: '1.8em'}}>  
      <div className="row">
          
            <div className="col-sm-4 form-container">
              <Form 
              getWeather={this.getWeather}
              fetchWeather={this.fetchWeather}/>
              <ToastContainer transition={Bounce} 
              className = 'toast-background'/>    
            </div>

          {isLoading ? <Spinner/>:  
                            
          <React.Fragment>
          <div className="col-sm-8 image-container">
          {/* Weather Card */}
          <div className="background">
          <div className="container">
          
          <div id="card" className="weather" style={sectionStyle}></div>    
          
          <div id="card" className="weather2" style={{background: ''}}> 
          
                  
                  <div className="details">
                  
                      {/* Weather Details */}
                       <div className="content" style={{width: '105px'}}>
                        <Github/>
                        <Weather
                          temp={this.state.temp}
                          city={this.state.city}
                          country={this.state.country}
                          humidity={this.state.humidity}
                          description={this.state.description}
                          pressure={this.state.pressure}
                          wind={this.state.wind}
                          sunrise={this.state.sunrise}
                          sunset={this.state.sunset}
                          timezone={this.state.timezone}
                          maxTemp={this.state.maxTemp}
                          minTemp={this.state.minTemp}
                          precip={precip}
                          />
                          
                       </div>
 
                      {/* Forecast Cards */}
 
                      <div className="content" style={{width: '400px', marginTop: '-40px'}}>
                          
                             <div style={{display: 'table', width: '350px'}}>
                             <SunriseSunset 
                             style={{display: 'table-cell'}}
                             sunrise={this.state.sunrise} 
                             sunset={this.state.sunset}
                             moonrise={this.state.moonrise} 
                             moonset={this.state.moonset}
                             today={this.state.today}
                             timezone={this.state.timezone}
                           />      
                            </div>      
                          <DailyHourly timezone={this.state.timezone} forecastdays={forecastdays} hourlyforecast={hourlyforecast}/>   
                       </div>
                      {/* Forecast Cards Ends*/  }          
                  </div> 
              </div>
           </div>
           </div>
          {/* Video Background Starts */}
          <div>
          {
            (time >= sunsetTime || time <= sunriseTime) ?
            // Night Weather Videos 
             this.state.description == 'Haze' ? <img src={haze_night_img} id="myImg" /> : 
            [this.state.description == 'Light rain' ? <img src={light_rain_night_img} id="myImg" /> : 
            [this.state.description == 'Overcast clouds' ? <img src={overcast_clouds_night_img} id="myImg" /> : 
            [this.state.description == 'Clear sky' ? <img src={clearsky_night_img} id="myImg" /> :  
            [this.state.description == 'Few clouds' ? <img src={few_clouds_night_img} id="myImg" /> : 
            [this.state.description == 'Scattered clouds' ? <img src={scattered_clouds_night_img} id="myImg" />: 
            [this.state.description == 'Broken clouds' ? <img src={broken_clouds_night_img} id="myImg" /> : 
            [this.state.description == 'Shower rain' ? <img src={shower_rain_night_img} id="myImg" /> : 
            [this.state.description == 'Rain'? <img src={rain_night_img} id="myImg" />:
            [this.state.description == 'Drizzle'? <img src={drizzle_night_img} id="myImg" />:
            [this.state.description == 'Freezing rain' ? <img src={freezing_rain_night_img} id="myImg" />: 
            [this.state.description == 'Thunderstorm' ? <img src={thunderstorm_night_img} id="myImg" />: 
            [this.state.description == 'Snow' ? <img src={snowfall_night_img} id="myImg" />:
            [this.state.description == 'Light Snow' ? <img src={light_snowfall_night_img} id="myImg" />:
            [this.state.description == 'Heavy Snow' ? <img src={heavy_snowfall_night_img} id="myImg" />: 
            [this.state.description == 'Mist' ? <img src={mist_night_img} id="myImg" />: 
            [this.state.description == 'Smoke' ? <img src={smoke_night_img} id="myImg" />: 
            [this.state.description == 'Heavy intensity rain' ? <img src={heavy_rain_night_img} id="myImg" />:
            [this.state.description == 'Moderate rain' ? <img src={moderate_rain_night_img} id="myImg" />:
            [this.state.description == 'Light intensity drizzle' ? <img src={light_drizzle_night_img} id="myImg" /> :'']
            ]]]]]]]]]]]]]]]]]]  
            :
            // Day Weather Videos 
          this.state.description == 'Haze' ? <img src={haze} id="myImg" /> : 
          [this.state.description == 'Light rain' ? <img src={light_rain_img} id="myImg" /> : 
          [this.state.description == 'Overcast clouds' ? <img src={overcast_clouds_img} id="myImg" /> : 
          [this.state.description == 'Clear sky' ? <img src={clear_sky_img} id="myImg" /> :  
          [this.state.description == 'Few clouds' ? <img src={few_clouds_img} id="myImg" /> : 
          [this.state.description == 'Scattered clouds' ? <img src={scattered_clouds_img} id="myImg" />: 
          [this.state.description == 'Broken clouds' ? <img src={broken_clouds_img} id="myImg" /> : 
          [this.state.description == 'Shower rain' ? <img src={shower_rain_img} id="myImg" /> : 
          [this.state.description == 'Rain'? <img src={rain_img} id="myImg" />:
          [this.state.description == 'Drizzle'? <img src={drizzle_img} id="myImg" />:
          [this.state.description == 'Freezing rain' ? <img src={freezing_rain_img} id="myImg" />: 
          [this.state.description == 'Thunderstorm' ? <img src={thunderstorm_img} id="myImg" />: 
          [this.state.description == 'Snow' ? <img src={snowfall_img} id="myImg" />:
          [this.state.description == 'Light Snow' ? <img src={light_snowfall_img} id="myImg" />:
          [this.state.description == 'Heavy Snow' ? <img src={heavy_snowfall_img} id="myImg" />: 
          [this.state.description == 'Mist' ? <img src={mist_img} id="myImg" />: 
          [this.state.description == 'Smoke' ? <img src={smoke_img} id="myImg" />: 
          [this.state.description == 'Heavy intensity rain' ? <img src={heavy_rain_img} id="myImg" />:
          [this.state.description == 'Moderate rain' ? <img src={moderate_rain_img} id="myImg" />:
          [this.state.description == 'Light intensity drizzle' ? <img src={light_drizzle_img} id="myImg" /> :'']
          ]]]]]]]]]]]]]]]]]]
          }
          
          </div>
          {/* Video Background Ends */}
          </div>
          {/* Weather Card Ends */}
 
          </React.Fragment>
            
        }
        </div>
      </div>
      <MadeWithLove/>
    </React.Fragment>
    );
  }
}

export default App
