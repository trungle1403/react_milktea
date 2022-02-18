import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import Header from './components/Header/Header'
// import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Product from './pages/Product/Product'

const App = () => {
    return (
        <Router>
            {/* <Header /> */}
            <Routes>
                <Route path='/' exact element={<Home/>}></Route>
                <Route path='/product' element={<Product/>}></Route>
            </Routes>
            {/* <Footer/> */}
        </Router>
    )
}

export default App