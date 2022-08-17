import { AppBar, Toolbar } from "@mui/material"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import "../styles/topNav.scss"
import img from "../assets/logo.png"
export const TopNav = () => {

  return(
    <AppBar id="main-nav-bar">
      <div id="nav-left">
        <MenuOutlinedIcon id="nav-bar-menu"/>
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