import { useState, useRef } from 'react';
import "../styles/AddProduct.css"

export default function AddProduct({addProduct}){
    const [name, setName] = useState('')
    const [price, setPrice] = useState()
    const [total, setTotal] = useState()
    const id = useRef(0)
    const nameChange = e => setName(e.target.value)
    const namePrice = e => setPrice(e.target.value)
    const nameTotal = e => setTotal(e.target.value)
    const handleAdd = () => {
        const newProduct = {id: id.current, name: name, price: Number(price), total: Number(total)}
        addProduct(newProduct)
        id.current = id.current + 1
    }
    return (
        <div className='AddProduct'>
            <div className='font-b font-bold'>New Product</div>
         
            <input className='AddProduct__inputName' placeholder='Name' value={name} onChange = {nameChange}></input>
            
            <input className='AddProduct__inputPrice' placeholder='Price'   value={price} onChange = {namePrice}></input>
           
            <input className='AddProduct__inputTotal' placeholder='Total'  value={total} onChange = {nameTotal}></input>
            <button className='button-1' onClick={handleAdd} >Add</button>
        </div>
    )
    
}