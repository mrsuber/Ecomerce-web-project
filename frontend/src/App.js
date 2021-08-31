
import {commerce} from './lib/commerce';
import {Products, Navbar, Cart,Checkout} from './components'
import {useState, useEffect} from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App(){
  const [products,setProducts]=useState([])
  const [cartt,setCartt]=useState({})

  const fetchProducts = async ()=>{
        const {data} = await commerce.products.list();
        setProducts(data)
      }

  const fetchCart = async ()=>{
        setCartt(await commerce.cart.retrieve())
       }
  const handleAddToCart = async (productId,quantity)=>{
        const response= await commerce.cart.add(productId,quantity)
        setCartt(response.cart)
        }
  const handleUpdateCartQty = async (productId,quantity)=>{
    const response =await commerce.cart.update(productId,{quantity})
    setCartt(response.cart)
  }
  const handleRemoveFromCart = async (productId) =>{
    const response = await commerce.cart.remove(productId);
    setCartt(response.cart)
  }

  const handleEmptyCart = async ()=>{
    const response = await commerce.cart.empty();
    setCartt(response.cart)

  }

  useEffect(()=>{
    fetchProducts();
    fetchCart();
  },[])

console.log(cartt)
  return(
    <Router>
      <div>
          <Navbar totalItems={cartt.total_items}/>
          <Switch>
              <Route exact path="/">
                <Products products={products} onAddToCart={handleAddToCart}/>
              </Route>

              <Route exact path="/cart">
                    <Cart
                    cart={cartt}
                    handleUpdateCartQty={handleUpdateCartQty}
                    handleRemoveFromCart={handleRemoveFromCart}
                    handleEmptyCart={handleEmptyCart}

                    />
              </Route>

              <Route exact path="/checkout">
                <Checkout />
              </Route>



          </Switch>
      </div>
      </Router>

  )
}
export default App
