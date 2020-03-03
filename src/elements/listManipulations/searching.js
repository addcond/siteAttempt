import React from 'react';
import './styles.css';


export function ShowMoreButton(props) {

    const onClick = () => {if(!props.isOnLastPage) props.onClickGetMore()};

    return (
        <div className="show-click"
             onClick={onClick}
        >
            {props.isOnLastPage ? 'That is all' : 'Get more'}
        </div>
    )
}
