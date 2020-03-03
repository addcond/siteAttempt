import {List} from './list';
import {connect} from 'react-redux';
import {FavUsage, addItemInfo} from '../../store/actions';
import {ShowMoreButton} from './searching';
import React from 'react';


function SearchResults(props) {

    const {isFetchingData, data} = props;

    return (
        <>
            <List {...props} />
            {!isFetchingData && data[0] && <ShowMoreButton />}
        </>
    )
}

const mapStateToProps = function(state) {

    const {data, error, isFetchingData, isOnLastPage} = state;

    return {
        data,
        isFetchingData,
        error,
        isOnLastPage
    }
};

const mapDispatchToProps = {
    onFavClick: FavUsage,
    handleItemClick: addItemInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);