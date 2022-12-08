import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';



export default function Section2() {
    return (
        <View style={{ borderWidth :1,borderColor : "lightgrey",backgroundColor : "lightgrey", marginTop : -40, padding : 10, borderRadius: 20,}}>
            <View style={{ flexDirection: 'row', justifyContent:'center', }}>
                <Text  style={{fontSize:20}}> Hilton San Francisco</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent:'center', marginVertical : 30}}>
                
                <FontAwesome name="star" size={32} color="gold" />
                <FontAwesome name="star" size={32} color="gold" />
                <FontAwesome name="star" size={32} color="gold" />
                <FontAwesome name="star-half" size={32} color="gold" />
                </View>
            <View >
                <Text style={{textAlign:'center',fontSize:15}}> Facilities provided may range from a modest quality mattress in a small room to large suites</Text>
            </View>


        </View>
    );
}
