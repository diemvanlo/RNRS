import MainTabNavigator from './MainTabNavigator';
import propertyDetail from '../components/propertyDetail/PropertyDetail';
import {headerLeftPropertyDetail} from '../components/propertyDetail/PropertyDetail';
import CustomMarkers from '../components/MapView/MapView';
import newsDetail from '../components/newsDetail/NewsDetail';

const headerBackground = require('../assets/images/topBarBg.png');
const StackNavigationData = [
    {
        name: 'BDS group',
        component: MainTabNavigator,
        headLeft: null,
        headerBackground: {source: headerBackground},
        headerTitleStyle: {
            color: 'white',
            fontSize: 18,
        },
    },
    {
        name: 'News detail',
        component: newsDetail,
        headerLeft: headerLeftPropertyDetail,
        headerBackground: {source: headerBackground},
        headerTitleStyle: {
            color: 'white',
            fontSize: 18,
        },
    },
    {
        name: 'Property detail',
        component: propertyDetail,
        headerLeft: headerLeftPropertyDetail,
        headerBackground: {source: headerBackground},
        headerTitleStyle: {
            color: 'white',
            fontSize: 18,
        },
    },
    {
        name: 'Map',
        component: CustomMarkers,
        headerLeft: headerLeftPropertyDetail,
        headerBackground: {source: headerBackground},
        headerTitleStyle: {
            color: 'white',
            fontSize: 18,
        },
    },
];
export default StackNavigationData;