import React from 'react';
import { Image, View } from 'react-native';


export default function Section1() {
    return (
        <View style={{ flexDirection: 'row',padding : 20  }}>
            <Image style={{ flex: 1, resizeMode: 'cover', aspectRatio:   3 }} source={require('../../assets/week3/room-6.jpg')}/>
            
        </View>    
    );
}
