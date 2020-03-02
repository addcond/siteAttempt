import React from 'react';
import './styles.css';


export function FavApp(props) {
    return (
        <div className='clickFav' onClick={props.onFavClick}>
            <div className={props.favApartment + ' fav-ctrl'}>
            </div>
        </div>
    )
}

export function Header(props) {
    return (
        <header className="header">
            <div className="title">{props.title}</div>
            <div className="price">{props.price}</div>
        </header>
    )
}