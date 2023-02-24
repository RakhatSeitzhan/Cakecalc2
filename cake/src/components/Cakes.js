export default function Cakes({ cakes }){
    
    return (
    <div className='Cakes'>
        <div className="Cakes__table">
            <div className='Cakes__label'>Name</div>
            <div className='Cakes__label'>Recipe</div>
            <div className='Cakes__label'>Amount</div>
            <div className='Cakes__label'>Total price</div>
            {cakes.map((cake, index) => {
                const grayClass = index % 2 == 0 ? 'Cakes__gray' : ''
                return (<>
                <div className={`Cakes__item ${grayClass}`}>{cake.name}</div>
                <div className={`Cakes__item ${grayClass}`}>
                    {cake.recipe.map(item => 
                    <div>{item.product.name}</div>
                    )}
                </div>
                <div className={`Cakes__item ${grayClass}`}>
                    {cake.recipe.map(item => 
                    <div>{item.amount}</div>
                    )}
                </div>
                <div className={`Cakes__item ${grayClass}`}>{cake.price}</div>
                </>)
            })}
        </div>
        
    </div>)
}
