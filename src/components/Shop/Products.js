import { useEffect } from 'react'
import ProductItem from './ProductItem'
import classes from './Products.module.css'

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    title: 'First Book',
    price: 6,
    description: 'first Book i ever Wrote',
  },
  {
    id: 'p2',
    title: 'Second Book',
    price: 5,
    description: 'Second Book i ever Wrote',
  },
]

const Products = (props) => {
  useEffect(() => console.log('i am in product'))
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>

      <ul>
        {DUMMY_PRODUCTS.map((val) => (
          <ProductItem
            key={val.id}
            id={val.id}
            title={val.title}
            price={val.price}
            description={val.description}
          />
        ))}
      </ul>
    </section>
  )
}

export default Products
