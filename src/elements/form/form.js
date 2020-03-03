import React from 'react';
import {submitFormAsync, inputValueChange} from '../../store/actions';
import {connect} from 'react-redux';
import './styles.css';


function Form(props) {

    const {isFetchingData, value, onInputValue} = props;
    const onChange = event => {onInputValue(event.target.value)};
    const onSubmit = event => {
        event.preventDefault();
        !isFetchingData && props.onSubmit();
    };

    return (
        <div className="wrapper">
            <form className="form"
                  onSubmit={onSubmit} >
                <input type="text"
                       placeholder="try Nestoria"
                       value={value}
                       onChange={onChange} />
                <input type="submit" value="Find places to stay" />
            </form>
        </div>
    );
}

const mapStateToProps = function(state) {
    const {inputValue, isFetching} = state;

    return {
        inputValue,
        isFetching
    }
};

const mapDispatchToProps = {
    onSubmit: submitFormAsync,
    onInputValue: inputValueChange
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);