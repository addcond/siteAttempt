import React from 'react';
import {Link} from 'react-router-dom';
import {AddFavAp, Header} from '../form/basicComponents';
import './styles.css';


export function Item(props) {

    const {handleItemClick, data} = props;
    const {title, price_formatted, summary, img_url, favIndex, id} = data;
    const favApartment = favIndex + 1 ? 'remove' : 'add';
    const onClick = () => {
        handleItemClick(id)
    };
    const onFavClick = () => {
        const {onFavClick} = props;
            onFavClick(id)
    };

    return (
        <div className='item-wrapper'>
            <Link to={'/info'} onClick={onClick}>
                <Header title={title} price={price_formatted} />
                <img src={img_url} alt={title} /> <img src={img_url} alt={title}/>
                <div className='item-content'>{summary}</div>
            </Link>
            <AddFavAp favApartment={favApartment} onFavClick={onFavClick} />
        </div>
    )
}