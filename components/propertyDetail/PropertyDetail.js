import React, {Component} from 'react';
import {
    StyleSheet,
    View, TouchableOpacity,
    Dimensions,
    Image,
} from 'react-native';
import {
    Container,
    Text,
    Icon,
    Content,
    Card,
    CardItem,
    Item,
    Button,
} from 'native-base';
import {connect} from 'react-redux';
import {mapDisPatchToProps, mapStateToProps} from '../../container/container';
import Lightbox from 'react-native-lightbox-v2';
import SwiperFlatList from 'react-native-swiper-flatlist';
import {WebView} from 'react-native-webview';
import Animated, {Easing} from 'react-native-reanimated';
import StickyParallaxHeader from 'react-native-sticky-parallax-header';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import convert from '../../common/convertHtml';
import HTML from 'react-native-render-html';

export const {width, height} = Dimensions.get('window');

export let headerLeftPropertyDetail = (props) => {
    return (<TouchableOpacity
        onPress={props.onPress}
        style={{
            paddingLeft: 10,
        }}
    >
        <Image
            source={require('../../assets/images/icons/arrow-back.png')}
            resizeMode="contain"
            style={{
                height: 20,
            }}
        />
    </TouchableOpacity>);
};
const styles = StyleSheet.create({
    propertyHeader: {
        fontSize: 20,
        margin: 0,
        padding: 0,
        paddingHorizontal: 10,
        color: '#ffbb1f',
    }, child: {
        height: height * 0.5,
        width: '100%',
        justifyContent: 'center',
    }, sectionTitle: {
        fontSize: 16,
        fontWeight: '300',
        color: '#ff1144',
        textAlign: 'center',
    }, tableTitle: {
        flex: 1,
        color: '#414F47',
        margin: 0,
        paddingVertical: 2,
    }, tableValue: {
        flex: 1,
        fontWeight: 'bold',
        margin: 0,
        paddingVertical: 4,
    }, table: {
        paddingHorizontal: 15,
    }, headerWrapper: {
        backgroundColor: 'green',
        width: '100%',
        paddingHorizontal: 24,
        paddingBottom: 25,
        flexDirection: 'row',
        alignItems: 'center',
    }, container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    }, map: {
        ...StyleSheet.absoluteFillObject,
    },
    address: {
        color: '#414f47',
        margin: 10,
        paddingHorizontal: 10,
    },
});

export class PropertyDetail extends React.Component {

    constructor(props) {
        super(props);
        this.product = this.props.route.params;
        this.state = {
            product: this.props.route.params,
        };
    }

    renderHeader = () => {
        const {scroll} = this.state;
        const opacity = scroll.interpolate({
            inputRange: [0, 160, 210],
            outputRange: [0, 0, 1],
            extrapolate: 'clamp',
        });

        return (
            <View style={styles.headerWrapper}>
                <Animated.View style={{opacity}}>
                    <Text style={styles.headerTitle}>STICKY HEADER</Text>
                </Animated.View>
            </View>
        );
    };

    render() {
        let date = new Date(this.product.product.ngayTao);
        // console.log(this.product.product);
        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <Container>
                    <Content style={{paddingHorizontal: 10, backgroundColor: 'rgba(78,33,0,0.03)'}}>
                        <Card>
                            <CardItem style={{flex: 1}} cardBody>
                                {this.product.product.images ?
                                    <SwiperFlatList
                                        index={0}
                                        autoplay
                                        autoplayDelay={6}
                                        showPagination={false}
                                    >
                                        {this.product.product.images.map((item, index) => {
                                            console.log(item.title);
                                            return (
                                                <Lightbox key={index} navigator={this.props.navigator}>
                                                    <View style={[styles.child]}>
                                                        <Image style={{height: '100%', width: width - 25}}
                                                               source={{uri: item.image}}/>
                                                    </View>
                                                </Lightbox>);
                                        })}
                                    </SwiperFlatList> : null}
                            </CardItem>
                            <Text style={styles.propertyHeader}>{this.product.product.tenSanPham}</Text>
                            <Text style={styles.address}>{this.product.product.diaChi}</Text>
                            <Item style={{flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 10}}>
                                <Button styles={{margin: 50, borderRadius: 6}} warning iconLeft>
                                    <Icon name='call-outline'/>
                                    <Text>Gọi ngay</Text>
                                </Button>
                                <Button style={{backgroundColor: '#040DFF', borderRadius: 6}} warning
                                        iconLeft>
                                    <Icon name='mail-open-outline'/>
                                    <Text> Gửi thông tin</Text>
                                </Button>
                            </Item>
                        </Card>

                        <Card>
                            <CardItem header bordered>
                                <Text style={styles.propertyHeader}>Mô tả</Text>
                            </CardItem>
                            <CardItem>
                                <View style={{width: '100%'}}>
                                    {this.product.product.moTa ?
                                        <HTML html={this.product.product.moTa} contentWidth={height}/> : null}
                                </View>
                            </CardItem>
                        </Card>

                        <Card style={styles.table}>
                            <CardItem header bordered>
                                <Text style={styles.propertyHeader}>Thông tin chi tiết</Text>
                            </CardItem>
                            <View style={{display: 'flex', flexDirection: 'row'}}>
                                <Text style={styles.tableTitle}>Giá</Text>
                                <View style={{flex: 1}}>
                                    <Text style={styles.tableTitle}>Diện tích</Text>
                                </View>
                            </View>
                            <View style={{display: 'flex', flexDirection: 'row'}}>
                                <Text
                                    style={styles.tableValue}>VND {this.product.product.giaTien ? this.product.product.giaTien : null} triệu</Text>
                                <View style={{flex: 1}}>
                                    <Text
                                        style={styles.tableValue}>{this.product.product.dienTich ? this.product.product.dienTich : null}m2</Text>
                                </View>
                            </View>
                            <View style={{display: 'flex', flexDirection: 'row'}}>
                                <Text style={styles.tableTitle}>Loại hình</Text>
                                <View style={{flex: 1}}>
                                    <Text style={styles.tableTitle}>Năm xây dựng</Text>
                                </View>
                            </View>
                            <View style={{display: 'flex', flexDirection: 'row'}}>
                                <Text
                                    style={styles.tableValue}>{this.product.product.category ? this.product.product.category.name : null}</Text>
                                <View style={{flex: 1}}>
                                    <Text style={styles.tableValue}>{date.getFullYear()}</Text>
                                </View>
                            </View>
                            <View style={{display: 'flex', flexDirection: 'row'}}>
                                <Text style={styles.tableTitle}>Hướng nhìn</Text>
                                <View style={{flex: 1}}>
                                    <Text style={styles.tableTitle}>Trạng thái</Text>
                                </View>
                            </View>
                            <View style={{display: 'flex', flexDirection: 'row'}}>
                                <Text style={styles.tableValue}>Tây</Text>
                                <View style={{flex: 1}}>
                                    <Text style={styles.tableValue}>Có sổ đỏ</Text>
                                </View>
                            </View>
                        </Card>
                    </Content>
                </Container>
            </View>
        );
    }
}

const propertyDetail = connect(mapStateToProps, mapDisPatchToProps)(PropertyDetail);
export default propertyDetail;