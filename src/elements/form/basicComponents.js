import React from 'react';
import './styles.css';


export function FavApp(props) {

    const {favApartment, onFavClick} = props;

    return (
        <div className='clickFav' onClick={onFavClick}>
            <div
                className={favApartment + ' favCl'}>
            </div>
        </div>
    )
}

export function Header(props) {

    const {title, price} = props;

    return (
        <header className="header">
            <div className="title">{title}</div>
            <div className="price">{price}</div>
        </header>
    )
}