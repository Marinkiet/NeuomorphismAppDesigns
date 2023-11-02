/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../../theme/theme';
import { themeFonts } from '../../theme/theme';
import AntDesign from 'react-native-vector-icons/AntDesign'

const Banner = () => {
    const navigation = useNavigation();
    const {
        imageLayout,container,IconBtn} = styles;
  return (
    <View style={container}>
    <ImageBackground
      resizeMode={'cover'}
      source={require('../../assets/images/highklassified.jpg')}
      style={imageLayout}>
      <TouchableOpacity onPress={() => navigation.goBack()}
        style={IconBtn}>
        <AntDesign name='left' size={23} color="lightgray"> </AntDesign>

      </TouchableOpacity>
      <View style={styles.textView}>
          <Text style={styles.imageText}>High Klassified</Text>
        </View>
    </ImageBackground>

  </View>
  )
}
const styles = StyleSheet.create({
    IconBtn:{
      borderRadius: 50,
       backgroundColor: themeColors.bgColor(0.3),
        width: 35, 
        height: 35, 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        margin:20

    },
    imageLayout: {
        width: '100%',
        height: '140%',
      },
      container:{
        flex:1,
       
      },
      textView: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        left: 0,
        right: 0,
        bottom: 0,
        top:190
      },
      imageText: {
        fontSize: 50,
        color: 'white',
        fontFamily:themeFonts.circularBold,
      },
})

export default Banner