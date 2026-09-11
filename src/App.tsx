

import { Suspense} from 'react'
import './App.css'
import Navbar from './components/Navbar'
import BannerSection from './components/bannerSection'
import Technologies from './components/Technologies'
import type { TechnologiesType } from './components/Technologies/TechnologiesType'

import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'


const TechnologiesPromise=async():Promise<TechnologiesType[]>=>{
const res= await fetch('/data.json')
const data= await res.json()
console.log(data);
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

<Footer/>

    </>
  )                    
}

export default App
