
import './App.css'
import Navbar from './component/Navbar/Navbar'
import FoodSection from './component/FoodSection/FoodSection'
import { Suspense } from 'react';
import Home from './component/Home/Home'
import Footer from './component/Footer/Footer'

const foodDataRes = fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a").then(res => res.json());

function App() {

  return (
    <>
      <Navbar></Navbar>

      <Home></Home>
      <Suspense fallback={<h1>Loading Foods...</h1>}>
        <FoodSection foodDataRes={foodDataRes}></FoodSection>
      </Suspense>

      
      <Footer></Footer>
    </>
  )
}

export default App
