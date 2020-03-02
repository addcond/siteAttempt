import {List} from './list';
import {connect} from 'react-redux';
import {FavUsage, addItemInfo} from '../../store/actions';
import {ShowMoreButton} from './searching';
import React from 'react';


function SearchResults(props) {
    return (
        <>
            <List {...props} />
            {!props.isFetchingData && props.data[0] && <ShowMoreButton />}
        </>
    )
}

const mapStateToProps = function(state) {
    return {
        data: state.data,
        isFetchingData: state.isFetching,
        error: state.error,
        isOnLastPage: state.isOnLastPage
    }
};

const mapDispatchToProps = {
    onFavClick: FavUsage,
    handleItemClick: addItemInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);