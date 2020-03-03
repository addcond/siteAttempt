import {List} from './list';
import {connect} from 'react-redux';
import {FavUsage, addItemInfo} from '../../store/actions';


const mapStateToProps = (state) => {

    return {
        data: state.favorites,
    }
};

const mapDispatchToProps = {

    onFavClick: FavUsage,
    handleItemClick: addItemInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(List);