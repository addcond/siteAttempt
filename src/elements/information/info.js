import React from 'react';
import {AddFavAp, Header} from '../form/basicComponents';
import {Details} from './details';
import {FavUsage} from '../../store/actions';
import {connect} from 'react-redux';
import './styles.css';


function Info(props) {

    const {itemInfo} = props;
    const {img_url, price_formatted, title, id, favIndex} = itemInfo;
    const favApartment = favIndex + 1 ? 'remove' : 'add';
    const onFavClick = () => {
        const {onFavClick} = props;
        onFavClick(id)
    };

    return (
        <div className='info-window'>
            <Header title={title} price={price_formatted} />
            <img src={img_url} alt={title} />
            <Details item={itemInfo} />
            <div>
                <AddFavAp favApartment={favApartment}
                          onFavClick={onFavClick}
                />
            </div>
        </div>
    )
}

const mapStateToProps = ({itemInfo}) => {

    return {
        itemInfo
    }
};

const  mapDispatchToProps = {
    onFavClick: FavUsage
};

export default connect(mapStateToProps, mapDispatchToProps)(Info);