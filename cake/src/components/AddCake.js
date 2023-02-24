import { useState, useRef } from 'react';
import "../styles/AddCake.css"
import Recipe from './Recipe';

export default function AddCake({addCake, products, recipe, setRecipe}){
    
    const [name, setName] = useState('')
    const [mass, setMass] = useState('')
    const id = useRef(0)
    
    const [selected, setSelected] = useState(0)
    const addRecipe = (p) => {
        setRecipe([...recipe, p])
    }
    const handleAddRecipe = (e) => {
        e.preventDefault()
        let index = -1
        for (var i = 0; i < products.length; i++){
            if (products[i].id ==selected){
                index = i
                break
            }
        }
        if (index == -1) throw new Error('Incorrect id!')
        addRecipe({product: products[index], amount: ''})
    }
    const handleAddCake = (e) => {
        e.preventDefault()
        let totalPrice = 0
        recipe.forEach(item => {
            totalPrice += item.product.price * item.amount / item.product.total
        })
        addCake({id: id.current, name: name, mass: mass, recipe: recipe, price: totalPrice})
        id.current = id.current + 1
        setName('')
        setRecipe([])
        setMass('')
    }
    
    const selectChange = e => setSelected(e.target.value)
    const nameChange = e => setName(e.target.value)
    const massChange = e => setMass(e.target.value)
    return (
        <form className='AddCake' onSubmit={handleAddCake}>
            <div className='font-b font-bold'>New Cake</div>
            <input className='AddProduct__inputName' placeholder='Name' required value={name} onChange = {nameChange}></input>
            <input className='AddProduct__inputName' required placeholder='Mass in gramms' value={mass} onChange = {massChange}></input>
            <Recipe recipe={recipe} setRecipe = {setRecipe}/>
            <div className='Form2'>
                <select className='AddCake__select' onChange={selectChange}>
                    {products.map(item => 
                    <option value = {item.id}>{item.name}</option>
                    )}
                </select>
                <button className='button-1' onClick={handleAddRecipe}>+</button>
            </div>
            <button className='button-1' type='submit'>Add</button>
        </form >
    )
    
}