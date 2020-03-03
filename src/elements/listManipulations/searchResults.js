import {List} from './list';
import {connect} from 'react-redux';
import {FavUsage, itemInfo, nextPage} from '../../store/actions';
import {ShowMoreButton} from './searching';
import React from 'react';


function SearchResults(props) {

    const {isFetchingData, data, onClickGetMore, isOnLastPage} = props;

    return (
        <>
            <List {...props} />
            {!isFetchingData && data[0] &&
            <ShowMoreButton
                onClickGetMore={onClickGetMore}
                isOnLastPage={isOnLastPage}
            />
            }
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
    onClickGetMore: nextPage,
    onFavClick: FavUsage,
    handleItemClick: itemInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);