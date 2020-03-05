import React from 'react';
import './styles.css';


export function GetMoreButton({isOnLastPage, onClickGetMore}) {

    const onClick = () => {
            if (!isOnLastPage) {
                 onClickGetMore()
            }
    };

    return (
        <div className="show-click"
             onClick={onClick}
        >
            {isOnLastPage ? 'That is all' : 'Get more'}
        </div>
    )
}
