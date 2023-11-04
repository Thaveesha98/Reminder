import React from 'react'
import Header from '../Components/Header'
// import DropDown from '../AdminPage/Components/DropDown'
import Footer from '../Components/Footer'
// import Table from './Components/Table'
import Crud from './Components/Crud'
import CRUD from './Components/Crud'



const Page = () => {
    
  return (<div className='bg-yellow-400'>
    <Header />
    {/* <DropDown /> */}
    <CRUD />
    {/* <Table /> */}
    <Footer />
  </div>
    
  )
}

export default Page
