import {View, Text, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const UmtapoWako = () => {
  const size = 200
  const borderWidth = 5

  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <LinearGradient
        colors={[
          '#405DE6',
          '#5B51D8',
          '#833AB4',
          '#C13584',
          '#E1306C',
          '#FD1D1D',
          '#F56040',
          '#FCAF45',
          '#FFDC80',
        ]}
        start={{x: 0, y: 0}} end={{x: 0.8, y: 1}}
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{
          backgroundColor: '#fff',
          width: size - (borderWidth * 2),
          height: size - (borderWidth * 2),
          borderRadius: (size - (borderWidth * 2)) / 2,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Image
            source={{ uri: 'https://cdn.24.co.za/files/Cms/General/d/11632/942ef87883cb40b3871e8ced3f1c5326.jpg' }}
            borderRadius={(size - (borderWidth * 4)) / 2}
            resizeMethod='scale'
            resizeMode='cover'
            style={{
              width: size - (borderWidth * 4),
              height: size - (borderWidth * 4),
            }}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default UmtapoWako;
