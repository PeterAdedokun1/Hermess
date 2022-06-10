import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './Data';
import "./Navbar.css"
// import DeleteIcon from '@mui/icons-material/DeleteIcon';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Container, DeleteIcon } from '@mui/material';
import Typography from '@mui/material/Typography';
import Popper from '@mui/material/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import Popover from "./popover"
// import logo from './logo.svg';
// import logo from "./hermes-logo.svg"

 export  const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);
    return (
    //   <Container>
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
                  <img src="./hermes-logo.svg" className='logo' alt='logo' />
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text , desc} = link;
              return (
                  <li key={id}>                      
                    <a href={url} >{text}</a>     
                </li>
              );
            })}
          </ul>
        </div>
        <ul className='social-icons'>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a className='text-white' href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
            </nav>
            // {/* </Container> */}
  );
};

export default Navbar;
