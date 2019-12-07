import React, { Component } from 'react'
import { MDBCardBody,MDBCardHeader} from 'mdbreact'
import './DailyForecast.css'

export class DailyForecast extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getDay = (time) => {
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday ", "Friday", "Saturday"];
        return dayNames[(new Date(time).getDay())];
    }
    
    render() {
        const { data } = this.props;
         
        if(!data) return null;
        const timestamp = data.ts
        const time = new Date(timestamp * 1000)
        const day = this.getDay(time)
        const day2 = day.slice(0,3)
        
        return (
            <div>
            <MDBCardBody className="forecast-body">
            <MDBCardHeader className="forecast-header" >
                <div className="inner-container">
                    <div className="square">{day2}</div>
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

export default DailyForecast

