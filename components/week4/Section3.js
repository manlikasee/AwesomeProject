import React from 'react';
import { Text, View } from 'react-native';


export default function Hotel() {
    return (
        <View style={{ flexDirection : 'row',padding : 10  }}>
        <View style={{ height: 40, width: 40, borderRadius: 50 / 2, backgroundColor: 'tomato', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, color: "white" }}>9.5</Text>
        </View>
        <View style={{ marginLeft : 10 }}>
                    <Text style={{ fontSize : 20 }}> Steve Garrett </Text>
                    <Text style={{ color : "grey" }}> 5 hours ago | 100k views </Text>
                </View>
        
        </View>
        
        


    );
}
