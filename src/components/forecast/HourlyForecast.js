import React, { Component } from 'react'
import { MDBCardBody,MDBCardHeader} from 'mdbreact'
import './HourlyForecast.css'
import moment from 'moment-timezone'

export class HourlyForecast extends Component {
    constructor(props) {
        super(props);
        this.state = {};  
    }
    render() {
        const { data, timezone } = this.props;       

        if(!data) return null; 

        // Code for other city's local time based on their time-zone
        const local = new Date(data.timestamp_local)
        const fmt   = "h A";
        const m = moment.tz(local, fmt, timezone).utc().format(fmt);

        // Code for your city's local time and time-zone
        // Just uncomment to get data with your country's Standard Time
        // const time = data.datetime
        // const time2 = time.slice(11,13)
        // const time3 = time2 >= 12 && (time2 - 12 || 12) + ' PM' || ((Number(time2 || 12) || 12) + ' AM')
        
        return ( 
            
            <div>
            <MDBCardBody className="forecast-body">
            <MDBCardHeader className="forecast-header" >
                <div className="inner-container">
                    <div className="square2">{m}</div> 
                    <img src={`https://www.weatherbit.io/static/img/icons/${data.weather.icon}.png`} />
                    <div className="text">{data.temp}°C</div>
                    <div className="muted-text">{data.weather.description}</div> 
                </div>
            </MDBCardHeader>  
             
            </MDBCardBody>
            <br/>
            </div>
        )
    }
}

export default HourlyForecast

