/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import { themeColors } from '../../theme/theme';
const Song = ({title,viewCount,id,image}) => {
    const { songContainer, songCount, songRow, songName, song,textWhite } = styles;
    return (
        //Single Song
        <SafeAreaView>
      
            <View style={songContainer}>
                    <View style={songRow}>

                        <Text style={[songCount,textWhite]}>{id}</Text>

                        <Image
                            style={{ width: 40, height: 40 }}
                            source={image} />

                        <View style={song}>
                            {/* title and view count*/}
                            <View style={{ paddingLeft: 10 }}>
                                <Text style={[songName,textWhite]}>{title}</Text>
                                <Text style={textWhite}>{viewCount}</Text>
                            </View>


                        </View>

                    </View>
                    <TouchableOpacity>
                    <Feather name='more-horizontal' size={23} color="grey"></Feather>
                    </TouchableOpacity>

            </View>
            </SafeAreaView>



    );
};

const styles = StyleSheet.create({
    songContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        padding: 5,
        marginHorizontal:10

    },
    songCount: {
        fontSize: 16,
        marginRight: 10,

    },
    songRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    songName: {
        fontWeight: 'bold',
    },
    song: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconbottom:{
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        left: 20,
        right: 40,
        bottom: -5,
      },
      textWhite:{
        color:themeColors.primaryTextColor(1)
    },
});
export default Song;
