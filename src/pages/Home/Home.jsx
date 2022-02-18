import React from 'react'
import './Home.scss'
import Filter from '../../components/Filter/Filter'
import Cart from '../../components/Cart/Cart'
import ProductList from '../../components/ProductList/ProductList'
const Home = () => {
  return (
    <>
      <main className="main">
        <div className="container">
          <section className="section-product grid">
              <Filter />
              <ProductList />
              <Cart />
          </section>
        </div>
      </main>
    </>
  )
}

export default Home