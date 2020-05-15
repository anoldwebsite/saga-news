import React from 'react';
import CustomButton from './utilities/custom-button/custom-button.component';
import {getNews as unboundImportedGetNews} from '../redux/actions/action.component';
import {connect} from 'react-redux';

const Button = ({getNews}) => (
    <CustomButton onClick={getNews}>See News</CustomButton>
);

const mapDispatchToProps = {
    getNews: unboundImportedGetNews
};

export default connect(null, mapDispatchToProps)(Button);