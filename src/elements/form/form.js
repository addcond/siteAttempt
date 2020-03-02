import React from 'react';
import {submitFormAsync, inputValueChange} from '../../store/actions';
import {connect} from 'react-redux';
import './styles.css';


function Form(props) {
    return (
        <div className="wrapper">
            <form className="form"
                  onSubmit={(event) => {
                      !props.isFetchingData && props.onSubmit();
                      event.preventDefault();
                  }}
            >
                <input type="text"
                       placeholder="search"
                       value={props.value}
                       onChange={(event) => {props.onInputValueChange(event.target.value)}}/>
                <input type="submit" value="Find places to stay" />
            </form>
        </div>
    )
}

const mapStateToProps = function(state) {
    return {
        value: state.inputValue,
        isFetchingData: state.isFetching
    }
};

const mapDispatchToProps = {
    onSubmit: submitFormAsync,
    onInputValueChange: inputValueChange
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);