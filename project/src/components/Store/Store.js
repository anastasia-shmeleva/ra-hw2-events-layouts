import {useState} from 'react';
import products from '../../products';
import IconSwitch from '../IconSwitch/IconSwitch';
import ListView from '../ListView/ListView';
import CardsView from '../CardsView/CardsView';

export default function Store() {
    const [view, setView] = useState('view_list');

    const onSwitch = () => {
        return view === 'view_list' ? setView('view_module') : setView('view_list');
    }

    return (
        <div className='store__container'>
            <IconSwitch icon={view} onSwitch={onSwitch}/>
            {view === 'view_module' ? <ListView items={products}/> : <CardsView cards={products}/>}
        </div>
    )
}