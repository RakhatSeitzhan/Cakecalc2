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
    const handleAdd = (e) => {
        e.preventDefault()
        const newProduct = {id: id.current, name: name, price: Number(price), total: Number(total)}
        addProduct(newProduct)
        id.current = id.current + 1
        setName('')
        setPrice('')
        setTotal('')
    }
    return (
        <form className='AddProduct' onSubmit={handleAdd}>
            <div className='font-b font-bold'>New Product</div>
            <input className='AddProduct__inputName' required placeholder='Name' value={name} onChange = {nameChange}></input>
            <input className='AddProduct__inputPrice' required type="number" placeholder='Price'   value={price} onChange = {namePrice}></input>
            <input className='AddProduct__inputTotal' required type="number" placeholder='Total'  value={total} onChange = {nameTotal}></input>
            <button className='button-1' type = "submit">Add</button>
        </form>
    )
    
}