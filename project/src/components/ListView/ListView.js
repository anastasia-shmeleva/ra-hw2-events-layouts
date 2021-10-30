import ShopItem from "../ShopItem/ShopItem";

function ListView(props) {
    return (
        <div className='cards__list' >
            {props.items.map(item => {
                return <ShopItem product={item} key={Math.random()}/>
            })}
        </div>
    );
}

export default ListView;