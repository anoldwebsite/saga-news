import React from 'react';
import {connect} from 'react-redux';
import img from '../../resources/loading_spinner.gif';

const Loading = ({loading}) => (
    loading
    ?
    <div>
        <img src={img} alt='loading' />
        <h1>LOADING ....</h1>
    </div>
    : null
);

const mapStateToProps = state => (
    {loading: state.loading}
);

export default connect(mapStateToProps)(Loading);