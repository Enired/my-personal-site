import { AppBar, Toolbar } from "@mui/material"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import "../styles/topNav.scss"
export const TopNav = () => {

  return(
    <AppBar id="main-nav-bar">
        <MenuOutlinedIcon id="nav-bar-menu"/>
        <div className="title-bundle">
          <h5 id="title-header-name">Derine Banis</h5>
          <h6 id="title-header-occupation">Full Stack Web Developer</h6>
        </div>
    </AppBar>
  )
}