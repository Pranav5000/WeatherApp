import React from 'react'
import './Weather.css'
import Haze from '../Weather/Haze.js'
import HeavyRain from '../Weather/LightRain';
import LightRain from '../Weather/LightRain';
import ThunderRain from '../Weather/ThunderRain'
import ModerateRain from '../Weather/ModerateRain';
import ThunderLightRain from '../Weather/ThunderLightRain';
import BrokenClouds from '../Weather/BrokenClouds';
import ScatteredClouds from '../Weather/ScatteredClouds';
import ClearSky from '../Weather/ClearSky';
import OvercastClouds from '../Weather/OvercastClouds';
import Snow from '../Weather/Snow';
import uparrow from '../images/up-arrow.png';
import downarrow from '../images/down-arrow2.png';
import humidity from '../images/humidity.png';
import wind from '../images/wind.png';
import pressure from '../images/pressure.png';
import precip from '../images/precip.png';
import { ArrowTooltip } from './ArrowTooltip';
import FreezingRain from '../Weather/FreezingRain';
import ClearSkyNight from '../Weather/ClearSkyNight';
import moment from 'moment-timezone'
import OvercastCloudsNight from '../Weather/OvercastCloudsNight';
import NightRain from '../Weather/NightRain';
import SunnyRain from '../Weather/SunnyRain';
var countries = require("i18n-iso-countries");
countries.registerLocale(require("i18n-iso-countries/langs/en.json")); 

const Weather = props => {
    const sunriseTime = props.sunrise.slice(0,5)
    const sunsetTime = props.sunset.slice(0,5)
    const time  = moment.tz(props.timezone).format('HH:mm')

    const base_weather  = {'Haze': (<Haze/>), 'Light rain': (<LightRain/>),'Heavy rain': (<HeavyRain/>),
                          'Few clouds' : (<BrokenClouds/>), 'Scattered clouds': (<ScatteredClouds/>),
                          'Broken clouds' : (<BrokenClouds/>), 'Shower rain' : (<LightRain/>),
                          'Drizzle': (<LightRain/>), 'Thunderstorm' : (<ThunderRain/>),
                          'Snow' : (<Snow/>),'Mist' : (<Haze/>),'Freezing rain' : (<FreezingRain/>), 
                          'Smoke' : (<Haze/>),'Heavy intensity rain' : (<ThunderRain/>) ,
                          'Moderate rain' : (<ModerateRain/>),'Light intensity drizzle' : (<LightRain/>),
                          'Light intensity shower rain' : (<LightRain/>),
                          'Thunderstorm with rain' : (<ThunderRain/>),
                          'Thunderstorm with light rain' : (<ThunderLightRain/>),
                          'Very heavy rain' : (<ThunderLightRain/>), '': ''}

    const day_weather   = {'Overcast clouds': (<OvercastCloudsNight/>), 
                          'Clear sky': (<ClearSkyNight/>), 'Rain': (<NightRain/>)}
    const night_weather = {'Overcast clouds': (<OvercastClouds/>), 
                           'Clear sky': (<ClearSky/>), 'Rain': (<SunnyRain/>)}
    Object.assign(day_weather, base_weather);
    Object.assign(night_weather, base_weather);

    
            return <div>
                    { props.city && props.country && 
                        <h6 style={{color: 'white', fontSize:'15px',cursor:'default'}}>
                        <ArrowTooltip title={props.city + ', ' + countries.getName(props.country,"en")} placement="right">    
                                <span>
                                <strong>{(props.city.length > 6) ?  props.city.substr(0,6)+'...,' : props.city+', '} </strong>
                                <strong>{props.country}</strong> 
                                </span>
                            </ArrowTooltip>
                        </h6> 
                    }

                { props.temp && (props.temp === 0) ?
                    <div className="glow">{Math.trunc(props.temp)}° </div> : 
                    <div className="glow">{Math.trunc(props.temp)}° </div>}
                
                
                <div style={{width:'100%'}}>
                <div style={{width:'50%', display: 'inline-block'}}>
                {   
                props.minTemp && (props.minTemp === 0) ?    
                    <h6 style={{color: 'white'}}><strong><img src={downarrow}/>0°</strong></h6>: 
                    <h6 style={{color: 'white'}}><strong><img src={downarrow}/>{Math.trunc(props.minTemp)}°</strong></h6>
                }
                </div>
                <div style={{width:'50%', display: 'inline-block'}}>
                {   
                props.maxTemp && (props.maxTemp === 0) ?    
                    <h6 style={{color: 'white'}}><strong><img src={uparrow}/>0°</strong></h6>: 
                    <h6 style={{color: 'white'}}><strong><img src={uparrow}/>{Math.trunc(props.maxTemp)}°</strong></h6>
                }
                </div>
                </div>

                {<hr style={{color:'white'}}/>}
                <div style={{width:'100%'}}>
                    
                    { props.humidity &&
                    <div style={{width:'50%', display: 'inline-block', marginRight:'11px'}}>  
                    <ArrowTooltip title="Humidity" placement="top">
                        <img src={humidity} height="20px" style={{marginRight: '20px'}}/>
                    </ArrowTooltip>
                    <h6 style={{color: 'white'}}>
                        <strong>{props.humidity}%</strong>
                    </h6>
                    </div>}   
                    
                    
                    { props.precip && (props.precip === 0) ?   
                        <div style={{width:'25%', display: 'inline-block'}}>
                    <ArrowTooltip title="Precipitation" placement="top">
                        <img src={precip} height="20px" style={{marginRight: '20px'}}/>
                    </ArrowTooltip>
                    <h6 style={{color: 'white'}}>
                    <strong>0%</strong></h6>
                    </div> : 
                    <div style={{width:'25%', display: 'inline-block'}}>
                    <ArrowTooltip title="Precipitation" placement="top">
                        <img src={precip} height="20px" style={{marginRight: '20px'}}/>
                    </ArrowTooltip>
                    <h6 style={{color: 'white'}}><strong>{props.precip}%</strong></h6>
                    </div>
                    } 
                </div>
                <div style={{width:'100%'}}>
                { props.wind && 
                <div style={{width: '50%', display: 'inline-block'}}>
                    <ArrowTooltip title="Wind" placement="top">
                        <img src={wind} height="25px" style={{marginRight: '10px'}}/>
                    </ArrowTooltip>
                    <h6 style={{color: 'white'}}>
                        <strong>{Math.trunc(props.wind * 3.6)}{' '}km/h</strong>
                    </h6>
                </div>
                }
                { props.pressure &&  
                <div style={{width: '50%', display: 'inline-block'}}>
                    <ArrowTooltip title="Pressure" placement="top">
                        <img src={pressure} height="25px" style={{marginRight: '3px'}}/>
                    </ArrowTooltip>
                    <h6 style={{color: 'white'}}>
                        <strong style={{marginLeft: '4px'}}>{Math.trunc(props.pressure)}{' '}hpa</strong>
                    </h6>
                </div>
                }
                </div>
                
                {<hr style={{color:'white'}}/>}
                { props.description && <h6 style={{color: 'white', fontSize:'12px'}}>
                <strong>{props.description}</strong></h6>}
                { props.error && <h6><strong>{props.error}</strong></h6>}
                { (time >= sunsetTime || time <= sunriseTime) ? 
                    day_weather[props.description]: night_weather[props.description]}
            </div>    
            }
            

export default Weather;