import React from 'react';
import { Image, Text, View } from 'react-native';


export default function Section7() {
    return (
        <View style={{ padding: 10 }}>
            <View>
                <Text style={{ fontSize: 15 }}>Room Type </Text>
            </View>
            <View style={{ flexDirection: 'row', padding: 0 }}>
                <View>
                    <Image style={{ width: 50, height: 110, borderStartWidth: 90, borderRadius: 10 }} source={require('../../assets/week3/room-8.jpg')} />
                </View>
                <View style={{ marginLeft: 10, }}>
                    <Text style={{marginBottom:30}}> Standard Twin Room </Text>
                    <Text style={{fontSize:20,color:"tomato"}}> $399.99 </Text>
                    <Text style={{color:"lightblue"}}> Hurry Up! This is your last room! </Text>
                </View>
            </View>
        </View>
    );
}
