import { useState, useRef } from 'react';
import './App.css';
import AddCake from './components/AddCake';
import AddProduct from './components/AddProduct';
import './styles/Products.css'
import './styles/Cakes.css'
import { AllProducts } from './components/AllProducts';
function App() {
  const [products, setProducts] = useState([])
  const [cakes, setCakes] = useState([])

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
  console.log(cakes)
  return (
    <div className="App font-m p-80">
      <div className='flex-row w-75 gap-2'>
        <AddProduct addProduct={addProduct}/>
        <div className='flex-2 p-40'>
          <div className='font-b font-bold'>All Products</div>
          <br/>
          <AllProducts products={products} setProducts = {setProducts}/>
        </div>
      </div>
      <br/><br/>
      <div className='flex-row gap-2'>
        <AddCake addCake={addCake} products = {products}/>
        <div className='p-40 flex-1'>
          <div className='font-b font-bold'>All Cakes</div>
          <br/>
          <div className='Cakes'>
            <div className='Cakes__label'>Name</div>
            <div className='Cakes__label'>Total price</div>
            {cakes.map(cake => {
              return <Cake cake = {cake} key = {cake.id}/>
            })}
          </div>
        </div>
      </div>
      
      
    </div>
  );
}

function Cake({cake}){
  const { name, price } = cake
  return(
    <div className="Cake">
      <div className="Cake__name">{name}</div>
      <div className="Cake__price">{price}</div>
    </div>
  ); 
}

export default App;
