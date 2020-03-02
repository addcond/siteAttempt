import React from 'react';
import {ListItems} from './listItems';
import './styles.css';


export function List(props) {
    return (
        <div className="list-wrapper">
            {props.error && !props.isFetchingData}
            {!props.data[0] && !props.isFetchingData &&
            <header>Try again</header>
            }
            {props.data[0] &&
            <ListItems data={props.data}
                       pathname={props.pathname}
                       onFavClick={props.onFavClick}
                       handleItemClick={props.handleItemClick}
            />
            }
            {props.isFetchingData}
        </div>
    )
}