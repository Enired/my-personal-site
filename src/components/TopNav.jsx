//React
import { useState } from "react";

//MUI Materials
import { AppBar, Toolbar } from "@mui/material"
import {Menu, MenuItem} from "@mui/material";
//MUI Icons
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
//Styles
import "../styles/topNav.scss"
import img from "../assets/logo.png"

export const TopNav = (props) => {

  //FOR DROPDOWN MENU -- START
  const [anchor, setAnchor] = useState(null)
  const openMenu = (event) => {
    setAnchor(event.currentTarget);
  }
  const closeMenu = () => {
    setAnchor(null)
  }
  const open= Boolean(anchor)
  //FOR DROPDOWN MENU -- END

  return(
    <AppBar id="main-nav-bar">

      <div id="nav-left">

        <div 
        id="nav-bar-menu" 
        onClick={(event)=>openMenu(event)}
        >
        
        <MenuOutlinedIcon />
        </div>

        <Menu id="nav-bar-menu-dropdown"
        anchorEl={anchor}
        open={open}
        onClose={closeMenu}
        >
          <MenuItem 
          className="nav-bar-menu-dropdown-item" 
          onClick={()=>{props.autoScroll(props.aboutMeRef); closeMenu()}}
          >
            About Me
          </MenuItem>

          <MenuItem 
          className="nav-bar-menu-dropdown-item" 
          onClick={()=>{props.autoScroll(props.skillsRef); closeMenu()}}>
            Skills
          </MenuItem>

          <MenuItem 
          className="nav-bar-menu-dropdown-item" 
          onClick={()=>{props.autoScroll(props.projectRef); closeMenu()}}>
            Projects
          </MenuItem>

          <MenuItem 
          className="nav-bar-menu-dropdown-item" 
          onClick={()=>{props.autoScroll(props.contactRef); closeMenu()}}>
            Contact Me
          </MenuItem>
          
          <MenuItem 
          className="nav-bar-menu-dropdown-item" 
          onClick={()=>{closeMenu()}}>
            Close
            <CancelOutlinedIcon 
            id="nav-dropdown-close-icon"/>
          </MenuItem>
        </Menu>

        

        <div id="title-bundle">

          <h5 id="title-header-name">Derine Banis</h5>
          <h6 id="title-header-occupation">Full Stack Web Developer</h6>

        </div>

      </div>

      <div id="nav-right">

        <img id="logo" src={img}></img>

      </div>

    </AppBar>
  )
}