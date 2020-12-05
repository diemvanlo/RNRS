import {mapStateToProps, mapDisPatchToProps} from './container';
import {connect} from 'react-redux';
import PropertyList from '../components/property-list/PropertyList';

const propertyList = connect(mapStateToProps, mapDisPatchToProps)(PropertyList);
export default propertyList;