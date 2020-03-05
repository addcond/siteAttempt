import {List} from './list';
import {connect} from 'react-redux';
import {FavUsage, itemInfo, nextPage} from '../../store/actions';
import {GetMoreButton} from './searching';
import React from 'react';


function SearchResults(props) {

    const {isFetchingData, data, onClickGetMore, isOnLastPage} = props;

    return (
        <>
            <List {...props} />
            {!isFetchingData && data[0] &&
            <GetMoreButton
                onClickGetMore={onClickGetMore}
                isOnLastPage={isOnLastPage}
            />
            }
        </>
    )
}

const mapStateToProps = ({data, error, isFetchingData, isOnLastPage}) => {

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