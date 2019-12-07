import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ForecastDays from '../forecast/index';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'none',
    width: 300,
    marginLeft:60,
    marginTop:4 
  },
  active: {
    background: 'rgba(117, 245, 239, 0.54)',
    opacity: 0.7,
    color: '#535c68',
    outline: 'none',
    "&:focus": {
      outline: 'none'
    }
  } 

}));

const DailyHourly = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  const {forecastdays, hourlyforecast, timezone} = props

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" style={{background: 'transparent'}}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab className={value === 0 ? classes.active : ""} 
          label="Daily" style={{fontFamily: 'Oxygen'}} {...a11yProps(0)}
          />
          <Tab className={value === 1 ? classes.active : ""}
           label="Hourly" style={{fontFamily: 'Oxygen'}} {...a11yProps(1)}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
            <ForecastDays forecastdays={forecastdays}/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
            <ForecastDays timezone={timezone}  hourlyforecast={hourlyforecast}/>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

export default DailyHourly
