import ShopCard from "../ShopCard/ShopCard";

function CardsView(props) {
    return (
        <div className='cards'>
            {props.cards.map(card => {
                return <div className='card' key={Math.random()}>
                    <ShopCard product={card}/>
                </div>
            })}
        </div>
    );
}

export default CardsView;