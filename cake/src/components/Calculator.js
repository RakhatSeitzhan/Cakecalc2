import "../styles/Calculator.css"
import { useState } from 'react'
export default function Calculator({ cakes, setCalculatedList }){
    // items: [{cake: cake obj, amount: number}]
    const [ items, setItems ] = useState([])
    const [ mode, setMode ] = useState('numerical')
    const [ selected, setSelected ] = useState('default')
    const inputChange = (e, index) => {
        let temp = [...items]
        temp[index].amount = Number(e.target.value)
        setItems(temp)
    }
    const selectChange = (e) => {
        setSelected(e.target.value)
    }
    const addItem = (e) => {
        e.preventDefault()
        setItems([...items, {cake: cakes[selected], amount: ''}])
    }
    const handleCalc = (e) => {
        e.preventDefault()
        if (mode == 'gramm') {
            const reducedItems = items.map( item => ({...item, amount: item.amount / item.cake.mass}))
            calculate(reducedItems)
        } else if (mode == 'numerical'){
            calculate(items)
        }
        
    }
    const calculate = (list) => {
        let res = [] // contains objects {productObj, numberOfProducts, totalAmount, totalPrice}
        for (var i = 0; i < list.length; i++){
            for (var j = 0; j < list[i].cake.recipe.length; j++){
                const productItem = list[i].cake.recipe[j]
                const index = res.findIndex(a => a.productObj == productItem.product)
                if (index != -1) {
                    res[index].totalAmount += productItem.amount * list[i].amount
                } else {
                    res.push({productObj: productItem.product, totalAmount: productItem.amount * list[i].amount})
                }
            }
        }
        res = res.map(item => {
            const numberOfProducts = Math.ceil(item.totalAmount / item.productObj.total)
            return {...item, numberOfProducts: numberOfProducts, totalPrice:  numberOfProducts* item.productObj.price}
        })
        setCalculatedList(res)
    }
    return (
        <form className="Calculator" onSubmit={handleCalc}>
            <div className = "font-b font-bold">Calculator</div>
            <div className="flex-row gap-1">
                <div onClick={() => setMode('numerical')} className={mode == 'numerical' ? "Calculator__modeSelected" : 'Calculator__mode'}>Numercial</div>
                <div onClick={() => setMode('gramm')} className={mode == 'gramm' ? "Calculator__modeSelected" : 'Calculator__mode'}>In gramms</div>
            </div>
            
            <div className="Calculator__container">
                {items.map((item, index) => 
                <div className="display-contents">
                    <div>{item.cake.name}</div>
                    <input required className="Calculator__input" type="number" placeholder="Number of cakes" value = {item.amount} onChange = {e => inputChange(e,index)}></input>
                </div>
                )}
            </div>
            
            <div className="flex-row">
                <select className='Calculator__select' value = {selected} onChange={selectChange}>
                    <option value = "default">Select a cake</option>
                    {cakes.map((cake, index) => 
                    <option value = {index}>{cake.name}</option>
                    )}
                </select>
                <button className='button-1' onClick={addItem}>+</button>
            </div>
            <button className='button-1' type="submit">Calculate</button>
        </form>
    )
}