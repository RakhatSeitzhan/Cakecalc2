import { useState, useRef } from 'react';
import "../styles/AddCake.css"

export default function AddCake({addCake, products}){
    // cake: recipe: [{product, usedAmount}]

    const [amount, setAmount] = useState()
    const [name, setName] = useState('')
    const id = useRef(0)
    const [recipe, setRecipe] = useState([])
    const [selected, setSelected] = useState(0)
    const addRecipe = (p) => {
        setRecipe([...recipe, p])
    }
    const handleAddRecipe = () => {
        let index = -1
        for (var i = 0; i < products.length; i++){
            if (products[i].id ==selected){
                index = i
                break
            }
        }
        if (index == -1) throw new Error('Incorrect id!')
        addRecipe({product: products[index], amount: Number(amount)})
    }
    const handleAddCake = () => {
        let totalPrice = 0
        recipe.forEach(item => {
            totalPrice += item.product.price * item.amount / item.product.total
        })
        addCake({id: id.current, name: name, recipe: recipe, price: totalPrice})
        id.current = id.current + 1
    }
    const handleRemove = (item) => {
        let temp = [...recipe]
        const index = recipe.indexOf(item)
        if (index != -1) {
            temp.splice(index,1)
            setRecipe(temp)
        }
        else throw Error('something went wrong')
    }
    const selectChange = e => setSelected(e.target.value)
    const amountChange = e => setAmount(e.target.value)
    const nameChange = e => setName(e.target.value)
    // console.log(recipe)
    return (
        <div className='AddCake'>
            <div className='font-b font-bold'>New Cake</div>
            <input className='AddProduct__inputName' placeholder='Name' value={name} onChange = {nameChange}></input>
            {recipe.map(item => 
            <div key = {item.product.id} className = 'flex-row gap-2 a-center'>
                <div>{item.product.name}</div>
                <div>{item.amount}</div>
                <button className='button-2'  onClick={()=>handleRemove(item)}>Remove</button>
            </div>
            )}
            <div className='Form2'>
                <select className='AddCake__select' onChange={selectChange}>
                    {products.map(item => 
                    <option value = {item.id}>{item.name}</option>
                    )}
                </select>
                <input className='AddCake__inputAmount' placeholder='Amount' value={amount} onChange = {amountChange}></input>
                <button className='button-1'  onClick={handleAddRecipe}>Add to list</button>
            </div>
            <button className='button-1' onClick={handleAddCake}>Add</button>
        </div>
    )
    
}