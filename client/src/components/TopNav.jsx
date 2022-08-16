import { AppBar, Toolbar } from "@mui/material"

export const TopNav = () => {

  return(
    <AppBar id="main-nav-bar">
      <Toolbar>
        <div className="title-bundle">
        <h5 id="title-header-name">Derine Banis</h5>
        <h6 id="title-header-occupation">Full Stack Web Developer</h6>
        </div>
      </Toolbar>
    </AppBar>
  )
}