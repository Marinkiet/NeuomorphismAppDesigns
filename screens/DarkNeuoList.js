import {
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image

} from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient'; //why without curly brackets give error
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
        <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
    </TouchableOpacity>
);

const DarkNeuoList = () => {


    const navigation = useNavigation();
    const { LinearGradientColor,
        Container,
        Header, headerText, HeaderIconBorder, IconLightShadow, BackIconBackground,
        SongBodyContainer, AlbumArtContainer, AlbumArtBorder, AlbumArtLightBorder,
        AlbumArtImageContainer, AlbumArtImage, SongDetailsSongontainer, SongDetailsContainerSelected, SongTitleContainer,
        SongArtistTitleContainer, SongTitle, SongArtistTitle, dot, IconPlayLightShadow,
        SongBodyListContainer, SongDetailsContainer, SongDetailsIconContainer, Pause, SongIconDarkShadow,
        SongControlIcon, SongControlLightShadow, SongPauseBorder } = styles;

    return (
        <LinearGradient
            colors={['#373e45', '#34393f', '#2c2f34', '#27292d', '#232529', '#202226', '#181a1d']} style={LinearGradientColor}>
            <SafeAreaView style={Container}>
                <StatusBar barStyle="dark-content" hidden={true} backgroundColor="#8c8f92" translucent={true} />


                <View style={Header}>
                    <Text style={headerText}>EVOL  <Text style={dot}>&#183; </Text> FUTURE</Text>
                </View>

                <View style={SongBodyContainer}>
                    <View style={[HeaderIconBorder, IconLightShadow]}>
                        <View style={SongIconDarkShadow}>
                            <TouchableOpacity
                            >
                                <LinearGradient
                                    colors={['#2c3036', '#1e2024']} style={[LinearGradientColor]}>
                                    <View style={[]}>
                                        {/* color="#92969c" */}
                                        <View style={BackIconBackground}>
                                            <MaterialCommunityIcons
                                                name="heart"
                                                size={18}
                                                color='#87898c'
                                            >
                                            </MaterialCommunityIcons>
                                        </View>
                                    </View>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={AlbumArtContainer}>
                        <View style={AlbumArtBorder}>
                            <View style={[AlbumArtBorder, AlbumArtLightBorder, AlbumArtImageContainer]}>
                                <View style={AlbumArtImage}>
                                    <Image style={AlbumArtImage} source={require('../assets/images/roses.jpeg')} />
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={[HeaderIconBorder, IconLightShadow]}>
                        <View style={SongIconDarkShadow}>
                            <TouchableOpacity>
                                <LinearGradient
                                    colors={['#2c3036', '#1e2024']} style={[LinearGradientColor]}>
                                    <View style={[]}>
                                        {/* color="#92969c" */}
                                        <View style={BackIconBackground}>
                                            <Feather
                                                name="more-horizontal"
                                                size={28}
                                                color='#87898c'
                                            >
                                            </Feather>
                                        </View>
                                    </View>
                                </LinearGradient>

                            </TouchableOpacity>
                        </View>

                    </View>

                </View>

                <View style={SongBodyListContainer}>
                    {/* Play Button 1*/}
                    <View style={SongDetailsContainer}>

                        <View style={SongDetailsSongontainer}>
                            <View style={SongTitleContainer}>
                                <Text style={SongTitle}>Ain't No Time</Text>
                            </View>
                            <View style={SongArtistTitleContainer}>
                                <Text style={SongArtistTitle}>Future</Text>
                            </View>
                        </View>

                        <View style={SongDetailsIconContainer}>
                            <View style={[HeaderIconBorder, IconPlayLightShadow]}>
                                <View style={SongIconDarkShadow}>
                                    <LinearGradient
                                        colors={['#2c3036', '#1e2024']} style={[LinearGradientColor]}>
                                        <TouchableOpacity
                                        >
                                            <View style={[]}>
                                                {/* color="#92969c" */}
                                                <View style={BackIconBackground}>
                                                    <MaterialCommunityIcons
                                                        name="play"
                                                        size={20}
                                                        color='#87898c'
                                                    >
                                                    </MaterialCommunityIcons>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </LinearGradient>
                                </View>

                            </View>

                        </View>

                    </View>
                    {/* Play Button 2*/}
                    <View style={SongDetailsContainer}>

                        <View style={SongDetailsSongontainer}>
                            <View style={SongTitleContainer}>
                                <Text style={SongTitle}>In Her Mouth</Text>
                            </View>
                            <View style={SongArtistTitleContainer}>
                                <Text style={SongArtistTitle}>Future</Text>
                            </View>
                        </View>

                        <View style={SongDetailsIconContainer}>
                            <View style={[HeaderIconBorder, IconPlayLightShadow]}>
                                <View style={SongIconDarkShadow}>
                                    <LinearGradient
                                        colors={['#2c3036', '#1e2024']} style={[LinearGradientColor]}>
                                        <TouchableOpacity
                                        >
                                            <View>
                                                {/* color="#92969c" */}
                                                <View style={BackIconBackground}>
                                                    <MaterialCommunityIcons
                                                        name="play"
                                                        size={20}
                                                        color='#87898c'
                                                    >
                                                    </MaterialCommunityIcons>
                                                </View>
                                            </View>

                                        </TouchableOpacity>
                                    </LinearGradient>
                                </View>

                            </View>
                        </View>

                    </View>
                    {/* Pause Button*/}
                    <LinearGradient
                        colors={['#121416', '#181a1c']} style={[SongDetailsContainerSelected]}>

                        <TouchableOpacity
                        onPress={() => navigation.navigate('DarkNeuro')}>
                            <View style={[SongDetailsContainer,]}>

                                <View style={[SongDetailsSongontainer]}>
                                    <View style={SongTitleContainer}>
                                        <Text style={SongTitle}>Low Life</Text>
                                    </View>
                                    <View style={SongArtistTitleContainer}>
                                        <Text style={SongArtistTitle}>Future &#183; The Weeknd</Text>
                                    </View>
                                </View>

                                <View style={SongDetailsIconContainer}>
                                    <View style={HeaderIconBorder}>
                                        <TouchableOpacity
                                        >
                                            <View style={Pause}>
                                                <LinearGradient style={[SongControlLightShadow, SongControlIcon, SongPauseBorder]}
                                                    colors={["#c52910", "#eb4215", "#ee540f"]}>
                                                    <View >
                                                        <FontAwesome6
                                                            name="pause"
                                                            size={13}
                                                            color='white'
                                                        >
                                                        </FontAwesome6>
                                                    </View>
                                                </LinearGradient>

                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </View>
                        </TouchableOpacity>
                    </LinearGradient>
                    {/* Play Button 3*/}
                    <View style={SongDetailsContainer}>

                        <View style={SongDetailsSongontainer}>
                            <View style={SongTitleContainer}>
                                <Text style={SongTitle}>Xanny Family</Text>
                            </View>
                            <View style={SongArtistTitleContainer}>
                                <Text style={SongArtistTitle}>Future</Text>
                            </View>
                        </View>

                        <View style={SongDetailsIconContainer}>
                            <View style={[HeaderIconBorder, IconPlayLightShadow]}>
                                <View style={SongIconDarkShadow}>
                                    <LinearGradient
                                        colors={['#2c3036', '#1e2024']} style={[LinearGradientColor]}>
                                        <TouchableOpacity
                                        >
                                            <View>
                                                {/* color="#92969c" */}
                                                <View style={BackIconBackground}>
                                                    <MaterialCommunityIcons
                                                        name="play"
                                                        size={20}
                                                        color='#87898c'
                                                    >
                                                    </MaterialCommunityIcons>
                                                </View>
                                            </View>

                                        </TouchableOpacity>
                                    </LinearGradient>
                                </View>

                            </View>
                        </View>

                    </View>
                    {/* Play Button 4*/}
                    <View style={SongDetailsContainer}>

                        <View style={SongDetailsSongontainer}>
                            <View style={SongTitleContainer}>
                                <Text style={SongTitle}>Lil Haity Baby</Text>
                            </View>
                            <View style={SongArtistTitleContainer}>
                                <Text style={SongArtistTitle}>Future</Text>
                            </View>
                        </View>

                        <View style={SongDetailsIconContainer}>
                            <View style={[HeaderIconBorder, IconPlayLightShadow]}>
                                <View style={SongIconDarkShadow}>
                                    <LinearGradient
                                        colors={['#2c3036', '#1e2024']} style={[LinearGradientColor]}>
                                        <TouchableOpacity
                                        >
                                            <View>
                                                {/* color="#92969c" */}
                                                <View style={BackIconBackground}>
                                                    <MaterialCommunityIcons
                                                        name="play"
                                                        size={20}
                                                        color='#87898c'
                                                    >
                                                    </MaterialCommunityIcons>
                                                </View>
                                            </View>

                                        </TouchableOpacity>
                                    </LinearGradient>
                                </View>

                            </View>
                        </View>

                    </View>
                    {/* Play Button 5*/}
                    <View style={SongDetailsContainer}>

                        <View style={SongDetailsSongontainer}>
                            <View style={SongTitleContainer}>
                                <Text style={SongTitle}>Photo Copied</Text>
                            </View>
                            <View style={SongArtistTitleContainer}>
                                <Text style={SongArtistTitle}>Future</Text>
                            </View>
                        </View>

                        <View style={SongDetailsIconContainer}>
                            <View style={[HeaderIconBorder, IconPlayLightShadow]}>
                                <View style={SongIconDarkShadow}>
                                    <LinearGradient
                                        colors={['#2c3036', '#1e2024']} style={[LinearGradientColor]}>
                                        <TouchableOpacity
                                        >
                                            <View>
                                                {/* color="#92969c" */}
                                                <View style={BackIconBackground}>
                                                    <MaterialCommunityIcons
                                                        name="play"
                                                        size={20}
                                                        color='#87898c'
                                                    >
                                                    </MaterialCommunityIcons>
                                                </View>
                                            </View>

                                        </TouchableOpacity>
                                    </LinearGradient>
                                </View>

                            </View>
                        </View>

                    </View>
                    {/* Play Button 6*/}
                    <View style={SongDetailsContainer}>

                        <View style={SongDetailsSongontainer}>
                            <View style={SongTitleContainer}>
                                <Text style={SongTitle}>Seven Rings</Text>
                            </View>
                            <View style={SongArtistTitleContainer}>
                                <Text style={SongArtistTitle}>Future</Text>
                            </View>
                        </View>

                        <View style={SongDetailsIconContainer}>
                            <View style={[HeaderIconBorder, IconPlayLightShadow]}>
                            <View style={SongIconDarkShadow}>
                            <LinearGradient
                                    colors={['#2c3036', '#1e2024']} style={[LinearGradientColor]}>
                                    <TouchableOpacity
                                    >
                                        <View>
                                            {/* color="#92969c" */}
                                            <View style={BackIconBackground}>
                                                <MaterialCommunityIcons
                                                    name="play"
                                                    size={20}
                                                    color='#87898c'
                                                >
                                                </MaterialCommunityIcons>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </LinearGradient>
                            </View>
                                
                            </View>
                        </View>

                    </View>

                    {/* Play Button 7*/}
                    <View style={SongDetailsContainer}>

                        <View style={SongDetailsSongontainer}>
                            <View style={SongTitleContainer}>
                                <Text style={SongTitle}>Lie To Me</Text>
                            </View>
                            <View style={SongArtistTitleContainer}>
                                <Text style={SongArtistTitle}>Future</Text>
                            </View>
                        </View>

                        <View style={SongDetailsIconContainer}>
                            <View style={[HeaderIconBorder, IconPlayLightShadow]}>
                                <TouchableOpacity
                                >
                                    <View style={[]}>
                                        {/* color="#92969c" */}
                                        <View style={BackIconBackground}>
                                            <MaterialCommunityIcons
                                                name="play"
                                                size={20}
                                                color='#87898c'
                                            >
                                            </MaterialCommunityIcons>
                                        </View>
                                    </View>

                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>

                    <View>
                    </View>

                </View>

            </SafeAreaView>

        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    LinearGradientColor: {
        flex: 1,
        borderRadius: 50,
    },
    Container: {
        // flex: 1,
        marginHorizontal: '5%',
        // backgroundColor: 'pink',
        marginTop: StatusBar.currentHeight || 0,
    },
    Header: {
        height: '10%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    HeaderIconBorder: {
        width: 45,
        height: 45,
        borderRadius: 50,
        borderColor: '#1d1e1f',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    BackIconBackground: {
        borderRadius: 50,
        width: 45,
        height: 45,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#2a2e34',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 4,
        borderWidth: 2,
        borderColor: "#1f2327"
    },
    IconLightShadow: {
        shadowColor: '#515862',
        shadowOffset: { width: -5, height: -5 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
    },
    SongIconDarkShadow: {
        shadowColor: '#171718',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
    },
    IconPlayLightShadow: {
        shadowColor: '#515862',
        shadowOffset: { width: -5, height: -5 },
        shadowOpacity: 0.5,
        shadowRadius: 6,
    },
    headerText: {
        fontWeight: '800',
        fontSize: 13,
        color: '#828688'
    },
    dot: {
        fontSize: 11,
        position: 'absolute',
    },
    SongBodyContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: '20%',
        // backgroundColor: 'lightblue',

    },
    AlbumArtContainer: {
        flex: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        

    },
    AlbumArtBorder: {
        height: 160,
        width: 160,
        borderRadius: 160,
        backgroundColor: '#1d1e1f',
        shadowColor: '#363d43',
        shadowOffset: { width: -10, height: -15 },
        shadowOpacity: 1,
        shadowRadius: 8,
    },
    AlbumArtImageContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#e3e3e3',
        shadowColor: 'black',
        shadowOffset: { width: 7, height: 10 },
        shadowOpacity: 0.7,
        shadowRadius: 9,
    },
    AlbumArtImage: {
        height: 150,
        width: 150,
        borderRadius: 150,
        // backgroundColor: 'blue',
    

    },
    SongBodyListContainer: {
        height: '100%',
        display: 'flex',
        marginTop: '7%'
    },
    SongDetailsContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: -5
    },
    SongDetailsSongontainer: {
        flex: 1,
        height: 80,
        // backgroundColor: 'pink',
        display: 'flex',
        justifyContent: 'center',
        // alignItems:'center',
        marginLeft: 15,
    },
    SongDetailsContainerSelected: {
        backgroundColor: '#121416',
        borderRadius: 15,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: "#2b3036"
    },
    Pause: {
        shadowColor: '#3a444a',
        shadowOffset: { width: -8, height: -9 },
        shadowOpacity: 0.5,
        shadowRadius: 9,
        // backgroundColor:'pink'
    },
    SongPauseBorder: {

        borderWidth: 2,
        borderColor: '#da4d0e',
        height: 40,
        width: 40,
        borderRadius: 20,
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
        borderWidth: 2,
        borderColor: '#181a1c',


    },
    SongDetailsIconContainer: {
        height: 80,
        width: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    SongTitle: {
        fontSize: 18,
        fontWeight: '500',
        color: '#c7c7c7'
    },
    SongArtistTitle: {
        fontSize: 15,
        fontWeight: '500',
        color: '#727374'
    }
})
export default DarkNeuoList