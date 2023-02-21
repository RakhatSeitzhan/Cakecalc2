import '../styles/AllProducts.css'

export function AllProducts({ products, setProducts }){
    return (
        <div className="AllProducts">
            <div className='AllProducts__label '>Name</div>
            <div className='AllProducts__label'>Price</div>
            <div className='AllProducts__label'>Total amount</div>
            {products.map(product => 
            <>
                <div className='AllProducts__item'>{product.name}</div>
                <div className='AllProducts__item'>{product.price}</div>
                <div className='AllProducts__item'>{product.total}</div>
            </>
            
            )}
        </div>
    )
}