import React from 'react'
import './NavibarStyle.js';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import navbarsStyle from "./NavibarStyle.js";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
// core components
import Header from "./Header/Header.js";
import Button from "./CustomButtons/Button";

const useStyles = makeStyles(navbarsStyle);

const Navibar = () => {

const classes = useStyles();

  return (
    // <Navbar collapseOnSelect expand='lg' className='navbar-light bg-light'>
    //   <Navbar.Brand href="/" >K_S</Navbar.Brand>
    //   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //   <Navbar.Collapse id="responsive-navbar-nav">
    //     <Nav className="mr-auto">
    //      <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
    //      <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
    //      <Nav.Item><Nav.Link href="/services">Services</Nav.Link></Nav.Item>
    //      <Nav.Item><Nav.Link href="/contact">Contact Us</Nav.Link></Nav.Item>
    //     </Nav>
    //     <Nav className='ml-auto'>
    //       <Nav.Link href="/login">Login</Nav.Link>
    //       <Nav.Link href="/signup">Sign Up</Nav.Link>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
  <Header
  brand="Navbar with notifications"
  color="dark"
  // links={
    // <List className={classes.list + " " + classes.mlAuto}>
    //   <ListItem className={classes.listItem}>
    //     <Button
    //       href="#pablo"
    //       className={classes.navLink}
    //       onClick={e => e.preventDefault()}
    //       color="transparent"
    //     >
    //       Discover
    //     </Button>
    //   </ListItem>
    //   <ListItem className={classes.listItem}>
    //     <Button
    //       href="#pablo"
    //       className={classes.navLink}
    //       onClick={e => e.preventDefault()}
    //       color="transparent"
    //     >
    //       Wishlist
    //     </Button>
    //   </ListItem>
    //   <ListItem className={classes.listItem}>
    //     <Button
    //       href="#pablo"
    //       className={classes.notificationNavLink}
    //       onClick={e => e.preventDefault()}
    //       color="rose"
    //       justIcon
    //       round
    //     >
    //       <Email />
    //     </Button>
    //   </ListItem>
    //   <ListItem className={classes.listItem}>
    //   </ListItem>
    // </List>
  // }
/>
  );
}

export default Navibar;