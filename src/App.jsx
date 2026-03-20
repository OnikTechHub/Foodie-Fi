
import './App.css'
import Navbar from './component/Navbar/Navbar'
import FoodSection from './component/FoodSection/FoodSection'
import { Suspense } from 'react';

const foodDataRes = fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a").then(res => res.json());

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<h1>Loading Foods...</h1>}>
        <FoodSection foodDataRes={foodDataRes}></FoodSection>
      </Suspense>
    </>
  )
}

export default App
