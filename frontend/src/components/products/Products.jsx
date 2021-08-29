import React from 'react'
import {Grid} from "@material-ui/core"
import Product from './product/Product'
import img1 from '../../images/MacBook-Pro.jpg'
import img2 from '../../images/running-shoes.jpeg'

const products=[
  {id:1,name:"Shoes",description:"Running Shoes",price:"$6",image:img2},
  {id:2,name:"Macbook",description:"Apple Mackbook",price:"$8",image:img1},
  {id:3,name:"Shoes3",description:"Running Shoes",price:"$5",image:img2},
  {id:4,name:"Shoes4",description:"Running Shoes",price:"$1",image:img2},
  {id:5,name:"Shoes5",description:"Running Shoes",price:"$67",image:img2},
]

const Products=()=>{
  return(
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product)=>(
          <Grid item key={product.id} xs={12} xm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ) )}
      </Grid>

    </main>
  )

}

export default Products
