import React from 'react'
import {Container, Box}from '@mui/material';
import { Link } from 'react-router-dom';

const Heading = () => {
  return (
      <div>
          <div className='first'>
              <Box className='peter' sx={{
                  padding: 2,
              backgroundColor: "rgb(0, 30, 60)"
                  
              }}>
                  <Container sx={{
                      display: "flex",
                      justifyContent: "space-between"

                  }}>
              <div>
                      <a href="" className='sub '>Personal</a>
                      <a href="" className='sell'>Business</a>
                  </div>
                  <div>
                      <a href="" className='sign'>Sign in</a>
                      <a href="" className='sign'>Sign up</a>
                      </div>
                      </Container>
              </Box>
              </div>
    </div>
  )
}

export default Heading