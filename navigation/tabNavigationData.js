import login from '../container/headerLogin';
import PropertyList from '../components/property-list/PropertyList';
import {
    StyleSheet,
    View,
    Dimensions,
    Image,
    Alert, Text,
} from 'react-native';
import propertyList from '../container/propertyListContainer';
import newsList from '../components/news-list/NewsList';
import CustomMarkers from '../components/MapView/MapView';
import newsDetail from '../components/newsDetail/NewsDetail';
import vrImage from '../components/vrImage/VrImage';
const iconHome = require('../assets/images/tabbar/home.png');
const iconCalendar = require('../assets/images/tabbar/calendar.png');
const iconGrids = require('../assets/images/tabbar/grids.png');
const iconPages = require('../assets/images/tabbar/pages.png');
const iconComponents = require('../assets/images/tabbar/components.png');

const tabNavigationData = [
    {
        name: 'Login',
        component: login,
        icon: 'lock-closed-outline',
    },
    {
        name: 'Dự án',
        component: propertyList,
        icon: "home-outline",
    },
    {
        name: 'Tin tức',
        component: newsList,
        icon: "newspaper-outline",
    },
    {
        name: 'map',
        component: CustomMarkers,
        icon: "map-outline",
    },
    {
        name: 'vrImage',
        component: vrImage,
        icon: "map-outline",
    },
];
export default tabNavigationData;