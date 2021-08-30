import React from 'react'
import {AppBar,Toolbar,IconButton,Badge,MenuItem,Menu,Typography,} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
import useStyles from './styles'
import logo from '../../assets/logo.png'
const Navbar =({totalItems})=>{
  const classes=useStyles()
  return(
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
            <Typography variant="h6" className={classes.title} color="inherit">
                <img src={logo} alt="commerce.js" height="25px" className={classes.image}/>
                MSB-Shop
                <div className={classes.grow}/>
                <div className={classes.button}>
                  <IconButton aria-label="show cart items" color="inherit">
                      <Badge badgeContent={totalItems} color="secondary">
                          <ShoppingCart/>
                      </Badge>
                  </IconButton>
                </div>
            </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}
export default Navbar