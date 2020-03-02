function compareObjects(obj1, obj2) {

    for (let key in obj1) {
        if (!(key in obj2 && obj1 === obj2))
        return false;
    }
    return true;
}

export function dataUsage(url, dispatch) {

    return fetch(url).then(response => {

            return response.json();
           }).then(response => {

                const result = response.response;

                if ((result) === '50') {
                    throw new Error(result);
                }
                return result;
           }).catch(event => {dispatch({
                type: 'RESPONSE_ERROR',
                payload: event.message
           });
           return null;
           });
}

export function checkListings(listings, getState) {

    return listings.map((dataElement, index) => {

        const favIndex = getState().favorites.findIndex((favElement) => {
            return favElement.img_url === dataElement.img_url ? compareObjects(dataElement, favElement) : false;
        });

        const id = favIndex + 1 ? getState().favorites[favIndex].id : `${getState().currentPage + index}`;
            return {...dataElement, id, favIndex};
    });
}