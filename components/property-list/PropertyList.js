import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    Image,
    Alert,
} from 'react-native';
import {
    Container,
    Text,
    Icon,
    Content,
    Card,
    CardItem,
    Item,
    Input,
    Thumbnail,
    Body,
    Left,
    Right,
    Button,
} from 'native-base';

const styles = StyleSheet.create({
    propertyHeader: {
        fontSize: 34,
        margin: 0,
        padding: 10,
    }, sectionTitle: {
        fontSize: 16,
        fontWeight: '300',
        color: '#ff1144',
        textAlign: 'center',
    },
    modelContainer: {
        position: 'absolute',
        right: 0,
        top: -5,
        zIndex: 1,
        overflow: 'hidden',
        width: 275,
        height: 275,
        textAlign: 'right',
    },
    modelText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
        textTransform: 'uppercase',
        textAlign: 'center',
        lineHeight: 40,
        transform: [
            {rotate: '45deg'},
        ],
        width: 250,
        backgroundColor: '#8F0808',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        position: 'absolute',
        top: 40,
        right: -66,
    },
    textBlack: {
        color: '#000',
    },
});


class PropertyList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...this.state,
            term: '',
            products: this.props.products,
            typeId: this.props.typeId,
            visible: false,
            product: {},
            fetchFinished: false,
        };
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
        this.loadLists();
    }

    loadLists() {
        this.props.onFetchProduct(0, this.props.typeId);
        this.state.products = this.props.products;
    }

    forceUpdateHandler() {
        this.forceUpdate();
    };

    static getDerivedStateFromProps(props, state) {
        if (props.products !== state.products) {
            return {
                products: props.products,
            };
        }
        return null;
    }

    componentDidMount() {
        const {navigation} = this.props;

    }

    componentWillUnmount() {
    }

    navigateToProductDetail(product) {
        this.props.navigation.navigate('Property detail', {product: product});
    }

    render() {
        // console.log(this.props.products);
        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <View style={{textAlign: 'center', alignItems: 'center', justifyItems: 'center', paddingTop: 10}}>
                    <Button block transparent bordered iconRight danger>
                        <Icon style={{paddingLeft: 4}} name='search-sharp'/>
                        <Input placeholder='Tìm kiếm dự án'/>
                    </Button>
                </View>
                <Container>
                    <Content>
                        {this.props.products !== undefined && this.props.products !== '' ? this.props.products.map((item, index) => {
                            return (
                                <Card key={item.id}>
                                    <CardItem cardBody>
                                        <View style={styles.modelContainer}>
                                            {item.category ?
                                                <Text style={styles.modelText}>{item.category.name}</Text> : null}
                                        </View>
                                        <Thumbnail style={{height: 280, width: '100%', borderRadius: 0}}
                                                   source={{uri: item.image}}/>
                                    </CardItem>
                                    <Button style={styles.propertyHeader} transparent
                                            onPress={() => this.navigateToProductDetail(item)}>
                                        <Text style={{fontSize: 20}}>{item.tenSanPham}</Text>
                                        <Icon type="FontAwesome" name="chevron-right"/>
                                    </Button>
                                    <Button transparent>
                                        <Icon style={{color: 'red'}} name="pin-outline"/>
                                        <Text style={{color: '#414f47'}}>{item.diaChi}</Text>
                                    </Button>
                                    <Button onPress={() => this.navigateToProductDetail(item)}
                                            transparent>
                                        <Icon style={styles.textBlack} type="FontAwesome" name="dollar"/>
                                        <Text style={styles.textBlack}>{item.giaTien} triệu</Text>
                                        <Icon style={styles.textBlack} type="FontAwesome" name="area-chart"/>
                                        <Text style={styles.textBlack}>{item.dienTich} m2</Text>
                                    </Button>
                                </Card>);
                        }) : null}
                    </Content>
                </Container>
            </View>
        );
    }
}

export default PropertyList;