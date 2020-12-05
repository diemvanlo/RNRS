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
import {connect} from 'react-redux';
import {mapDisPatchToProps, mapStateToProps} from '../../container/container';
import PropertyList from '../property-list/PropertyList';

const styles = StyleSheet.create({
    propertyHeader: {
        fontSize: 20,
        margin: 0,
        padding: 0,
        paddingHorizontal: 10,
        height: 'auto'
    }, sectionTitle: {
        fontSize: 16,
        fontWeight: '300',
        color: '#ff1144',
        textAlign: 'center',
    }, conner: {
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
    banner: {
        position: 'absolute',
        right: 0,
        top: -5,
        zIndex: 1,
        overflow: 'hidden',
        width: 275,
        height: 275,
        textAlign: 'right',
    },
});

class NewsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.state,
            term: '',
            news: this.props.news,
            typeId: this.props.typeId,
            visible: false,
            fetchFinished: false,
        };
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
        this.loadLists();
    }

    loadLists() {
        this.props.onFetchNews(0, this.props.typeId);
        this.state.news = this.props.news;
    }

    forceUpdateHandler() {
        this.forceUpdate();
    };

    navigateToNewsDetail(news) {
        this.props.navigation.navigate('News detail', {params: news});
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <View style={{textAlign: 'center', alignItems: 'center', justifyItems: 'center', paddingTop: 10}}>
                    <Button block transparent bordered iconRight danger>
                        <Text>Tìm kiếm tin tức</Text>
                        <Icon name='search-sharp'/>
                    </Button>
                </View>
                <Container>
                    <Content>
                        {this.props.news ? this.props.news.map((item, index) => {
                            let date = new Date(item.createdDate);
                            return (
                                <Card key={item.id}>
                                    <CardItem cardBody>
                                        <View style={styles.banner}>
                                            <Text style={styles.conner}>Mới nhất</Text>
                                        </View>
                                         <Thumbnail style={{height: 200, width: '100%', borderRadius: 0}}
                                                   source={{uri: item.image}}/>
                                    </CardItem>
                                    <Button style={{height: 'auto'}} onPress={() => {
                                        this.navigateToNewsDetail(item);
                                    }} transparent>
                                        <Text style={styles.propertyHeader}>{item.title}</Text>
                                    </Button>
                                    <Button onPress={() => {
                                        this.navigateToNewsDetail(item);
                                    }} transparent>
                                        <Text style={{color: '#414f47', margin: 0}}>
                                            {'Ngày ' + date.getDate() + ' tháng ' + date.getMonth() + ' Năm ' + date.getFullYear()}
                                        </Text>
                                    </Button>
                                    <Text style={{fontSize: 12, color: '#470f3d', paddingBottom: 4, paddingHorizontal: 10}}>
                                        {item.description}</Text>
                                </Card>);
                        }) : null}

                    </Content>
                </Container>
            </View>
        );
    }
}

const newsList = connect(mapStateToProps, mapDisPatchToProps)(NewsList);
export default newsList;