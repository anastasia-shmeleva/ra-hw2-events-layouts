function ShopItem(props) {
    return (
        <div className='card__list' key={Math.random()}>
            <div className='item__list__img'>
                <img className='img' 
                     src={props.product.img}
                     alt=''/>
            </div>
            <div className='item__list'>
                <h1 className='item__name'>{props.product.name}</h1>
                <h4 className='item__color'>{props.product.color}</h4>
                <div className='item__list__price'>{'$' + props.product.price}</div>
                <button className='card__list__btn'>{'ADD TO CART'}</button> 
            </div>   
        </div>     
    );
}

export default ShopItem;