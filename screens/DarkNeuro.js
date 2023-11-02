import { View, Text, StyleSheet, SafeAreaView, StatusBar,TouchableOpacity, Image } from 'react-native'
import { React } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {LinearGradient} from 'react-native-linear-gradient'; //why without curly brackets give error
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { NeomorphBlur } from 'react-native-neomorph-shadows';
import { useNavigation } from '@react-navigation/native';
const DarkNeuro = () => {
    const navigation = useNavigation();
    const { Container,
        Header, HeaderIconBorder, BackIconBackground, IconLightShadow,
        LinearGradientColor, HeaderText,
        AlbumArtContainer, AlbumArtBorder, AlbumArtLightBorder, AlbumArtImage, AlbumArtImageContainer,
        SongDetailsContainer, SongDetailsTitle, SongDetailsArtist, SongDetailsTitleContainer, SongDetailsArtistContainer,
        SongSliderContainer, Pause, SongSliderToggleContainer, SongSliderTimeContainer, SongSliderTimeLeft, SongSliderTimeTogo,
        SongControlsContainer, SongControlButton, SongControlIcon, SongControlLightShadow, SongPauseBorder, SongSliderToggle
        , SongSliderToggleCircleContainer, SongSliderToggleInnerCircleContainer, GradiantLine } = styles
    return (
        <LinearGradient colors={['#373e45', '#34393f', '#373e45', '#27292d', '#232529', '#202226', '#181a1d']} style={LinearGradientColor}>
            <SafeAreaView style={Container}>
            <StatusBar barStyle = "dark-content" hidden = {true} backgroundColor = "#8c8f92" translucent = {true}/>

                {/*Header*/}
                <View style={Header}>

                    <View style={HeaderIconBorder}>
                        <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        >
                            <View style={IconLightShadow}>
                                {/* color="#92969c" */}
                                <View style={BackIconBackground}>
                                    <MaterialCommunityIcons
                                        name="arrow-left"
                                        size={20}
                                        color='#87898c'
                                    >
                                    </MaterialCommunityIcons>
                                </View>
                            </View>

                        </TouchableOpacity>
                    </View>

                    <View style="HeaderText">
                        <Text style={HeaderText}>PLAYING NOW</Text>
                    </View>

                    <View style={HeaderIconBorder}>
                        <TouchableOpacity
                        >
                            <View style={IconLightShadow}>
                                {/* color="#92969c" */}
                                <View style={BackIconBackground}>
                                    <Entypo
                                        name="menu"
                                        size={20}
                                        color='#87898c'
                                    >
                                    </Entypo>
                                </View>
                            </View>

                        </TouchableOpacity>
                    </View>

                </View>

                {/*AlbumArtContainer*/}

                <View style={AlbumArtContainer}>
                    <View style={AlbumArtBorder}>
                        <View style={[AlbumArtBorder, AlbumArtLightBorder, AlbumArtImageContainer]}>
                            <View style={AlbumArtImage}>
                                <Image style={AlbumArtImage} source={require('../assets/images/roses.jpeg')} />
                            </View>
                        </View>
                    </View>
                </View>

                {/*SongDetailsContainer*/}
                <View style={SongDetailsContainer}>
                    <View style={SongDetailsTitleContainer}>
                        <Text style={SongDetailsTitle}>Low Life</Text>
                    </View>
                    <View style={SongDetailsArtistContainer}>
                        <Text style={SongDetailsArtist}>Future ft. The Weekend</Text>
                    </View>
                </View>

                {/*SongSliderContainer*/}

                <View style={SongSliderContainer}>
                    <View style={SongSliderTimeContainer}>
                        <View ><Text style={SongSliderTimeLeft}>1:17</Text></View>
                        <View ><Text style={SongSliderTimeTogo}>2:46</Text></View>
                    </View>
                    <View style={SongSliderToggleContainer}>

                        <LinearGradient colors={['#ce3906', '#e48012', '#dcae27']}
                            style={GradiantLine}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}
                        >
                            <View style={SongSliderToggle}>
                            </View>
                        </LinearGradient>

                        <View>
                   
                                <NeomorphBlur style={SongSliderToggleCircleContainer}>
                                    <NeomorphBlur style={SongSliderToggleInnerCircleContainer} />
                                </NeomorphBlur>

                        </View>

                    </View>
                </View>

                {/*SongControlsContainer*/}

                <View style={SongControlsContainer}>
                    <View style={[SongControlButton, SongControlLightShadow]}>
                        <LinearGradient
                            colors={["#2c3135", "#26282d", "#202225"]}
                            style={[SongControlButton, SongControlIcon]}>
                            <Ionicons
                                name="play-back"
                                size={20}
                                color='#92969c'
                            >
                            </Ionicons>
                        </LinearGradient>
                    </View>

                    <View style={Pause}>
                        <LinearGradient style={[SongControlLightShadow, SongControlIcon, SongPauseBorder]}
                            colors={["#c52910", "#eb4215", "#ee540f"]}>
                            <View >
                                <FontAwesome6
                                    name="pause"
                                    size={20}
                                    color='white'
                                >
                                </FontAwesome6>
                            </View>
                        </LinearGradient>

                    </View>

                    <View style={[SongControlButton, SongControlLightShadow]}>
                        <LinearGradient
                            colors={["#2c3135", "#26282d", "#202225"]}
                            style={[SongControlButton, SongControlIcon]}>
                            <Ionicons
                                name="play-forward"
                                size={20}
                                color='#92969c'
                            >
                            </Ionicons>
                        </LinearGradient>
                    </View>
                </View>

            </SafeAreaView>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    LinearGradientColor: {
        flex: 1,
    },
    Container: {
        flex: 1,
        marginHorizontal: '10%',
        //backgroundColor: 'pink',

    },
    Header: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        //  backgroundColor: 'magenta',
        // marginHorizontal:10

    },
    HeaderIconBorder: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#30343b',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    HeaderTextContainer: {
        flex: 1
    },
    HeaderText: {
        color: 'white',
        fontWeight: '800',
        color: '#85898c',
        fontSize: 12
    },
    BackIconBackground: {
        borderRadius: 50,
        width: 45,
        height: 45,
        backgroundColor: '#222629',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#252b2f',
        shadowOffset: { width: 6, height: 6 },
        shadowOpacity: 1,
        shadowRadius: 5,


    },
    IconLightShadow: {
        shadowColor: '#515862',
        // shadowColor:'white',
        shadowOffset: { width: -4, height: -5 },
        shadowOpacity: 1,
        shadowRadius: 5,

    },
    AlbumArtContainer: {
        flex: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '15%'
    },
    AlbumArtBorder: {
        height: 300,
        width: 300,
        borderRadius: 150,
        backgroundColor: '#1d1e1f',
        shadowColor: '#131315',
        shadowOffset: { width: 25, height: 15 },
        shadowOpacity: 1,
        shadowRadius: 19,
    },
    AlbumArtImageContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#e3e3e3'
    },
    AlbumArtImage: {
        height: 285,
        width: 285,
        borderRadius: 150,
        backgroundColor: 'blue',

    },
    AlbumArtLightBorder: {
        shadowColor: '#373e45',
        shadowOffset: { width: -15, height: -20 },
        shadowOpacity: 1,
        shadowRadius: 10,
    },
    SongDetailsContainer: {
        flex: 1,
        // backgroundColor: 'orange',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        marginTop: 60

    },
    SongDetailsTitle: {
        fontSize: 30,
        color: '#a7a8aa',
        fontWeight: '600'
    },
    SongDetailsArtist: {
        fontSize: 14,
        color: '#797a7c',
        fontWeight: '500'

    },
    SongSliderContainer: {
        flex: 1,
        marginHorizontal: -10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    SongSliderTimeContainer: {
        height: 29,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    SongSliderToggleContainer: {
        backgroundColor: 'black',
        height: 7,
        width: '100%',
        marginTop: 5,
        borderRadius: 5,
        display: 'flex',
        borderBottomColor: '#37393a',
        borderBottomRight: '#37393a',
        borderBottomLeft: '#37393a',
        borderWidth: 2,

    },
    GradiantLine: {
        width: '50%',
        borderRadius: 10,
        position: 'absolute',
        height: 5,


    },
    SongSliderTimeLeft: {
        color: 'grey',
        fontSize: 10,
        fontWeight: '700'
    },
    SongSliderTimeTogo: {
        color: 'grey',
        fontSize: 10,
        fontWeight: '700'
    },
    SongSliderToggle: {
        // backgroundColor: 'red',
        // height: 10,
        // width: '45%',
        // borderRadius: 5,
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center'

    },
    SongSliderToggleCircleContainer: {
        borderRadius: 15,
        shadowRadius: 12,
        backgroundColor: '#282a31',
        width: 27,
        height: 27,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 150,
        bottom:0,
        top:-10,
    },
    SongSliderToggleInnerCircleContainer: {
        borderRadius: 5,
        shadowRadius: 1,
        backgroundColor: '#d4a021',
        width: 9,
        height: 9,
        // shadowOffset: { width: 0, height: -1 },
    },
  
    SongControlsContainer: {
        flex: 2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 20,
        // backgroundColor:'pink'
    },
    SongControlButton: {
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor: '#262a2e',
        shadowColor: '#171719',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 5,

    },
    Pause: {
        shadowColor: '#3a444a',
        shadowOffset: { width: -8, height: -9 },
        shadowOpacity: 0.5,
        shadowRadius: 9,
    },

    SongPauseBorder: {

        borderWidth: 3,
        borderColor: '#da4d0e',
        height: 85,
        width: 85,
        borderRadius: 45,

    },

    SongControlLightShadow: {
        shadowColor: '#262b31',
        shadowOffset: { width: -10, height: -10 },
        shadowOpacity: 1,
        shadowRadius: 7,

    },
    SongControlIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: '#181a1c'

    },
  
})
export default DarkNeuro