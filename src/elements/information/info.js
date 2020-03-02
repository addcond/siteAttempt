import React from 'react';
import {FavApp, Header} from '../form/basicComponents';
import {Details} from './details';
import {FavUsage} from '../../store/actions';
import {connect} from 'react-redux';
import './styles.css';


function Info(props) {

    const item = props.data;
    const favApartment = item.favIndex + 1 ? 'remove' : 'add';

    return (
        <div className='info-window'>
            <Header title={item.title} price={item.price_formatted} />
            <img src={item.img_url} alt={item.title} />
            <Details item={item} />
            <div>
                <FavApp favApartment={favApartment}
                        onFavClick={() => {
                            props.onFavClick(item.id);
                            console.log(item.favIndex);
                        }}
                />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.infoItem
    }
};

const  mapDispatchToProps = {
    onFavClick: FavUsage
};

export default connect(mapStateToProps, mapDispatchToProps)(Info);