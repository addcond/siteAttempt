import React from 'react';
import './styles.css';


export function ShowMoreButton(props) {
    return (
        <div className="show-more"
             onClick={() => {
                 if (!props.isOnLastPage) {
                     props.onShowMoreClick()
                 }
             }}
        > {props.isOnLastPage} Get more places
        </div>
    )
}
