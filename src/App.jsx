
import { act, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import Models from './components/Models/Models'
import NavBar from './components/Navbar/Navbar'

const getModels = async () => {
  const res = await fetch('/models.json')
  return res.json()
}

const modelPromise = getModels()

function App() {
  const [activeTab, SetActiveTab] = useState('model')
  // console.log(activeTab);
  const[carts, setCarts] = useState([])
  // console.log(carts);


  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center bg-transparent">
        <input type="radio" 
        name="my_tabs_1" 
        className="tab rounded-full w-40" 
        aria-label="Models" 
        checked={activeTab === 'model'}
        onClick={() => SetActiveTab('model')} />

        <input type="radio" 
        name="my_tabs_1" 
        className="tab rounded-full w-40" 
        aria-label="Cart"
        onClick={() => SetActiveTab('cart')}
        checked={activeTab === 'cart'}  />
        
      </div>
      {/* {activeTab==='model'? <Models modelPromise={modelPromise} ></Models> : null}
      {activeTab==='cart'? <Cart></Cart> : null} */}
      {activeTab==='model' && <Models modelPromise={modelPromise} carts= {carts} setCarts={setCarts} ></Models>}
      {activeTab ==='cart' && <Cart carts={carts} setCarts= {setCarts} ></Cart> }



      <Footer></Footer>

    </>
  )
}

export default App
