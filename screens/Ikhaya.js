import { ImageBackground, View, Text, StyleSheet,StatusBar, TouchableOpacity, Image, FlatList } from 'react-native';
import React from 'react';
import { themeFonts } from '../theme/theme';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { themeColors } from '../theme/theme';

const DATA = [
  {
    id: '1',
    title: "I'm Fine - IMANU Remix",
    image: (require("../assets/images/image2.jpg")),
    viewCount: '823,428',
  },
  {
    id: '2',
    title: "I'm Fine ",
    image: (require("../assets/images/image1.jpg")),
    viewCount: '823,428',
  },

];

const Item = ({ title, image, id, viewCount }) => (
  // const {Song, SongImageandNumberContainer, SongTitleAndCountContainer, SongViewMoreIcon

  //   , SongImage, SongNumber,SongTitle ,SongListingCount}=styles;
  <View style={styles.Song}>
    <View style={styles.SongImageandNumberContainer}>
      <Text style={styles.SongNumber}>{id}</Text>
      <Image style={styles.SongImage} source={image} />
    </View>

    <View style={styles.SongTitleAndCountContainer}>
      <View>
        <Text style={styles.SongTitle}>{title}</Text>
      </View>


      <View >
        <Text style={styles.SongListingCount}>{viewCount}</Text>
      </View>
    </View>


    <View style={styles.SongViewMoreIcon}>
      <TouchableOpacity>
        <AntDesign name='ellipsis1' size={23} color="#b4b4b4"></AntDesign>
      </TouchableOpacity>
    </View>

 

  </View>
);
const Ikhaya = () => {
  const { container, bannerTitle, IconBtn, NextSong,NextContainer,
    NextSongCountContainer, NextSongCountIconContainer,
    NextSongCountTitle, NextSongCountButton, NextSongCountButtonContainer,
    NextSongCountTitleContainer, NextSongCountTitleNumbers, NextSongPlayIcon,
    NextSongShuffleIcon,
    UpNext, UpNextImageContainer, UpNextSongContainer, UpNextIcon, UpNextImage,
    UpNextHeartIcon, UpNextSongTitle, UpNextSongCountAndArtistName,dot,

    SongContainer, SongCategoryTitle } = styles;
  return (
  
    <View
      style={styles.pageLayout}>
      <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>

      
      <View style={{ flex: 1 }}>
        <ImageBackground
          style={container}
          source={require('../assets/images/highklassified.jpg')}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}
            style={IconBtn}>
            <Entypo name='chevron-thin-left' size={18} color="white"></Entypo>
          </TouchableOpacity>
          <Text style={bannerTitle}>High Klassified</Text>
        </ImageBackground>
      </View>
      <LinearGradient colors={['#282828', '#090909', '#131313','#121212']} style={styles.linearGradient}>
      <View style={{ flex: 1}}>

        <View style={[NextSong,NextContainer]}>
     
          <View style={[NextSongCountContainer]}>
            <View style={NextSongCountTitleContainer}>
              <Text style={NextSongCountTitle}>Abalaleli benyanga anbangu-
                <Text style={NextSongCountTitleNumbers}>166,307</Text></Text>
            </View>
            <View style={NextSongCountButtonContainer}>
              <TouchableOpacity>
                <Text style={NextSongCountButton}>OBALANDELAYO</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign name='ellipsis1' size={23} color="#b4b4b4"></AntDesign>
              </TouchableOpacity>
            </View>
          </View>

          <View style={NextSongCountIconContainer}>
            <TouchableOpacity style={NextSongPlayIcon}>
              <FontAwesome name='play' size={25} color="white" ></FontAwesome>
            </TouchableOpacity>
            <TouchableOpacity style={NextSongShuffleIcon}>
              <Entypo name='shuffle' size={11} color="#51a979" ></Entypo>
            </TouchableOpacity>
          </View>

        </View>


        <View style={[NextSong]}>
          <View style={UpNext}>

            <View style={UpNextImageContainer}>
              <View >
                <Image style={UpNextImage} source={require('../assets/images/highklassified.jpg')} />
                <TouchableOpacity style={UpNextHeartIcon}>
                  <AntDesign name='heart' size={12} color="white" ></AntDesign>
                </TouchableOpacity>
              </View>

            </View>

            <View style={UpNextSongContainer}>
              <View>
                <Text style={UpNextSongTitle}>Izingoma Ezithandiwe</Text>
              </View>

              <View style={NextSongCountButtonContainer}>
               
                <View style={UpNextSongCountAndArtistName}>
                <Text style={UpNextSongCountAndArtistName}>5 izingoma</Text>
                <Text style={dot}>&#x2022;</Text>
                <Text style={UpNextSongCountAndArtistName}>High Klassified</Text>
                </View>
               
                
              </View>

            </View>

            <View style={UpNextIcon}>
              <TouchableOpacity >
                <Entypo name='chevron-thin-right' size={18} color="#b4b4b4"></Entypo>
              </TouchableOpacity>

            </View>

          </View>
        </View>

        <View style={[NextSong]}>
          <View style={SongContainer}>
            <View >
              <Text style={SongCategoryTitle}>Okudumile</Text>
            </View>

            <FlatList
              data={DATA}
              renderItem={({ item }) => <Item
                {...item} />}
              keyExtractor={item => item.id}
            />



          </View>

        </View>
      </View>
      </LinearGradient>

    </View>
  );
};


const styles = StyleSheet.create({

  pageLayout: {
    flex: 1,
  },
  container: {
    width: '100%',
    height: '170%',
    display: 'flex',
    alignItems: 'center',
    flex: 3
  },
  bannerTitle: {
    fontSize: 54,
    fontFamily: themeFonts.circularBlack,
    position: 'absolute',
    bottom: 2,
    color: 'white',
    letterSpacing: -3,
  },
  IconBtn: {
    position: 'absolute',
    left: 15,
    borderRadius: 50,
    backgroundColor: themeColors.IconGrey(0.3),
    width: 32,
    height: 32,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25

  },
  NextContainer: {
    //gradient background
    // backgroundColor:"orange"
  },
  NextSong: {
    // backgroundColor:'orange',
    // flex: 1,
    display: 'flex',
    flexDirection: 'row',
    marginLeft:15,
    marginRight:5
  },
  NextIcon: {
    width: 65
  },
  NextSongCountContainer: {
    // backgroundColor: 'pink',
    flex: 1,
    display: 'flex',
    justifyContent: 'space-around',
    gap: -30,
    height: 90,
   
  },
  NextSongCountIconContainer: {
    // backgroundColor: 'green',
    width: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    

  },
  NextSongCountTitleContainer: {

  },
  NextSongCountTitle: {
    // backgroundColor: '#f3cde5',
    fontSize: 14.5,
    color: '#b4b4b4',
    fontFamily: themeFonts.circularBook,
  },
  NextSongCountTitleNumbers: {
    fontFamily: themeFonts.circularBook,
    color: '#b4b4b4',
  },
  NextSongCountButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor: '#60baf0',
    alignItems: 'center',
  },
  NextSongCountButton: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    color: 'white',
    letterSpacing: 1,
    fontSize: 11,
    borderColor: 'white',
    borderRadius: 4,
    borderWidth: 1,
    fontFamily: themeFonts.circularBold,
    marginRight: 30
  },
  NextSongPlayIcon: {
    width: 60,
    height: 60,
    backgroundColor: '#1cb956',
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 6
  },
  // gradient: {
  //   flex: 1,
  //   width: '100%',
  //   backgroundImage: 'linear-gradient(to bottom, orange, blue)',
  // },
  NextSongShuffleIcon: {
    position: 'absolute',
    left: 70,
    top: 57,
    left: 50,
    width: 20,
    height: 20,
    backgroundColor: '#f0f9f9',
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 1

  },
  // -------------- UP Next -----------------
  UpNext: {
    // backgroundColor: '#121212',
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20

  },
  UpNextContainer: {
    backgroundColor: 'red',
  },
  UpNextImageContainer: {
    // backgroundColor:'yellow',
    width: 60,
    display: 'flex',
    alignItems: 'center',
    marginRight: 10

  },
  UpNextSongContainer: {
    // backgroundColor: 'pink',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    // gap: -55
  },
  UpNextIcon: {
    //backgroundColor:'purple',
    width: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },
  UpNextImage: {
    width: 35,
    height: 35,
    borderRadius: 50

  },
  UpNextHeartIcon: {
    position: 'absolute',
    top: 19,
    left: 24,
    width: 22,
    height: 22,
    backgroundColor: '#1fb358',
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 1,
    paddingTop:2,
    borderWidth:3,
    borderEndColor:'black'
    
  },
  UpNextSongTitle: {
    fontWeight: '600',
    // fontFamily:themeFonts.circularBlack,
    fontSize: 15,
    color: 'white'

  },
  UpNextSongCountAndArtistName: {
    fontFamily: themeFonts.circularLight,
    color: '#b2b2b2',
    fontSize: 13,
    fontWeight: '400',
    paddingTop:1,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },

  // --------------- Songs --------------------
  SongCategoryTitle: {
    color: 'white',
    fontFamily: themeFonts.circularBold,
    fontSize: 18,
  },
  SongContainer: {
    flex: 1,
    marginTop:20,

    // backgroundColor: 'pink'
  },
  Song: {
    // backgroundColor: 'orange',
    display: 'flex',
    flexDirection: 'row',
    marginTop:15,
    height: 50,
    marginBottom:-4
    

  },
  SongImageandNumberContainer: {
    width: 85,
    // backgroundColor: 'green',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap:-5

  },
  SongImage: {
    width: 45,
    height: 45,
  },
   SongNumber: {
    fontFamily: themeFonts.circularMeduim,
    fontSize: 15,
    color: 'white',
    fontWeight: '400'
  },
  SongTitleAndCountContainer: {
    flex: 1,
    // backgroundColor: 'orange',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: 3,

  },
  SongTitle: {
    fontWeight: '600',
    fontSize: 15,
    color: 'white'
  },

  SongListingCount: {
    fontFamily: themeFonts.circularLight,
    color: '#828282',
    fontSize: 14,
    fontWeight: '400'

  },
  SongViewMoreIcon: {
    // width: 80,
    // backgroundColor: 'purple',
    width: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
     flex: 1,
  },
  dot:{
  
  fontSize:18,
  color:'#b8b8b8',
  position:'relative',
  top:1,
  padding:0
  }
})
export default Ikhaya;
//  <View style={styles.textView}>
//      <Text style={styles.imageText}>High Klassified</Text>
//    </View>