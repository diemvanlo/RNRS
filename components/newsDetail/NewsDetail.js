import {connect} from 'react-redux';
import {mapDisPatchToProps, mapStateToProps} from '../../container/container';
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
    Thumbnail,
} from 'native-base';
import React from 'react';
import HTML from 'react-native-render-html';

export const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    title: {
        fontWeight: '700',
        fontSize: 22,
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontFamily: 'sans-serif-medium',
        textAlign: 'center',
    },
    date: {
        paddingHorizontal: 10,
        fontFamily: 'Roboto',
        fontWeight: '100',
        color: 'rgba(31,30,32,0.78)',
        paddingBottom: 5,
    },
    content: {
        paddingVertical: 5,
        paddingHorizontal: 8,
    },
    description: {
        fontSize: 16,
        fontFamily: 'Times New Roman',
        fontWeight: '500',
        paddingHorizontal: 10,
    },
});
const htmlContent = `
    <h1>This HTML snippet is now rendered with native components !</h1>
    <h2>Enjoy a webview-free and blazing fast application</h2>
    <img src="https://i.imgur.com/dHLmxfO.jpg?2" />
    <em style="textAlign: center;">Look at how happy this native cat is</em>
`;

class NewsDetail extends React.Component {
    constructor(props) {
        super(props);
        this.news = this.props.route.params;
        this.state = {
            news: this.props.route.params,
        };
    }

    render() {
        let date = new Date(this.news.params.createdDate);
        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <Container>
                    <Content style={{}}>
                        <Text style={styles.title}>{this.news.params.title ? this.news.params.title : null}</Text>
                        <Text
                            style={styles.date}>{this.news.params.createdDate ? 'Ngày ' + date.getDate() + ' tháng ' + date.getMonth() + ' Năm ' + date.getFullYear() : null}</Text>
                        <Text
                            style={styles.description}>{this.news.params.description ? this.news.params.description : null}</Text>
                        {this.news.params.image ? <Thumbnail style={{height: 200, width: '100%', borderRadius: 0}}
                                                             source={{uri: this.news.params.image}}/> : null}
                        <View style={styles.content}>
                            {this.news.params.content ?
                                <HTML html={this.news.params.content}
                                      contentWidth={height}/> : null}
                        </View>
                    </Content>
                </Container>
            </View>
        );
    }
}

const newsDetail = connect(mapStateToProps, mapDisPatchToProps)(NewsDetail);
export default newsDetail;