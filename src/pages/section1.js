import React from 'react'
import { Container, TextField, Box, Tab, Typography } from '@mui/material';
import Section2 from './Section2';
// import {Tab} from "./Tabs"
import Rotate from 'react-reveal/Rotate';
import Slide from 'react-reveal/Slide';
import Section from "./Tabs"
 import Bounce from 'react-reveal/Bounce';
const section1 = () => {
  return (
      <div className='section1'>
          <div className='pim'>
          <Container sx={{
              padding: 7,
              display: "flex",
              justifyContent: "space-around",

              }}>
                          <Rotate top left>

          <div>
                  <h1>Your cheap parcel <br /> delivery service</h1>
                  
                      </div>
                  </Rotate>
                  <Slide right>
              <div>
                    <img src="./section1.svg" width={250} alt="" />
                      </div>
                      </Slide>
              </Container>
                 </div>
          <Container sx={{
              paddingTop:  2
          }}>
              <Section/>
          </Container>

          <Container>
              <div className="row mt-5  ">
                     <Bounce left>
                  <div className="col-sm-12 col-md-4  mb-2     japa flex">
                      <img src="./img-1.svg" alt="" />
                      <div className='ms-3'>
                          <h6>Next Day Delivery</h6>
                           <p className='block'>Hurry! Send before 12pm</p>
                        <a href="">Set a save place</a>
                      </div>                               
                      </div> 
                  </Bounce>
                      <Bounce bottom>
                  <div className="col-sm-12 col-md-4 japa">
                      <img src="./img-2.svg" alt="" />
                      <div className='ms-3'>
                      <h6>Drop off at any <br /> ParcelShop</h6>
                      <p>5400+ to choose from</p>
                      </div>               
                      </div>
                  </Bounce>
                      <Bounce right>

                  <div className="col-sm-12 col-md-4 japa">
                      <img src="./img-3.svg" alt="" />
                      <div className='ms-3'>
                             <h6>Bulk send</h6>
                      <p>Quick & easy imports</p>
                      <a href="">Bulk send</a>
                      </div>          
                      </div>
                       </Bounce>
                </div>
          </Container>
          
          <Section2 />

          

          
      </div>
      
  )
}

export default section1