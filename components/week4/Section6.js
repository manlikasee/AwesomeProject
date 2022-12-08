import React from 'react';
import { Image, Text, View } from 'react-native';


export default function Section6() {
    return (
        <View>
        <View style={{ flexDirection: 'column', padding: 20 }}>
            <Text style={{ fontSize: 15 }}>Location</Text>
            <Text style={{ fontSize: 10,color:'grey' }}>218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et…</Text>
        </View>
        <View style={{flexDirection:'row', marginTop :10}}>
        <Image style={{ flex: 1, resizeMode: 'cover', aspectRatio: 16/5  }} source={require('../../assets/week3/map.jpg')} />
        </View>
        </View>
    );
}
