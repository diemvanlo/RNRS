import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableOpacity, default as e,
} from 'react-native';
import { PanoramaView } from "@lightbase/react-native-panorama-view";
import {connect} from 'react-redux';
import {mapDisPatchToProps, mapStateToProps} from '../../container/container';

const {width, height} = Dimensions.get('window');
class VrImage extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <PanoramaView
                    style={styles.viewer}
                    dimensions={{ height: 230, width: Dimensions.get("window").width }}
                    inputType="mono"
                    imageUrl="https://i.ibb.co/s6Vvxwq/t-ng-1.jpg"
                    enableTouchTracking={true}
                />
            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewer: {
        height: 230,
    },
    details: {
        flexGrow: 1,
        padding: 16,
    },
    title: {
        color: "#000",
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 10,
    },
    text: {
        color: "#333",
        fontSize: 14,
        marginBottom: 10,
    },
});

const vrImage = connect(mapStateToProps, mapDisPatchToProps)(VrImage);
export default vrImage;
