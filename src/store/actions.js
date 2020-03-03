import {dataUsage, checkListings} from './features';

const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=uk&listing_type=rent&listing_type=buy&place_name=';

export function inputValueChange(value) {

    return {
        type: 'INPUT_CHANGE',
        payload: value
    }
}

export function FavUsage(id) {

    return function(dispatch, getState) {
        const favIndex = getState().favorites.findIndex(element => element.id === id);
        const indexInData = getState().data.findIndex(element => element.id === id);

        if (favIndex + 1) {dispatch({
                type: 'REMOVE_FROM_FAVORITES',
                payload: {favIndex, indexInData}
            });
            return;
        }

        const itemToAdd = indexInData + 1 ? getState().data[indexInData] : getState().itemInfo;

        dispatch({
            type: 'ADD_TO_FAVORITES',
            payload: {
                item: itemToAdd,
                index: indexInData
            }
        });
    }
}

export function itemInfo(id) {

    return function(dispatch, getState) {
        const itemInfo = getState().data.find(element => element.id === id) ||
            getState().favorites.find(element => element.id === id);
        dispatch({
            type: 'ITEM_INFO',
            payload: itemInfo
        });
    }
}

export function submitFormAsync() {

    return function(dispatch, getState) {
        const placeName = getState().inputValue;
        dispatch({
            type: 'START_REQUEST',
            payload: placeName
        });

        const url = BASE_URL + placeName;

        dataUsage(url, dispatch).then(data => {
            if (data) {
                data.listings = checkListings(data.listings, getState);
                dispatch({
                    type: 'FETCHED_DATA',
                    payload: {
                        data: data.listings,
                        totalPages: data.totalPages
                    }
                })
            }
        })
    }
}

export function nextPage() {

    return function (dispatch, getState) {
        if (getState().currentPage + 1 > getState().totalPages) {
            dispatch({
                type: 'LAST_PAGE_REACHED'
            });
            return;
        }

        dispatch({
            type: 'START_REQUEST_NEXT'
        });

        const url = BASE_URL + getState().lastSearched + '&page=' + getState().currentPage;

        dataUsage(url, dispatch).then((data) => {
            if (data) {
                data.listings = checkListings(data.listings, getState);
                dispatch({
                    type: 'FETCHED_DATA_NEXT',
                    payload: data.listings
                })
            }
        });
    };
}