import "../styles/CalculatedList.css"

export default function CalculatedList({ calculatedList}){
    const totalCakePrice = calculatedList.reduce((counter, item) => counter+item.totalPrice , 0)
    return (
        <div className="CalculatedList p-40">
            <div className="font-b font-bold">To buy</div>
            <br/>
            <div className="CalculatedList__grid">
                <div className="CalculatedList__label">Name</div>
                <div className="CalculatedList__label">Needed Amount</div>
                <div className="CalculatedList__label">Number of products needed</div>
                <div className="CalculatedList__label">Total price</div>
                {calculatedList.map(item => 
                <div className="CalculatedList__row">
                    <div className="CalculatedList__item">{item.productObj.name}</div>
                    <div className="CalculatedList__item">{item.totalAmount}</div>
                    <div className="CalculatedList__item">{item.numberOfProducts}</div>
                    <div className="CalculatedList__item">{item.totalPrice}</div>
                </div>
                )}
            </div>
            {/* <button>Copy</button> */}
            <br/><br/>
            <span className="font-m font-bolder">Total request price: </span>
            <span>{totalCakePrice}</span>
        </div>
    )
}