import React from 'react';
import './styles.css';


export function ShowMoreButton(props) {

    const {isOnLastPage, onShowMoreClick} = props;
    const onClick = () => {if(!isOnLastPage) {onShowMoreClick()}};

    return (
        <div className="show-more"
             onClick={onClick}
        > {isOnLastPage} Get more places
        </div>
    )
}
