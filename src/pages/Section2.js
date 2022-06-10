import React from 'react'
import { Container ,Box , Button} from '@mui/material'
import Table from "./Table"
import Accordion from "../Accordion/hello"
import Fade from 'react-reveal/Fade';
import Spin from 'react-reveal/Spin';
import Jello from 'react-reveal/Jello';
import Pulse from 'react-reveal/Pulse';
import RubberBand from 'react-reveal/RubberBand';

const Section2 = () => {
    return (
      <div>
      <div className='section2'>
          <Container>
              <Box >
                        <div className='row section-row'>
                              <Fade left>
                      <div className="col-md-6 ">
                          <img src="./hermes-play.svg" className='img'    alt="" />
                                </div>
                            </Fade>
                            <Fade right>

                      <div className="col-md-6 text-center text-md-start">
                          <h2>Bring your parcel to <br /> life with a video <br /> message</h2>
                          <p>Download our app to send a personalised <br /> and meaningful video message with your parcel.</p>
                            <div className='g-2'>
                              <img src="./app.svg" className='m-3' alt="" />
                              <img src="./google.svg"  alt="" />
                      </div>
                                </div>
                                 </Fade>
                    
                  </div>
                        <div className="row mat">
                             <Fade left>
                      <div className="col-md-6 heyy">
                            <div className='overlay'>
                              <div className="over">
                                  <Table/>
                              </div>
                          </div>
                                </div>
                            </Fade>
                            <Fade right>
                          
                      <div   className="col-md-6 my-4 text-center text-md-start">
                          <h2>See where Hermes <br /> is CHEAPER than <br /> Royal Mail</h2>
                          <p>Want to send a parcel? We're cheaper! Here's <br /> how much you can save by sending your parcel <br /> with Hermes.</p>
                          <Button variant="contained">Send a parcel</Button>
                                </div>
                                </Fade>
                  </div>
           </Box>
                    <div className="row money text-white">
                        <Fade left>
                            <div className="col-md-6 sam">
                       <img src="./parcelshop-open.svg" alt="" />
                      
                            </div>
                            </Fade>
                    <Fade right>
                  <div className="col-md-6 text-center text-md-start">
                        <h2>It's EASY too!</h2>
                      <p className='text-white'>It's easy to send from our 7,300+ local<br /> ParcelShops & Lockers!</p>
                      <ul>
                          <li>Longer opening hours</li>
                          <li>Open 7 days a week</li>
                          <li>FREE parking nearby</li>
                      </ul>
                      <p className='text-white'>We also offer a parcel courier service. Just tell us <br />where you’d like your parcel collecting from: <br /> your work, home or wherever you’d like!</p>
                       <Button variant="contained" className='fw-bold'>Our services</Button>
                            </div>
                            </Fade>
              </div>
              
                    <div className='row stu'>
                        <Fade left>
                  <div className="col-md-6">
                      <img src="./hermes-integrations.svg" alt="" />
                            </div>
                        </Fade>
                        <Fade right>
                  <div className="col-md-6 text-white text-center text-md-start">
                      <h2 >Sending lots of <br /> parcels is much  <br /> FASTER</h2>
                      <p className='text-white'>If you send lots of parcels you can sort it in <br /> seconds by connecting your Hermes account <br /> with eBay, Amazon and Shopify. You can also <br /> upload a CSV file - whatever's easiest!</p>
                       <Button variant="contained" className='fw-bold'>Hermes Integrations</Button>

                            </div>
                            </Fade>
              </div>
                    <div className="row touch">
                        <Fade left>
                  <div className="col-md-6">
                      <img src="./hermes-courier-pda.svg" alt="" />
                            </div>
                        </Fade>
                        <Fade right>
                  <div className="col-md-6 text-white text-center text-md-start">
                      <h2 >You get a PREMIUM <br /> service with us</h2>
                      <p className='text-white'>You get all of this ABSOLUTELY FREE when you <br />  use Hermes for your parcel delivery:</p>
                      <ul>
                          <li>Regular, real-time tracking information</li>
                          <li>A delivery time window on the day</li>
                          <li>Divert to a neighbour or safe place</li>
                          <li>Safe place delivery photo confirmation</li>
                          <li>Includes £20 FREE parcel cover*</li>
                      </ul>
                      <p className='text-white'>We can also arrange for a friendly, local parcel <br /> courier to collect your parcel from you if it's more <br /> convenient.</p>
                      <p className='text-white'>*Excludes Postable parcels</p>
                      <Button variant="contained" className='fw-bold'>How to send parcel</Button>
                            </div>
                            </Fade>
              </div>

                    <div className="row told text-white">
                        <Fade left>
                  <div className="col-md-6">
                      <img src="./client.svg" alt="" />
                            </div>
                        </Fade>
                        <Fade right>
                  <div className="col-md-6 text-center text-md-start">
                      <h2>We’re TRUSTED by <br />our customers & <br /> retailers</h2>
                      <p className='text-white'>We provide delivery services for most of the UK's <br /> We provide delivery services for most of the UK's <br /> with eBay, Amazon and Shopify. You can also <br /> upload a CSV file - whatever's easiest!</p>
                      
                    </div>
                    </Fade>
              </div>
             <Spin>
              <div className="guy ">
                  <div className="girl row">
                      <div className='col-md-3 text-center text-md-start    '>
                          <br />
                          <h4>Excellent</h4>
                          <br />
                          <img src="./star.jpg"  alt="" /> <br /> 
                          <small>Based on <span>2,835,200</span></small> <br /> 
                          <img src="./trust.png" alt="" />
                      </div>
                      <div className='col-md-3 d-none d-md-block'>
                          <br />
                          <img src="./star.jpg" alt="" />
                          <p className='text-dark fw-bold'>Services</p>
                          <small className='fw-bold'>Good services</small> <br />
                          <small className='fw-bold'>Christine Paul </small>
                          <br /> <br />
                          <small className='fw-bold '>Showing our 4 & 5 star reviews</small>
                      </div>
                      <div className='col-md-3  d-none d-md-block'>
                          <br />
                          <img src="./star.jpg" alt="" />
                          <p className='fw-bold text-dark'>The item were delivered within the timeframe <br /> the seller  specified</p>
                          <small className='text-dark fw-bold'>Linda Fallon</small>
                      </div>
                      <div className='col-md-3  d-none d-md-block'>
                          <br />
                          <img src="./star.jpg" alt="" />
                          <h4 className='text-dark fw-bold'>Great</h4>
                          <p className='text-dark fw-bold'>Always excellent services, on time and helpful </p>
                          <small className='text-dark fw-bold'>LjYORDAN</small>
                      </div>
                  </div>
                </div>
</Spin>

                    
           

          </Container>
        
   
            </div> 
            <Container>
                    {/* Cheaper Section */}
                <Pulse>
              <div className="parcel woo d-none d-md-flex row">
                  <div className="col-md-2">
                      <ul>
                          <li className='child'>Send a parcel</li>
                          <li>what can i and cannot send</li>
                          <li>How to weight your parcel</li>
                          <li>How to wrap your parcel</li>
                      </ul>
                  </div>
                  <div className="col-md-2">
                      <ul>
                          <li className='child'>Track a parcel</li>
                          <li>Return a parcel</li>
                          <li>How to return a parcel</li>
                      </ul>
                  </div>
                  <div className="col-md-2">
                      <ul>
                          <li className='child'>Our services</li>
                          <li>Our prices</li>
                          <li>Hermes mobile app</li>
                          <li>Alexa</li>
                          <li>Google Assistant</li>
                      </ul>
                  </div>
                  <div className="col-md-2">
                      <ul>
                          <li className='child'>ParcelShops</li>
                          <li>Lockers</li>
                          <li>Find a ParcelShop</li>
                      </ul>
                  </div>
                  <div className="col-md-2">
                      <ul>
                          <li className='child'>Help center</li>
                          <li>FAQS</li>
                      </ul>
                  </div>
                  <div className="col-md-2">
                      <ul>
                          <li className='child' >News</li>
                          <li>Press</li>
                          <li>Coronavirus update</li>
                          <li>Cyber Security</li>
                          <li>Environmental Social  and Governance</li>
                      </ul>
                  </div>
              </div>

</Pulse>
            {/* Accordion */}
                <Accordion />
            </Container>
            <div className="cheaper d-none d-md-flex ">
                  <div className="one">
                      <h5 className='send fw-bold'>Send cheaper and easier with Hermes</h5>
                      <p className='text-dark fw-bld'>Download our app</p>
                  </div>
                  <div className="two ">
                      <img src="./appstore.svg"  alt="" />
                      <img src="./google-play-store.svg" className='m-3' alt="" />
                </div>   
                </div>
         
            <Container>
                <div className="row footer my-5 pb-5">
                    <div className="col-md-2">
                        <small>Terms & Conditions</small>
                    </div>
                    <div className="col-md-2">
                        <small>Privacy Policy</small>
                    </div>
                    <div className="col-md-2">
                        <small>Terms of Use</small>
                    </div>
                    <div className="col-md-2">
                        Modern Slavery
                    </div>
                    <div className="col-md-2">
                        <small>Additional Policies</small>
                    </div>
                    <div className="col-md-2">
                        <small className='fw-bold'>&#169; Hermes 2021</small>
                    </div>
                </div>
            </Container>
          
 </div>
  )
}

export default Section2