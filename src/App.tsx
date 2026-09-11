

import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import BannerSection from './components/bannerSection'
import Technologies from './components/Technologies'
import type { TechnologiesType } from './components/Technologies/TechnologiesType'
import { ToastContainer } from 'react-toastify'


const TechnologiesPromise=async():Promise<TechnologiesType[]>=>{
const res= await fetch('/data.json')
const data= await res.json()

return data
}



function App() {

  const promiseData=TechnologiesPromise()

  return (
    <>
     <ToastContainer />
       <Navbar/>
      <BannerSection/>
       
      <Suspense fallback="Loading....">

          <Technologies promiseData={promiseData}/>


      </Suspense>



    </>
  )                    
}

export default App
