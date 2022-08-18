import { AppBar, Toolbar } from "@mui/material"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import "../styles/topNav.scss"
import img from "../assets/logo.png"
import { useState } from "react";
import {Menu, MenuItem} from "@mui/material";
export const TopNav = () => {

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
        >
          <MenuItem className="nav-bar-menu-dropdown-item" onClick={()=>{console.log('Clicked About Me Link')}}>About Me</MenuItem>
          <MenuItem className="nav-bar-menu-dropdown-item" onClick={(event)=>{closeMenu(event)}}>Close</MenuItem>
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