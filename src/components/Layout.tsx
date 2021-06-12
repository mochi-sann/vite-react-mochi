import React from "react"

import AppBar from "@material-ui/core/AppBar"
import Typography from "@material-ui/core/Typography"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

import Toolbar from "@material-ui/core/Toolbar"

import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import { useSelector } from "react-redux"
import { TitleGen } from "../store/Title.store"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    },
    appbar: {
      marginBottom: 10
    }
  })
)
export type Props = {
  children: React.ReactNode
  title?: string
}

const Layout: React.VFC<Props> = (props) => {
  const classes = useStyles()
  const SiteTitle = useSelector(TitleGen)

  return (
    <div className="	min-h-screen">
      <AppBar className={classes.appbar} position="sticky">
        <Toolbar>
          <IconButton
            aria-label="menu"
            className={classes.menuButton}
            color="inherit"
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6">
            {SiteTitle.AppBarName || "Home"}
          </Typography>
        </Toolbar>
      </AppBar>

      <div className="max-w-screen-md	m-auto ">{props.children}</div>
    </div>
  )
}

export default Layout
