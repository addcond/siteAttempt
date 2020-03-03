import React from 'react';
import {AddFavAp, Header} from '../form/basicComponents';
import {Details} from './details';
import {FavUsage} from '../../store/actions';
import {connect} from 'react-redux';
import './styles.css';


function Info(props) {

    const item = props.data;
    const favApartment = item.favIndex + 1 ? 'remove' : 'add';
    const {title, price_formatted, img_url, id} = item;
    const onFavClick = () => {props.onFavClick(id)};

    return (
        <div className='info-window'>
            <Header title={title} price={price_formatted} />
            <img src={img_url} alt={title} />
            <Details item={item} />
            <div>
                <AddFavAp favApartment={favApartment}
                        onFavClick={onFavClick}
                />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        data: state.itemInfo
    }
};

const  mapDispatchToProps = {
    onFavClick: FavUsage
};

export default connect(mapStateToProps, mapDispatchToProps)(Info);