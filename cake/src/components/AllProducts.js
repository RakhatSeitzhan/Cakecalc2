import '../styles/AllProducts.css'


export function AllProducts({ products, setProducts, recipe,  setRecipe }){
    const handleAddRecipe = (product) => {
        setRecipe([...recipe, {product: product, amount: ''}])
        console.log('added')
    }
    return (
        <div className="AllProducts">
            <div className='AllProducts__label '>Name</div>
            <div className='AllProducts__label'>Price</div>
            <div className='AllProducts__label'>Total amount</div>
            {products.map((product, index) => {
                const grayClass = index % 2 == 0 ? 'AllProducts__gray' : ''
                return (
                <div className='AllProducts__row' onClick={() => handleAddRecipe(product)}>
                    <div className={`AllProducts__item ${grayClass}`}>{product.name}</div>
                    <div className={`AllProducts__item ${grayClass}`}>{product.price}</div>
                    <div className={`AllProducts__item ${grayClass}`}>{product.total}</div>
                </div>
                )
            }
            
            )}
        </div>
    )
}