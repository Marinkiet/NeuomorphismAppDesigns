/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { themeColors } from '../../theme/theme';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const PlayingNow = props => {
  const {play, playBanner,nextBtn,shufflePlay,allNext,iconbottom,textLight,textWhite} = styles;
  return (
    <SafeAreaView>
      {/* Playing Now  */}
      <View style={playBanner}>
        <View>
          <Text style={textLight}>Abalaleli benyanga anbangu-{props.watchCount}</Text>

          <View style={play}>
            <TouchableOpacity>
              <Text style={[nextBtn,textWhite]}>OBALANDELAY0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={allNext}>
            <Feather name='more-horizontal' size={23} color="grey"></Feather>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={shufflePlay}>
            <AntDesign name='play' size={50} color={themeColors.IconGreen(1)}> </AntDesign>
            
            <MaterialCommunityIcons  style={iconbottom} name='shuffle' size={18} color='white'/>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    textLight:{
        color:themeColors.primaryTextColor(0.7),
        fontSize:12
    },
    textWhite:{
        color:themeColors.primaryTextColor(1)
    },
  play: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    
  },
  playBanner: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal:10,
     marginTop:-30
    
  },
  nextBtn:{
    padding:2,
    borderWidth:1,
    borderRadius:5,
    marginTop:10,
    fontSize:11,
    fontWeight:"bold",
    borderColor:'white',
    marginRight:10
    
  },
  shufflePlay:{
    // backgroundColor: '#1ED760', 
    
    borderRadius: 50,
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
    
  },
  allNext:{
   marginTop:5,
    marginLeft:10
  },
  iconbottom:{
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 32,
    right: 0,
    bottom: -5,
    top:35,
  }
});
export default PlayingNow;
