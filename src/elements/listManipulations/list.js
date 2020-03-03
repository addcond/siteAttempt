import React from 'react';
import {ListItems} from './listItems';
import './styles.css';


export function List(props) {

    const {error, isFetchingData, data, pathname, onFavClick, handleItemClick} = props;

    return (
        <div className="list-wrapper">
            {error && !isFetchingData}
            {!data[1] && !isFetchingData &&
            <header>Try again</header>
            }
            {data[1] &&
            <ListItems data={data}
                       pathname={pathname}
                       onFavClick={onFavClick}
                       handleItemClick={handleItemClick}
            />
            }
        </div>
    )
}