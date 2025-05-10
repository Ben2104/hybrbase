import React from 'react'
import Navbar from '../ components/Navbar'
import Hero1 from '../ components/Hero1'
import Hero2 from '../ components/Hero2'
import Header from '../ components/Header'
import Footer from '../ components/Footer'
const Homepage = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <Hero1 />
            <Hero2 />
            <Footer />
        </div>
    )
}

export default Homepage