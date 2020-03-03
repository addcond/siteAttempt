const initialState = {
    inputValue: '',
    data: [],
    favorites: [],
    itemInfo: {},
    isFetching: false,
    currentPage: 0,
    lastSearched: '',
    totalPages: 50,
    error: null
};

export default function Reducer(state = initialState, action) {

    const {type, payload} = action;
    const {itemInfo, favorites, data, currentPage} = state;

    switch (type) {
        case 'INPUT_CHANGE': return {
            ...state,
            inputValue: payload
        };
        case 'ITEM_INFO': return {
            ...state,
            itemInfo: payload
        };
        case 'ADD_TO_FAVORITES': return {
            ...state,
            itemInfo: {...itemInfo, favIndex: favorites.length},
            data: data.map((element,index) => {
                return index === payload.index ?
                    {...element, favIndex: favorites.length} : element;
            }),
            favorites: favorites.concat({
                ...payload.item,
                favIndex: favorites.length
            })
        };
        case 'REMOVE_FROM_FAVORITES': return {
            ...state,
            itemInfo: {...itemInfo, favIndex: -1},
            data: data.map((element, index) => {
                return payload.indexInData === index ?
                    {...element, favIndex: -1} : element
            }),
            favorites: favorites.filter((element, index) => index !== payload.favIndex)
        };
        case 'START_REQUEST': return {
            ...state,
            isFetching: true,
            lastSearched: payload,
            currentPage: 1,
            data: []
        };
        case 'FETCHED_DATA': return {
            ...state,
            data: data.concat(payload.data),
            totalPages: payload.totalPages,
            isFetching: false,
            error: null
        };
        case 'START_REQUEST_NEXT': return {
            ...state,
            currentPage: currentPage + 1,
            isFetching: true
        };
        case 'FETCHED_DATA_NEXT': return {
            ...state,
            data: data.concat(payload),
            isFetching: false
        };
        case 'RESPONSE_ERROR': return {
            ...state,
            error: payload,
            isFetching: false
        };
        case 'LAST_PAGE_REACHED': return {
            ...state,
            isOnLastPage: true
        };
        default: return state;
    }
}