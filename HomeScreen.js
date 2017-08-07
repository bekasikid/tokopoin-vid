import React, {Component} from 'react';
import {Navigation} from 'react-native-navigation';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {
    Container,
    Header,
    Title,
    Content,
    Footer,
    FooterTab,
    Button,
    Icon,
    Left,
    Right,
    Body,
    Text,
    Item,
    Input,
    List,
    ListItem,
    View
} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import Carousel from 'react-native-looped-carousel';

var Dimensions = require('Dimensions');
const {height, width} = Dimensions.get('window');

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: {width: width, height: 200},
            isReady: false,
        };
    }

    _goToView2 = (page) => {
        // NavigationActions.view2(page);
        console.log('Navigation router run...');
    };

    _onLayoutDidChange = (e) => {
        const layout = e.nativeEvent.layout;
        this.setState({size: {width: layout.width, height: 200}});
    };

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
        this.setState({isReady: true});
    }

    render() {
        if (!this.state.isReady) {
            return false;
        }

        return (
            <Container>
                <Header style={{backgroundColor: '#FFFFFF',height:50}}>
                    <Body style={{flex: 1}}>
                        <Item style={{width:width,paddingLeft:5}}>
                            <Icon active name='search'/>
                            <Input placeholder='Search Category'/>
                        </Item>
                    </Body>
                </Header>
                <Content style={{flex: 1}}>
                    <View style={{flex: 1}} onLayout={this._onLayoutDidChange}>
                        <Carousel
                            delay={2000}
                            style={this.state.size}
                            autoplay
                            pageInfo
                        >
                            <View style={[{backgroundColor: '#BADA55'}, this.state.size]}><Text>1</Text></View>
                            <View style={[{backgroundColor: 'red'}, this.state.size]}><Text>2</Text></View>
                            <View style={[{backgroundColor: 'blue'}, this.state.size]}><Text>3</Text></View>
                        </Carousel>
                    </View>
                    <Grid>
                        <Col>
                            <List>
                                <ListItem icon button onPress={() => {
                                    this._goToView2("halloo")
                                }}>
                                    <Left>
                                        <Icon name='medkit'/>
                                    </Left>
                                    <Body>
                                    <Text>Dokter</Text>
                                    </Body>
                                    <Right>
                                    </Right>
                                </ListItem>
                                <ListItem icon button>
                                    <Left>
                                        <Icon name='musical-note'/>
                                    </Left>
                                    <Body>
                                    <Text>Musik</Text>
                                    </Body>
                                    <Right>
                                    </Right>
                                </ListItem>
                                <ListItem icon button>
                                    <Left>
                                        <Icon name='flag'/>
                                    </Left>
                                    <Body>
                                    <Text>Bahasa</Text>
                                    </Body>
                                    <Right>
                                    </Right>
                                </ListItem>
                                <ListItem icon button>
                                    <Left>
                                        <Icon name='heart'/>
                                    </Left>
                                    <Body>
                                    <Text>Asmara</Text>
                                    </Body>
                                    <Right>
                                    </Right>
                                </ListItem>
                                <ListItem icon button>
                                    <Left>
                                        <Icon name='school'/>
                                    </Left>
                                    <Body>
                                    <Text>Hukum</Text>
                                    </Body>
                                    <Right>
                                    </Right>
                                </ListItem>
                                <ListItem icon button>
                                    <Left>
                                        <Icon name='cash'/>
                                    </Left>
                                    <Body>
                                    <Text>Bisnis</Text>
                                    </Body>
                                    <Right>
                                    </Right>
                                </ListItem>
                                <ListItem icon button>
                                    <Left>
                                        <Icon name='camera'/>
                                    </Left>
                                    <Body>
                                    <Text>Photography</Text>
                                    </Body>
                                    <Right>
                                    </Right>
                                </ListItem>
                                <ListItem icon button>
                                    <Left>
                                        <Icon name='phone-portrait'/>
                                    </Left>
                                    <Body>
                                    <Text>Gadget</Text>
                                    </Body>
                                    <Right>
                                    </Right>
                                </ListItem>
                            </List>
                        </Col>
                        <Col>
                            <List>
                                <ListItem icon button>
                                    <Left>
                                        <Icon name='bowtie'/>
                                    </Left>
                                    <Body>
                                    <Text>Pernikahan</Text>
                                    </Body>
                                    <Right>
                                    </Right>
                                </ListItem>
                                <ListItem icon button>
                                    <Left>
                                        <Icon name='brush'/>
                                    </Left>
                                    <Body>
                                    <Text>Kecantikan</Text>
                                    </Body>
                                    <Right>
                                    </Right>
                                </ListItem>
                                <ListItem icon button>
                                    <Left>
                                        <Icon name='moon'/>
                                    </Left>
                                    <Body>
                                    <Text>Religion</Text>
                                    </Body>
                                    <Right>
                                    </Right>
                                </ListItem>
                                <ListItem icon button>
                                    <Left>
                                        <Icon name='hammer'/>
                                    </Left>
                                    <Body>
                                    <Text>Architecture</Text>
                                    </Body>
                                    <Right>
                                    </Right>
                                </ListItem>
                                <ListItem icon button>
                                    <Left>
                                        <Icon name='cafe'/>
                                    </Left>
                                    <Body>
                                    <Text>Kuliner</Text>
                                    </Body>
                                    <Right>
                                    </Right>
                                </ListItem>
                                <ListItem icon button>
                                    <Left>
                                        <Icon name='book'/>
                                    </Left>
                                    <Body>
                                    <Text>Sekolah</Text>
                                    </Body>
                                    <Right>
                                    </Right>
                                </ListItem>
                                <ListItem icon button>
                                    <Left>
                                        <Icon name='laptop'/>
                                    </Left>
                                    <Body>
                                    <Text>Komputer</Text>
                                    </Body>
                                    <Right>
                                    </Right>
                                </ListItem>
                                <ListItem icon button>
                                    <Left>
                                        <Icon name='game-controller-a'/>
                                    </Left>
                                    <Body>
                                    <Text>Games</Text>
                                    </Body>
                                    <Right>
                                    </Right>
                                </ListItem>
                            </List>
                        </Col>
                    </Grid>
                </Content>
            </Container>
        );
    }
}
