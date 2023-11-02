import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity } from 'react-native'
import { themeFonts } from '../theme/theme'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
const DATA = [
    {
        id: '1',
        roomtype: "Bathroom",
        image: (require("../assets/images/image2.jpg")),
        number: '823,428',
    },
    {
        id: '2',
        title: "living room ",
        image: (require("../assets/images/image1.jpg")),
    },

];

const Neuro = () => {
    const navigation = useNavigation();
    const [isPressed, setIsPressed] = useState(false);
    const {
        deviceBorder, deviceContainer, fontColor,
        headerContainer, HeaderTitleContainer, HeaderTitleGreeting, HeaderTitleName, subtitle,
        PowerContainer, PowerIconContainer, powerMatric, powerIconBorder, PowerTitle, PowerTitleContainer, PowerDetailsContainer, PowerSubtitleContainer, iconbolt,
        AreaContainer, RoomContainer, RoomTitleContainer, RoomSubTitleContainer, RoomDetailsTitleContainer, RoomDetailsDeviceCountContainer, Room, BckImage, offset, RooomContainerLightShadow, RoomDetailsContainer, RoomDetailsTitle, RoomDetailsDeviceCount,
        footerModalContainer, FooterModalDetailsContainer, footerTitleContainer, footerTitle, footerSubTitleContainer, footerSubTitle, footerModalContinerDarkShadow, line } = Styles
    return (

        <View style={deviceBorder}>
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#8c8f92" translucent = {true}/>

            <View style={deviceContainer}>

                {/*Header */}
                <View style={headerContainer}>
                    {/*HeaderTitleContainer*/}
                    <View style={HeaderTitleContainer}>
                        <Text style={[HeaderTitleGreeting]}>Hello, <Text style={[HeaderTitleName]}>Annie!</Text></Text>
                    </View>

                    {/*HeaderSubTitle*/}
                    <View>
                        <Text style={[subtitle, fontColor]}>Aniting I can help you with?</Text>
                    </View>
                </View>

                {/*Power */}
                <View style={PowerContainer}>

                    {/*PowerIcon */}
                    <View style={PowerIconContainer}>
                        <TouchableOpacity onPress={() => {
                            setIsPressed(!isPressed)
                        }}>
                            <View style={offset}>
                                {/* color="#92969c" */}
                                <View style={[offset, powerIconBorder]}>
                                    <MaterialCommunityIcons
                                        name="lightning-bolt-outline"
                                        size={27}
                                        color='#92969c'
                                        style={iconbolt}
                                    >
                                    </MaterialCommunityIcons>
                                </View>
                            </View>

                        </TouchableOpacity>
                    </View>

                    {/*PowerDetailsContainer */}
                    <View style={PowerDetailsContainer}>
                        {/*PowerTitle */}
                        <View style={PowerTitleContainer}>
                            <Text style={PowerTitle}>26.3</Text>
                            <Text style={powerMatric}> Kwh</Text>

                        </View>

                        {/*PowerSubtitle */}
                        <View style={PowerSubtitleContainer}>
                            <Text style={subtitle}> Power usage for today</Text>
                        </View>
                    </View>

                </View>

                {/*Room Area */}

                <View style={AreaContainer}>

                    <View style={RoomContainer}>

                        <TouchableOpacity onPress={() => navigation.navigate('NeuroRoom')}>
                            <View style={RooomContainerLightShadow}>
                                <Image
                                    style={BckImage}
                                    source={require('../assets/images/bathtub.jpg')} />
                            </View>
                            <View style={RoomDetailsContainer}>
                                <View style={RoomDetailsTitleContainer}>
                                    <Text style={RoomDetailsTitle}>Bathroom</Text></View>
                                <View style={RoomDetailsDeviceCountContainer}>
                                    <Text style={[RoomDetailsDeviceCount]}>2 devices</Text></View>
                            </View>
                        </TouchableOpacity>


                    </View>
                    <View style={RoomContainer}>

                        <TouchableOpacity onPress={() => navigation.navigate('NeuroRoom')}>
                            <View style={RooomContainerLightShadow}>
                                <Image
                                    style={BckImage}
                                    source={require('../assets/images/couch.jpg')} />
                            </View>
                            <View style={RoomDetailsContainer}>
                                <View style={RoomDetailsTitleContainer}>
                                    <Text style={RoomDetailsTitle}>Living room</Text></View>
                                <View style={RoomDetailsDeviceCountContainer}>
                                    <Text style={[RoomDetailsDeviceCount]}>3 devices</Text></View>
                            </View>

                        </TouchableOpacity>


                    </View>

                </View>

                {/*footerModal */}

                <View style={[footerModalContainer,]}>
                    <View >
                        <TouchableOpacity>

                            <View style={[line,]}>
                            </View>
                            <View >
                                <View style={FooterModalDetailsContainer}>

                                    <View style={footerTitleContainer}>
                                        <Text style={footerTitle}>Quick remote access</Text>
                                    </View>
                                    <View style={footerSubTitleContainer}>
                                        <Text style={[subtitle, footerSubTitle]}>Swipe up to get a fast access to your wireless remote control</Text>
                                    </View>

                                </View>


                            </View>
                        </TouchableOpacity>

                    </View>


                </View>



            </View>
        </View >
    )
}

const Styles = StyleSheet.create({
    ////****************************Device****************************
    deviceBorder: {
        flex: 1,
        backgroundColor: "#fff",
    },
    deviceContainer: {
        margin: 5,
        height: '99%',
        backgroundColor: "#eaebef",
        borderRadius: 50,
    },

    ////****************************Header****************************
    headerContainer: {
        // backgroundColor: "green",
        flex: 1,
        marginTop: '10%',
        marginLeft: '10%',
        display: "flex",
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    HeaderTitleContainer: {

    },
    HeaderTitleGreeting: {
        fontSize: 28,
        fontFamily: 'Gill',
        fontWeight: '200',
        color: '#75777d',
    },
    HeaderTitleName: {
        fontWeight: 600,
        color: "#70747d"
    },
    subtitle: {
        fontSize: 15,
        color: '#a9aaae',
        marginTop: '3%'
    },
    fontColor: {
        color: '#a0a1a4'
    },
    //****************************Power Container**********************
    PowerContainer: {
        flex: 1,
        // backgroundColor: "red",
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    PowerIconContainer: {

        width: 100,
        height: 100,
        marginLeft: 10,
        display: 'flex',
        alignItems: 'center'
    },

    powerIconBorder: {
        borderRadius: 50,
        width: 65,
        height: 65,
        backgroundColor: '#eeeff1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'grey',
        shadowOffset: { width: 6, height: 6 },
        shadowOpacity: 0.6,
        shadowRadius: 5,

    },
    PowerDetailsContainer: {
        // backgroundColor: 'pink',
        flex: 1,
        width: 100,
        height: 100,
    },
    PowerTitleContainer: {

        // backgroundColor:'pink',
        marginLeft: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    PowerTitle: {
        fontSize: 30,
        color: '#52535a',
        fontWeight: '300',

    },
    powerMatric: {
        marginBottom: 4,
        fontSize: 15,
        color: '#52535a',
        fontWeight: '500'
        // fontFamily:themeFonts.circularBold

    },
    //****************************Room Area*************************
    AreaContainer: {
        flex: 2,
        // backgroundColor: "purple",
        marginLeft: '7%',
        flexDirection: 'row',
        display: 'flex'
    },
    RoomContainer: {
        // flex: 1,
        width: '57%',
        height: '90%',
        marginRight: '7%',
        shadowColor: '#b7b9c4',
        shadowOffset: { width: 6, height: 8 },
        shadowOpacity: 1,
        shadowRadius: 5,
        marginTop: -5

    },
    RooomContainerLightShadow: {
        shadowColor: '#f6f7f9',
        // shadowColor: 'blue',
        shadowOffset: { width: -8, height: -7 },
        shadowOpacity: 1,
        shadowRadius: 3
    },
    RoomDetailsContainer: {
        //backgroundColor:'pink',
        display: 'flex',
        alignItems: 'flex-start',
        position: 'absolute',
        bottom: 20,
        left: 25

    },
    offset: {
        borderRadius: 50,
        width: 60,
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#f6f7f9',
        shadowOffset: { width: -3, height: -5 },
        shadowOpacity: 1,
        shadowRadius: 5,
    },

    Room: {
        display: 'flex',
        justifyContent: 'center',
        marginHorizontal: 20,
        marginBottom: 30,
        marginTop: '100%',
    },
    RoomTitleContainer: {

        backgroundColor: 'red',
        // marginHorizontal:20,
        // padding:10

    },
    RoomDetailsTitle: {
        fontSize: 27,
        color: '#63656b',
        fontWeight: '500'
    },
    RoomDetailsDeviceCount: {
        fontSize: 16,
        color: '#949598'
    },
    RoomSubTitleContainer: {
        // marginHorizontal:20,
        // padding:10,
        // marginBottom:10,

        backgroundColor: 'pink',
    },
    BckImage: {
        width: '100%',
        height: '105%',
        borderRadius: 15,

    },


    //*************************Footer Section*************************
    footerModalContainer: {
        //flex: 2,
        //  marginHorizontal:2
        backgroundColor: "#eeeff1",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        height: '21%',
        width: '100%',
        marginTop: '20%',
        display: 'flex',
        alignItems: 'center',
        shadowColor: '#fafcfd',
        shadowOffset: { width: -10, height: -7 },
        shadowOpacity: 1,
        shadowRadius: 5,

        // shadowColor: 'grey',
        // shadowOffset: { width: 3, height: 10 },
        // shadowOpacity: 1,
        // shadowRadius: 5,
        // backgroundColor: 'pink'

    },
    footerModalContinerDarkShadow: {
        // backgroundColor: "#eeeff1",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        height: '21%',
        marginTop: '20%',
        display: 'flex',
        alignItems: 'center',
        shadowColor: 'red',
        shadowOffset: { width: 10, height: 47 },
        shadowOpacity: 1,
        shadowRadius: 5,

    },
    FooterModalDetailsContainer: {
        display: 'flex',
        alignItems: 'flex-start',
        marginLeft: '10%',
        marginTop: '5%'
    },
    footerTitleContainer: {
    },
    footerTitle: {
        fontSize: 25,
        color: '#5c6169',
        fontWeight: '500'
    },
    footerSubTitleContainer: {
        display: 'flex',
        width: '95%'
    },
    footerSubTitle: {
        fontSize: 15,
        color: '#adaeb0',

    },
    line: {
        width: 46,
        height: 5,
        backgroundColor: '#686d75',
        borderRadius: 500,
        alignSelf: 'center',
        marginVertical: 15
    },

})
export default Neuro
