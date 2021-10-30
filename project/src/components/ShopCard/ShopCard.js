function ShopCard(props) {
    return (
        <div className='item'>
            <h1 className='item__name'>{props.product.name}</h1>
            <h4 className='item__color'>{props.product.color}</h4>
            <div className='item__img'>
                <img className='img' 
                     src={props.product.img}
                     alt=''/>
            </div>
            <div className='card__footer'>
                <div className='item__price'>{'$' + props.product.price}</div>
                <button className='card__btn'>{'ADD TO CART'}</button>
            </div>
        </div>
    );
}

export default ShopCard;