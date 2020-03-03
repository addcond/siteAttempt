import {List} from './list';
import {connect} from 'react-redux';
import {FavUsage, itemInfo} from '../../store/actions';


const mapStateToProps = (state) => {

    return {
        data: state.favorites,
    }
};

const mapDispatchToProps = {

    onFavClick: FavUsage,
    handleItemClick: itemInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(List);