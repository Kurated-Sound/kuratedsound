import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Search from "@material-ui/icons/Search";
import Email from "@material-ui/icons/Email";
import Face from "@material-ui/icons/Face";
import Settings from "@material-ui/icons/Settings";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore";
// core components
import GridContainer from "../prokit-src/muicomponents/Grid/GridContainer";
import GridItem from "../prokit-src/muicomponents/Grid/GridItem.js";
import Header from "../prokit-src/muicomponents/Header/Header.js";
import CustomInput from "../prokit-src/muicomponents/CustomInput/CustomInput.js";
import CustomDropdown from "../prokit-src/muicomponents/CustomDropdown/CustomDropdown.js";
import Button from "../prokit-src/muicomponents/CustomButtons/Button.js";
import HeaderLinks from "../prokit-src/muicomponents/Header/HeaderLinks.js";

// import navbarsStyle from "assets/jss/material-kit-pro-react/views/componentsSections/navbarsStyle.js";
import navbarsStyle from "../prokit-src/assets/jss/material-kit-pro-react/views/componentsSections/navbarsStyle";

import image from "../prokit-src/assets/img/bg.jpg";
import profileImage from "../prokit-src/assets/img/faces/avatar.jpg";

const useStyles = makeStyles(navbarsStyle);

export default function SectionNavbars({ ...rest }) {
  const classes = useStyles();
  return (
    <Header
      color="transparent"
      brand="Material Kit PRO React"
      links={<HeaderLinks dropdownHoverColor="info" />}
      fixed
      changeColorOnScroll={{
        height: 300,
        color: "info",
      }}
      {...rest}
    />
  );
}
