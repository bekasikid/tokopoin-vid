import React, {Component} from 'react';
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
import { Image } from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';
import Carousel from 'react-native-looped-carousel';
import { Actions } from 'react-native-router-flux';

var Dimensions = require('Dimensions');
const {height, width} = Dimensions.get('window');

const Page = (props) => (
    <View style={[{backgroundColor: '#BADA55'}, {height:200}]}>
        <Image source={{uri: props.uri}} style={{flex: 1}}/>
    </View>
);

const Page1 = (props) => {
    return (
        <View style={[{backgroundColor: '#BADA55'}, {flex : 1}]}>
            <Image source={{uri: props.uri}} style={{flex: 1}}/>
        </View>)
};



export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: {width: width, height: 200},
            isReady: false,
            // promos : [{"promo_id":"1","promo_name":"Tumpah Ruah","promo_image":"tumpahruah.jpg","imageurl":"http:\/\/pertamina-sumsel.tokopoin.co.id\/assets\/images\/tumpahruah.jpg"},{"promo_id":"2","promo_name":"F1","promo_image":"promo.jpg","imageurl":"http:\/\/pertamina-sumsel.tokopoin.co.id\/assets\/images\/promo.jpg"},{"promo_id":"3","promo_name":"Promo","promo_image":"promo1.jpg","imageurl":"http:\/\/pertamina-sumsel.tokopoin.co.id\/assets\/images\/promo1.jpg"}],
            promos : [],
        };
        // this.state.promos.map((el)=>console.log(el.promo_id));
        this._getPromos();
    }

    _goToView2 = (page) => {
        // NavigationActions.view2(page);
        console.log('Navigation router run...');
        Actions.gray();
    };

    _onLayoutDidChange = (e) => {
        const layout = e.nativeEvent.layout;
        this.setState({size: {width: layout.width, height: 200}});
    };

    _getPromos = () => {
       fetch("http://pertamina-sumsel.tokopoin.co.id/index.php/api/promo/getAll").then((res) => {
           // console.log (res.json());
           return res.json();
           // return JSON.parse(res._bodyText);
        })
           .then((resJson)=>{
           // console.log(resJson);
           this.setState({promos:resJson});
           return resJson;
       }).catch((error) => { console.error(error); });
    };

    generateCarousel = (promos) =>{
        let images = [];
        if(promos.length>0){
            for(let i=0;i<promos.length;i++){
                images.push(
                    <View style={[{backgroundColor: '#BADA55'}, {flex : 1}]} key={promos[i].promo_id}>
                        <Image source={{uri: promos[i].imageurl}} style={{flex: 1}}/>
                    </View>);
            }
        }else{
            images.push(<View style={[{backgroundColor: '#BADA55'}, {flex : 1}]} key="0">
                <Text>Loading...</Text>
            </View>);
        }
        return images;
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
        this.setState({isReady: true});
    }

    // _getPromos();

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
                            {this.generateCarousel(this.state.promos)}
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
