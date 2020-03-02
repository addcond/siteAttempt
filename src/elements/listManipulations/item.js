import React from 'react';
import {Link} from 'react-router-dom';
import {FavApp, Header} from '../form/basicComponents';
import './styles.css';


export function Item(props) {

    const favApartment = props.data.favIndex + 1 ? 'remove' : 'add';

    return (
        <div className="item-wrapper">
            <Link to={'/info'} onClick={() => props.handleItemClick(props.data.id)}>
                <Header title={props.data.title} price={props.data.price_formatted} />
                <div className="item-content">{props.data.summary}</div>
            </Link>
            <FavApp favApartment={favApartment} onFavClick={() => props.onFavClick(props.data.id)} />
        </div>
    )
}