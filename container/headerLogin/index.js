import {connect} from 'react-redux';
import {mapDisPatchToProps, mapStateToProps} from '../container';
import HeaderLogin from '../../components/headerLogin';

const login = connect(mapStateToProps, mapDisPatchToProps)(HeaderLogin);
export default login;