/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet,FlatList} from 'react-native';
import React from 'react';
import Song from './Songs';
import { themeColors } from '../../theme/theme';
themeColors
const FeaturedRow = ({name, songs}) => {
  const {categoryTitle, categoryContainer,textWhite} = styles;
  return (
    <View>
      <View style={categoryContainer}>
        <Text style={[categoryTitle,textWhite]}>{name}</Text>
      </View>
      
      <FlatList
  data={songs}
  renderItem={({ item }) => <Song key={item.id} {...item}/>}
/>
    </View>
  );
};
const styles = StyleSheet.create({
  categoryContainer: {},
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    // marginTop: 20,
    marginHorizontal:10
  },
  textWhite:{
    color:themeColors.primaryTextColor(1)
},
});

export default FeaturedRow;
