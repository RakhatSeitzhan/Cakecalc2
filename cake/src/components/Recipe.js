import "../styles/Recipe.css"
import {FaMinus } from 'react-icons/fa';

export default function Recipe({ recipe, setRecipe }){
    const handleRemove = (item) => {
        let temp = [...recipe]
        const index = recipe.indexOf(item)
        if (index != -1) {
            temp.splice(index,1)
            setRecipe(temp)
        }
        else throw Error('something went wrong')
    }
    const handleAmountChange = (e,item) => {
        let temp = [...recipe]
        const index = temp.indexOf(item)
        if (index != -1){
            temp[index].amount = Number(e.target.value)
            setRecipe(temp)
        } else throw Error('Something went wrong!')
    }
    return (
        <div className="Recipe">
            {recipe.map(item => 
            <div key = {item.product.id} className = 'Recipe__container'>
                <div>{item.product.name}</div>
                <input required className="Recipe__input" placeholder="Amount" value = {item.amount} onChange = {e => handleAmountChange(e,item)}></input>
                <button className='button-remove'  onClick={()=>handleRemove(item)}> <FaMinus/></button>
            </div>
            )}
        </div>
    )
}   