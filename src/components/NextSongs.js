/* eslint-disable prettier/prettier */
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { mostLiked } from '../../constants';
import { themeColors } from '../../theme/theme';
import AntDesign from 'react-native-vector-icons/AntDesign'

const NextSongs = () => {

    const { nextList, songContainer, iconbottom, textWhite } = styles;
    return (
        <ScrollView
            showsVerticalScrollIndicator='false'

        >

            <View style={nextList}>
                <View style={songContainer}>

                    <Image
                        style={{ width: 40, height: 40, borderRadius: 50 }}
                        source={require('../../assets/images/highklassified.jpg')} />

                    <AntDesign style={iconbottom} name='heart' size={23} color={themeColors.IconGreen(1)}></AntDesign>

                    <View style={{ paddingLeft: 10 }}>
                        {/* title */}
                        <Text style={textWhite}>{mostLiked.name}</Text>
                        <Text style={textWhite}>5 izingoma &#183; High Klassified</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <AntDesign name='right' size={23} color="gray"> </AntDesign>
                </TouchableOpacity>

            </View>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    nextList: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10,
        

    },
    songContainer: {
        display: "flex",
        flexDirection: "row",
        marginHorizontal:10
    },
    iconbottom: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        left: 20,
        right: 40,
        bottom: -5,
    },
    textWhite: {
        color: themeColors.primaryTextColor(1)
    },
})

export default NextSongs;
