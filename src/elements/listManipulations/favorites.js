import {List} from './list';
import {connect} from 'react-redux';
import {FavUsage, itemInfo} from '../../store/actions';


const mapStateToProps = ({favorites}) => {

    return {
        data: favorites
    };
};

const mapDispatchToProps = {

    onFavClick: FavUsage,
    handleItemClick: itemInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(List);