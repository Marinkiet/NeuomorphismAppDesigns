import React from 'react';
import UpNext from '../src/components/UpNext';
import {ScrollView, View,FlatList} from 'react-native';
import {StyleSheet} from 'react-native';
import Song from '../src/components/Songs';
import Banner from '../src/components/Banner';
import {SafeAreaView} from 'react-native-safe-area-context';
import FeaturedRow from '../src/components/FeaturedRow';
import NextSongs from '../src/components/NextSongs';
import {popular} from '../constants';
import { themeFonts } from '../theme/theme';

const Sesha = () => {
  // eslint-disable-next-line prettier/prettier
  const { Container } = styles;

  return (
    <View style={{flex: 1}}>

    <Banner />
      <SafeAreaView style={Container}>

      <UpNext watchCount="166,307" />
      <NextSongs/>

      <View>
        {[popular].map((item, index) => {
          return (
            <FeaturedRow key={index} name={item.name} songs={item.songs} />
          );
        })}
        
      </View>

    </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    marginHorizontal: 0,
    flex: 1,
    marginTop:50,
    backgroundColor:'#121212'  ,
// backgroundColor: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(69,69,69,1) 0%, rgba(0,0,0,1) 63%)',
  },
});

export default Sesha;
