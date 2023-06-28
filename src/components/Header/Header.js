import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import './headercss.css'
// import { styled } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import MoreIcon from '@mui/icons-material/MoreVert';

const Header = () =>{

    return(
        <Navbar className="navbar" bg="navbar" expand="lg">
        <Container>
        <Navbar.Brand href="/"><img className="header-logo" src={'WCS-Name-ForWebHeader.png'} /></Navbar.Brand>
        <div className='header-links' >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-end">
                <NavDropdown title="Production" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/video-production" style={{color:'#D5EEBB'}} >Video Production</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/post-production" style={{color:'#D5EEBB'}}>Post Production</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/audio-production" style={{color:'#D5EEBB'}}>Audio Production</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/photography" style={{color:'#D5EEBB'}}>Photography</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link  href="/about"><span className="nav-item">About Us</span></Nav.Link>
                <Nav.Link  href="/web"><span className="nav-item">Web Solutions</span></Nav.Link>
                <Nav.Link  href="/ad-service"><span className="nav-item">Ad Servicing</span></Nav.Link>
                
              </Nav>
            </Navbar.Collapse>

        </div>
          
          {/* <Navbar.Brand href="/"><span className='navtext'>Warwick Creative Studios</span></Navbar.Brand> */}
          {/* <Navbar.Brand href="/"><img className="header-logo" src={'WCS-Name-ForWebHeader.png'} /></Navbar.Brand> */}
        </Container>
      </Navbar>
    )
}

export default Header