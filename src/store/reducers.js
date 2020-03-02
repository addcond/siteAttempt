const initialState = {
    inputValue: 'nestoria',
    data: [],
    favorites: [],
    infoItem: {},
    isFetching: false,
    currentPage: 0,
    lastSearched: '',
    totalPages: 50,
    error: null
};

export default function Reducer(state = initialState, action) {

    switch (action.type) {
        case 'INPUT_CHANGE': return {
            ...state,
            inputValue: action.payload
        };
        case 'ADD_ITEM_INFO': return {
            ...state,
            infoItem: action.payload
        };
        case 'ADD_TO_FAVORITES': return {
            ...state,
            infoItem: {...state.infoItem, favIndex: state.favorites.length},
            data: state.data.map((element,index) => {
                return index === action.payload.index ?
                    {...element, favIndex: state.favorites.length} : element;
            }),
            favorites: state.favorites.concat({
                ...action.payload.item,
                favIndex: state.favorites.length
            })
        };
        case 'REMOVE_FROM_FAVORITES': return {
            ...state,
            infoItem: {...state.infoItem, favIndex: -1},
            data: state.data.map((element, index) => {
                return action.payload.indexInData === index ?
                    {...element, favIndex: -1} : element
            }),
            favorites: state.favorites.filter((element, index) => index !== action.payload.favIndex)
        };
        case 'START_REQUEST': return {
            ...state,
            isFetching: true,
            lastSearched: action.payload,
            currentPage: 1,
            data: []
        };
        case 'FETCHED_DATA': return {
            ...state,
            data: state.data.concat(action.payload.data),
            totalPages: action.payload.totalPages,
            isFetching: false,
            error: null
        };
        case 'START_REQUEST_NEXT': return {
            ...state,
            currentPage: state.currentPage + 1,
            isFetching: true
        };
        case 'FETCHED_DATA_NEXT': return {
            ...state,
            data: state.data.concat(action.payload),
            isFetching: false
        };
        case 'RESPONSE_ERROR': return {
            ...state,
            error: action.payload,
            isFetching: false
        };
        default: return state;
    }
}