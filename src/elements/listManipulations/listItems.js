import React from 'react';
import {Item} from './item';


export function ListItems(props) {

    function getItems() {
        return props.data.map((item, index) => {
            return (
                <Item key={index}
                      data={item}
                      pathname={props.pathname}
                      onFavClick={props.onFavClick}
                      handleItemClick={props.handleItemClick}/>
            )
        })
    }

    return (
        <div className="list-items-wrapper">
            {getItems()}
        </div>
    )
}