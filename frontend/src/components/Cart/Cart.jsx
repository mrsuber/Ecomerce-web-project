import React from 'react'
import {Container,Typography,Button,Grid} from "@material-ui/core"
import CartItem from './CartItem/CartItem'
import {Link} from 'react-router-dom'
import useStyles from './styles'

const Cart = ({cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart}) => {
      const classes=useStyles()


      const EmptyCart=()=>{
            return(
                  <Typography variant="subtitle1">
                  You have no items in your Shopping Cart,
                    <Link to="/" className={classes.link}>start adding some</Link>!
                  </Typography>
      )}

      const FilledCart=()=>{
              return(
                <>
                <Grid container spacing={3} justify="center">
                  {cart.line_items.map((item)=>(
                    <Grid item xs={12} xm={6} md={4} lg={3} key={item.id}>
                      <CartItem
                      item={item}
                      handleUpdateCartQty={handleUpdateCartQty}
                      handleRemoveFromCart={handleRemoveFromCart}


                      />
                    </Grid>

                  ))}
                </Grid>
                <div className={classes.cardDetails}>
                  <Typography variant="h4">Subtotal:{cart.subtotal.formatted_with_symbol  }</Typography>
                  <div>
                    <Button className={classes.emptyButton} size="large" type='button' variant='contained' color="secondary" onClick={handleEmptyCart}>Empty Cart</Button>
                    <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type='button' variant='contained' color="primary">Checkout</Button>

                  </div>
                </div>
              </>
      )}
      if(!cart.line_items) return 'Loading .....'

      return (
        <Container>
          <div className={classes.toolbar} />
          <Typography className={classes.title} varaint="h3" gutterBottom>Your Shopping Cart</Typography>
          {!cart.line_items.length? <EmptyCart /> : <FilledCart />}
        </Container>
      )
}

export default Cart
