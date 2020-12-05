import React from 'react';
import {Container, Content, Text} from 'native-base';

const EmptyResult = props => {
    return (
        <Container style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Content><Text>No property found!</Text></Content>
        </Container>
    );
};