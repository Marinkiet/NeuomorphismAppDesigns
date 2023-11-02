import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native'
import { React, useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import  {Shadow}  from 'react-native-neomorph-shadows'
import { Neomorph } from 'react-native-neomorph-shadows';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { Button } from 'react-native'

const NeuroRoom = () => {
    const {
        deviceBorder, deviceContainer,
        HeadingContainer, HeadingHeaderContainer, HeadingHeaderIconContainer, HeadingHeaderTextContainer, HeadingHeaderText,
        ControlsContainer, ControlBox, ActiveControlLightShadow, ActiveControlDarkShadow, Control,
        InActiveControlLightShadow, ControlNameContainer, ControlName,


        ControlDetailsContainer, ControlDetailLeftContainer, ControlDetailRightContainer, ControlDetailLeftTitle,
        ControlDetailLeftValue, ControlDetailLeftTitleContainer, ControlDetailLeftValueContainer,
        ControlDetailRightTitleContainer, ControlDetailRightTitle, ControlDetailRightValueContainer,
        ControlDetailSwitchBackground, ControlDetailRightValue, ControlDetailRightButton,


        ControlBody, ControlBodyCircleBorder, ControlBodyCircle, ControlBodyCircleLightShadow, ControlBodyCircleDarkShadow,
        ControlBodyCircleValueContainer, ControlBodyCircleValue,
        ControlFooter, ControlFooterButton, ControlFooterLightShadow, ControlFooterText } = styles;

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const navigation = useNavigation();
    return (
        <View style={deviceBorder}>
            <View style={deviceContainer}>

                {/*HeadingContainer*/}
                <View style={HeadingContainer}>
                    {/*HeadingHeaderContainer*/}
                    <View style={HeadingHeaderContainer}>
                        {/*HeadingHeaderIconContainer*/}
                        <TouchableOpacity
                        onPress={() => navigation.goBack()}>
                        <View style={HeadingHeaderIconContainer}>
                        <MaterialCommunityIcons
                            name="arrow-left"
                            size={27}
                            color="#63656c">
                        </MaterialCommunityIcons>
                    </View>
                        </TouchableOpacity>
                      
                        {/*HeadingHeaderTextContainer*/}
                        <View style={HeadingHeaderTextContainer}>
                            <Text style={HeadingHeaderText}>Living Room</Text>
                        </View>
                    </View>
                </View>

                {/*Controls*/}
                <View style={ControlsContainer}>
                    {/*Control*/}

                    <View style={[ActiveControlLightShadow, Control]}>
                        <View style={[ControlBox, ActiveControlDarkShadow]}>
                            <MaterialCommunityIcons
                                name="temperature-celsius"
                                size={20}
                                color="#808488"></MaterialCommunityIcons>
                        </View>

                        <View style={ControlNameContainer}>
                            <Text style={ControlName}>Temp</Text>
                        </View>


                    </View>
                    <View style={Control}>

                        <Neomorph
                            inner
                            useArt
                            style={InActiveControlLightShadow}>

                            <Entypo
                                name="light-up"
                                size={25}
                                color="#808488"></Entypo>
                        </Neomorph>

                        <View style={ControlNameContainer}>
                            <Text style={ControlName}>Light</Text>
                        </View>


                    </View>
                    <View style={Control}>
                        <Neomorph
                            inner
                            useArt
                            style={InActiveControlLightShadow}>
                            <MaterialIcons
                                name="wifi"
                                size={21}
                                color="#808488"></MaterialIcons>
                        </Neomorph>


                        <View style={ControlNameContainer}>
                            <Text style={ControlName}>Internet</Text>
                        </View>

                    </View>
                    <View style={Control}>
                        <Neomorph
                            inner
                            useArt
                            style={InActiveControlLightShadow}>
                            <AntDesign
                                name="plus"
                                size={18}
                                color="#808488"></AntDesign>
                        </Neomorph>
                        <View style={ControlNameContainer}>
                            <Text style={ControlName}>Add</Text>
                        </View>
                    </View>


                </View>

                {/*ControlBody*/}
                <View style={[ControlBody]}>
                    <View style={[ControlBodyCircleBorder, ControlBodyCircleLightShadow]}>

                        <View style={[ControlBodyCircle, ControlBodyCircleDarkShadow]}>
                        </View>
                    </View>
                    <View style={ControlBodyCircleValueContainer}>
                        <Text style={ControlBodyCircleValue}>27. 0&deg;C</Text>
                    </View>

                </View>

                {/*ControlDetails*/}
                <View style={ControlDetailsContainer}>
                    {/*ControlDetailsLeft*/}
                    <View style={ControlDetailLeftContainer}>

                        <View style={ControlDetailLeftTitleContainer}>
                            <Text style={ControlDetailLeftTitle}>Current temperature</Text>
                        </View>

                        <View style={ControlDetailLeftValueContainer}>
                            <Text style={ControlDetailLeftValue}>18.5</Text>
                        </View>

                    </View>
                    {/*ControlDetailsRight*/}
                    <View style={ControlDetailRightContainer}>

                        <View style={ControlDetailRightTitleContainer}>
                            <Text style={ControlDetailRightTitle}>Turn On / Off</Text>
                        </View>

                        <View style={ControlDetailRightValueContainer}>
                            <Neomorph
                                inner
                                useArt
                                style={ControlDetailSwitchBackground}>
                                <Text style={ControlDetailRightValue}>Off</Text>
                            </Neomorph>
                            <Shadow
                                style={ControlDetailRightButton}>
                            </Shadow>
                        </View>

                    </View>

                </View>

                {/*ControlFooter*/}
                <View style={ControlFooter}>
                    <View style={[ControlFooterButton, ControlFooterLightShadow]}>
                        <TouchableOpacity>
                            <Text style={ControlFooterText}>Set temperature</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    deviceBorder: {
        flex: 1,
        backgroundColor: "#fff",
    },
    deviceContainer: {
        margin: 5,
        height: '99%',
        backgroundColor: "#ebecf0",
        borderRadius: 50,
    },
    HeadingContainer: {
        flex: 1,
        marginTop: 30
    },
    HeadingHeaderContainer: {
        display: 'flex',
        // backgroundColor: 'pink',
        flex: 1,
        marginLeft: '8%',
        justifyContent: 'flex-end',
    },
    HeadingHeaderIconContainer: {
        marginBottom: 10,

    },
    HeadingHeaderTextContainer: {
        marginTop: 10
    },
    HeadingHeaderText: {
        fontSize: 25,
        marginLeft: 5,
        fontWeight: '500',
        color: '#63656c'
    },
    ControlsContainer: {
        flex: 1,
        //backgroundColor: 'lightblue',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 20
    },
    Control: {
        display: 'flex',
        alignItems: 'center',
    },
    ControlBox: {
        width: 52,
        height: 52,
        backgroundColor: '#eaebef',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',

    },
    ControlNameContainer: {
        display: 'flex',
    },
    ControlName: {
        color: '#717379',
        marginTop: 10,
        fontSize: 12,
        fontWeight:'500'
    },
    ActiveControlLightShadow: {
        shadowColor: '#f6f7f9',
        shadowOffset: { width: -4, height: -7 },
        shadowOpacity: 0.7,
        shadowRadius: 5
    },
    ActiveControlDarkShadow: {
        shadowColor: 'grey',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.6,
        shadowRadius: 4,

    },
    InActiveControlLightShadow: {
        borderRadius: 12,
        shadowRadius: 3,
        backgroundColor: '#e8e9ec',
        width: 52,
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        shadowOpacity: 0.4,
        // shadowOffset: { width: 5, height: 5 },
    },
    ActiveControl: {
        shadowColor: 'grey',
        shadowOffset: { width: 5, height: 6 },
        shadowOpacity: 0.6,
        shadowRadius: 4,
    },
    ActiveInnerLightControl: {
        shadowColor: 'white',
        shadowOffset: { width: 5, height: 6 },
        shadowOpacity: 0.6,
        shadowRadius: 4,
    },
    ControlBody: {
        flex: 3,
        // backgroundColor: 'dodgerblue',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    ControlBodyCircleBorder: {
        backgroundColor: '#f4f5f9',
        content: "",
        width: 270,
        height: 270,
        borderRadius: 135,
        borderWidth: 1,
        borderColor: '#e0e1e5',
        borderRightColor: '#4f5658',
        borderBottomColor: '#4f5658',
        transform: [{ rotateZ: '-1.00rad' }],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'

        // content: '';
        // position: absolute;
        // bottom: 0;
        // left: 0;
        // border-bottom: 2px solid blue;
        // width: 40%;

    },
    ControlBodyCircle: {
        width: 220,
        height: 220,
        borderRadius: 150,
        backgroundColor: '#edeef0',
        // backgroundColor:'pink',
        shadowColor: 'white',
        shadowOffset: { width: -15, height: 0 },
        shadowOpacity: 0.7,
        shadowRadius: 30
    },
    ControlBodyCircleValueContainer: {
        position: 'absolute'

    },
    ControlBodyCircleValue: {
        fontSize: 45,
        fontWeight: '100',
        color:'#4f5658'

    },
    // ControlBodyCircleLightShadow: {
    //     shadowColor: '#bcbecb',
    //     shadowOffset: { width: -15, height: -20 },
    //     shadowOpacity: 0.7,
    //     shadowRadius: 30
    // },
    ControlBodyCircleDarkShadow: {
        shadowColor: '#bcbecb',
        shadowOffset: { width: 0, height: 30 },
        shadowOpacity: 0.6,
        shadowRadius: 10,
    },
    ControlDetailsContainer: {
        flex: 1,
        //backgroundColor: 'orange',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '-5%',
        marginLeft: '5%'
    },
    ControlDetailLeftContainer: {
        // backgroundColor: "pink",
        width: '50%',
        display: 'flex',
        padding: '5%',
        alignItems: 'flex-start',
        justifyContent: 'space-around'

    },
    ControlDetailLeftTitleContainer: {

    },
    ControlDetailLeftTitle: {
        fontSize: 13,
        color: '#505258',
        fontWeight:'600'

    },
    ControlDetailLeftValueContainer: {

    },
    ControlDetailLeftValue: {
        fontSize: 26,
        color: 'gray',
        fontWeight:'300'
    },
    ControlDetailRightContainer: {
        //   backgroundColor: "yellow",
        width: '50%',
        padding: '5%',
        alignItems: 'flex-start',
        justifyContent: 'space-around',

    },
    ControlDetailRightTitleContainer: {

    },
    ControlDetailRightTitle: {
        fontSize: 13,
        color: '#505258',
        fontWeight:'600'
    },
    ControlDetailRightValueContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row'
    },
    ControlDetailSwitchBackground: {
        borderRadius: 50,
        shadowRadius: 3,
        backgroundColor: '#e8e9ec',
        width: 68,
        height: 30,
        justifyContent: 'center',
        alignItems: 'flex-start',
        display: 'flex',
        shadowOpacity: 0.2,


    },
    ControlDetailRightValue: {
        color: '#aeb2b5',
        fontSize: 9,
        marginHorizontal: 12
    },
    ControlDetailRightButton: {
        width: 28,
        height: 28,
        borderRadius: 15,
        backgroundColor: '#e8e9ec',
        position: 'absolute',
        left: 37,
        // borderRadius: 20,
        shadowOpacity: 0.25,
        shadowColor: 'black',
        shadowRadius: 2,
        // backgroundColor: '#ECF0F3',
        // width: 300,
        // height: 120,
    },
    ControlFooter: {
        flex: 1,
        // backgroundColor: 'grey',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 35,
        shadowColor: 'grey',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.6,
        shadowRadius: 3,

    },
    ControlFooterButton: {
        backgroundColor: '#e8e9ed',
        width: '85%',
        height: '53%',
        borderRadius: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    ControlFooterText: {
        fontSize: 16,
        color: '#505258'
    },
    ControlFooterLightShadow: {
        shadowColor: 'white',
        //  shadowColor:'red',
        shadowOffset: { width: -5, height: -5 },
        shadowOpacity: 1,
        shadowRadius: 10
    },

})

export default NeuroRoom

// <Switch
// trackColor={{ false: '#767577', true: '#ccc' }}
// thumbColor={isEnabled ? '#fff' : '#fff'}
// ios_backgroundColor="#3e3e3e"
// onValueChange={toggleSwitch}
// value={isEnabled}
// />