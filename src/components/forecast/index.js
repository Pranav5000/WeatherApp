import React, { Component } from 'react'
import DailyForecast from './DailyForecast';
import HourlyForecast from './HourlyForecast';

export class ForecastDays extends Component {
    constructor(props) {
        super(props);
        this.state = {} 
    }
    render() {
        const { forecastdays, hourlyforecast, timezone} = this.props;
        
        return (
            <div>
            {
                forecastdays && forecastdays.slice(1).map((data, idx) => {
                    return <DailyForecast data={data} key={idx} />
                })
            }
            {
                 hourlyforecast && hourlyforecast.slice(5).map((data, idx) => {
                    return <HourlyForecast data={data} key={idx} />
                }) 
            }
            
            

            </div>
        )
    }
}

export default ForecastDays
