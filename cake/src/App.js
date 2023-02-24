import { useState, useRef, useEffect } from 'react';
import './App.css';
import AddCake from './components/AddCake';
import AddProduct from './components/AddProduct';
import './styles/Products.css'
import './styles/Cakes.css'
import { AllProducts } from './components/AllProducts';
import Cakes from './components/Cakes';
import Calculator from './components/Calculator';
import CalculatedList from './components/CalculatedList';
import { AiFillDelete } from 'react-icons/ai' 
function App() {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products')) || [])
  const [cakes, setCakes] = useState(JSON.parse(localStorage.getItem('cakes')) || [])
  const [recipe, setRecipe] = useState([])
  const [calculatedList, setCalculatedList] = useState(null)
  const addProduct = (p) => {
    setProducts([...products, p])
  }
  const addCake = c => {
    setCakes([...cakes, c])
  }
  
  const removeProductByName = (name) => {
    let temp = [...products]
    let index = -1
    for (var i = 0; i < products.length; i++){
      if (products[i].name == name){
        index = i
        break
      }
    }
    if (index != -1){
      temp.splice(index, 1)
      setProducts(temp)
    } else throw new Error('There is no product with such name in the products list!')
  }
  useEffect(()=>{
    localStorage.setItem('products', JSON.stringify(products))
    localStorage.setItem('cakes', JSON.stringify(cakes))
  },[products, cakes])
  
  return (
    <div className="App font-m">
      <div className='App__container'>
          <AddProduct addProduct={addProduct}/>
          <div className='flex-2 p-40'>
            <div className='font-b font-bold'>All Products</div>
            <AiFillDelete onClick={() => {
              setProducts([])
              setCakes([])
            }}/>
            <br/>
            <AllProducts products={products} setProducts = {setProducts} recipe = {recipe} setRecipe = {setRecipe}/>
          </div>
       
        
          <AddCake addCake={addCake} products = {products} recipe = {recipe} setRecipe = {setRecipe}/>
          <div className='p-40 flex-1'>
            <div className='font-b font-bold'>All Cakes</div>
            <br/>
            <Cakes cakes = {cakes}/>
          </div>
          <Calculator cakes = {cakes} setCalculatedList = {setCalculatedList}/>
          {calculatedList && <CalculatedList calculatedList={calculatedList}/>}
      </div>
    </div>
  );
}



export default App;
