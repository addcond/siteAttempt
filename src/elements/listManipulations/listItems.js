import React from 'react';
import {Item} from './item';


export function ListItems(props) {

    function getItems() {

        const {data, pathname, onFavClick, handleItemClick} = props;

        return data.map((item, index) => {
            return (
                <Item key={index}
                      data={item}
                      pathname={pathname}
                      onFavClick={onFavClick}
                      handleItemClick={handleItemClick}/>
            )
        })
    }

    return (
        <div className='list-items-wrapper'>
            {getItems()}
        </div>
    )
}