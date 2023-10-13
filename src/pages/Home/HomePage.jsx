import React from 'react'
import Navbar from '../../components/common/Navbar/Navbar'
import ProductsPage from '../Products/ProductsPage'
import Footer from '../../components/common/Footer/Footer'

const HomePage = () => {
  return (
    <div>
        <Navbar />
        <ProductsPage />
        <Footer />
    </div>
  )
}

export default HomePage