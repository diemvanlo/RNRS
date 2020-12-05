import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableOpacity, default as e,
} from 'react-native';

import MapView, {Marker, ProviderPropType} from 'react-native-maps';
import flagPinkImg from './../../assets/images/Home-icon.png';
import {connect} from 'react-redux';
import {mapDisPatchToProps, mapStateToProps} from '../../container/container';

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 16.0240882;
const LONGITUDE = 108.1840876;
const LATITUDE_DELTA = 0.0322;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;

class CustomMarkers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
            markers: [],
        };
        this.onMapPress = this.onMapPress.bind(this);
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
        this.loadLists();
    }

    loadLists() {
        this.state.loading = true;
        this.props.onFetchProduct(0, this.props.typeId);
        this.state.products = this.props.products;
        this.state.loading = false;
    }

    forceUpdateHandler() {
        this.forceUpdate();
    };

    static getDerivedStateFromProps(props, state) {
        if (props.products !== state.products) {
            props.products.forEach((item, index) => {
                state.markers = [
                    ...state.markers,
                    {
                        title: item.tenSanPham,
                        description: item.diaChi,
                        coordinate: {'latitude': item.latX, 'longitude': item.longY},
                        key: `foo${id++}`,
                    },
                ];
            });
            return {
                products: props.products,
            };
        }
        return null;
    }

    onMapPress(e) {
        // console.log(e.nativeEvent.coordinate);
        this.setState({
            markers: [
                ...this.state.markers,
                {
                    coordinate: e.nativeEvent.coordinate,
                    key: `foo${id++}`,
                },
            ],
        });
    }

    render() {

        return (
            <View style={styles.container}>
                <MapView
                    provider={this.props.provider}
                    style={styles.map}
                    initialRegion={this.state.region}
                    onPress={this.onMapPress}
                >
                    {this.state.markers.map((marker, index) => {
                        // console.log(marker.description);
                        return marker.coordinate.latitude && marker.coordinate.longitude ? (
                            <Marker
                                title={marker.title}
                                description={marker.description}
                                flat={true}
                                icon={flagPinkImg}
                                key={marker.key}
                                coordinate={marker.coordinate}
                                style={{width: 400, height: 400}}
                            />
                        ) : null;
                    })}
                </MapView>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => this.setState({markers: []})}
                        style={styles.bubble}
                    >
                        <Text>Tap to create a marker of random colorr</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

CustomMarkers.propTypes = {
    provider: ProviderPropType,
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    bubble: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
    },
    latlng: {
        width: 200,
        alignItems: 'stretch',
    },
    button: {
        width: 80,
        paddingHorizontal: 12,
        alignItems: 'center',
        marginHorizontal: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        backgroundColor: 'transparent',
    },
    marker: {
        height: 10,
        width: 10,
    },
});


const mapsView = connect(mapStateToProps, mapDisPatchToProps)(CustomMarkers);
export default mapsView;
