import React from 'react'
import Navbar2 from '../components/Navbar2'
import Sidebar from '../components/Sidebar'

const Contact = () => {
  return (
    <div className=''>

      <h1 className='text-3xl font-bold font-arimo mb-8'>Get in touch with us</h1>
      <h2 className='text-2xl font-bold font-arimo mb-4'>Send us a message</h2>
      <div class="flex flex-row gap-12 font-arimo">
        <p>jumuad.precious@gmail.com</p>
        <p>+63 960 480 6765</p>
      </div>
      <h2 className='text-2xl font-bold font-arimo mt-8 mb-4'>Find Us</h2>
      <div class="flex flex-row gap-12 font-arimo">
        <p>C.M. Recto Avenue Lapasan 9000 Cagayan de Oro, Philippines</p>
      </div>
    </div>

  )
}

export default Contact