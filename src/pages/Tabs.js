import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Input from "./Input"
import {InputAdornment, TextField, Button} from "@mui/material"
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <Box sx={{
          width: '100%',
             boxShadow: 3,
        //   width: '8rem',
        //   height: '5rem',
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          p: 1,
          m: 1,
          borderRadius: 2,
        
      }}>
          <Box sx={{ 
              
       }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab className='Tab' sx={{
                      backgroundColor: "green",
                      margin: 0.5
          }} label="Send" {...a11yProps(0)} />
          <Tab  sx={{
                      backgroundColor: "green",
                      margin: 0.5
          }} label="Track" {...a11yProps(1)} />
          <Tab className='hello'  sx={{
                      backgroundColor: "green",
              margin: 0.5
          }} label="Return" {...a11yProps(2)} />
        </Tabs>
      </Box>
          <TabPanel sx={{
          backgroundColor: "red"
      }} value={value} index={0}>
              <div>
                  <h4 className='text-dark fw-bold'>Send a parcel from E2.66(E2.22 + VAT) 
                  </h4>
          <Input />

          <hr />
          <div className='row' sx={{
            display: "flex",
            justifyContent: 'space-between',
            width: 100
          }}>
            <div className="col-sm-12 col-md-4">
                   <span>Send international parcel </span    >
              </div>
            <div className="col-sm-12 col-md-4">
                    <span>Send international parcel </span>
              </div>
            <div className="col-sm-12 col-md-4">
                <span>View our parcel size and weight guide</span>
              </div>
          </div>
    
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>
          <h3>Track</h3>
          <p>Enter your 16 digit tracking number or 8 digit calling card number.</p>

        </div>
           <TextField
          label="Tracking Number"
          id="outlined-start-adornment"
          sx={{ m: 1 }}
          InputProps={{
            startAdornment: <InputAdornment position="start">0</InputAdornment>,
          }}
        />
        <Button sx={{
          margin: 2,
          fontWeight: "bold"
           }} variant="contained" disabled>
        Track
      </Button>
        <hr />
        <p className='text-primary'>Need help finding your tracking your number?</p>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div>
          <h4 className='fw-bold text-dark'>Returning your parcel is easy </h4>
          <small className='text-dark'>Using our superfast, super simple service. We return parcels for high street, catalogues and online shops in the UK.</small>
        </div>
         <Box
      sx={{
        width: 500,
            maxWidth: '100%',
        margin: 3
      }}
    >
          <TextField fullWidth label="Search for retailers name" id="fullWidth" />
          <div>
             <Button sx={{
          
              margin: 2,
              fontWeight: "bold"
          
           }} variant="contained" disabled>
        Return Parcel
      </Button>
          </div>
        </Box>
        <hr />
        <small className='text-primary fw-bolder'>Need help returning your parcel?</small>
      </TabPanel>
    </Box>
  );
}
